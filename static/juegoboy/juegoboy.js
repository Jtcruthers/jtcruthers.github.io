import init, { Emulator, Button } from "./pkg/gameboy_web.js";

export { Button };

const WIDTH = 160;
const HEIGHT = 144;
const MS_PER_FRAME = (70224 / 4194304) * 1000; // ≈ 59.73 fps
const SAVE_INTERVAL_MS = 5000;

/** KeyboardEvent.code → button. Same layout as the native frontend. */
const KEYS = {
  KeyW: Button.Up,
  KeyA: Button.Left,
  KeyS: Button.Down,
  KeyD: Button.Right,
  ArrowUp: Button.A,
  ArrowLeft: Button.B,
  ArrowRight: Button.Start,
  ArrowDown: Button.Select,
};

/**
 * Attach an emulator to a canvas.
 *
 * Options:
 *   romInput  – <input type="file"> to load ROMs from
 *   saveInput – <input type="file"> to import .sav files from
 *   keyTarget – where to listen for keys (default: the canvas; pass `window` for page-wide)
 */
export async function mount(canvas, { romInput, saveInput, keyTarget = canvas } = {}) {
  await init();

  canvas.width = WIDTH;
  canvas.height = HEIGHT;
  canvas.style.imageRendering = "pixelated";
  if (keyTarget === canvas) canvas.tabIndex = 0; // canvases only get key events when focusable

  const ctx = canvas.getContext("2d");
  let emulator = null;
  let rom = null;
  let title = "";
  let saveKey = null;
  // What this tab last read from or wrote to storage. Only write when the RAM differs from it,
  // so an idle tab can't overwrite a newer save made in another tab.
  let lastSaved = null;
  let paused = false;
  let lastTime = 0;
  let behind = 0;

  function draw() {
    const pixels = new Uint8ClampedArray(emulator.frame());
    ctx.putImageData(new ImageData(pixels, WIDTH, HEIGHT), 0, 0);
  }

  // Persist cartridge RAM to localStorage. Wrapped in try/catch since storage can be
  // unavailable (private browsing) or full; the emulator should keep running either way.
  function save() {
    if (!emulator || !saveKey) return;
    const ram = emulator.get_cartridge_ram();
    if (ram.length === 0) return;
    const encoded = btoa(String.fromCharCode(...ram));
    if (encoded === lastSaved) return;
    try {
      localStorage.setItem(saveKey, encoded);
      lastSaved = encoded;
    } catch (err) {
      console.warn("Couldn't write save", err);
    }
  }

  function releaseAll() {
    for (const button of Object.values(KEYS)) emulator?.release_button(button);
  }

  // requestAnimationFrame runs based on the display's refresh rate,
  // so run however many frames are due.
  // TODO - port this to the gui
  function loop(now) {
    requestAnimationFrame(loop);
    if (!emulator || paused) return;

    behind = Math.min(behind + now - lastTime, MS_PER_FRAME * 5);
    lastTime = now;
    if (behind < MS_PER_FRAME) return;

    while (behind >= MS_PER_FRAME) {
      emulator.step_frame();
      behind -= MS_PER_FRAME;
    }
    draw();
  }

  function onKey(e) {
    const button = KEYS[e.code];
    if (button === undefined || !emulator) return;
    e.preventDefault();
    if (e.type === "keydown") emulator.press_button(button);
    else emulator.release_button(button);
  }

  keyTarget.addEventListener("keydown", onKey);
  keyTarget.addEventListener("keyup", onKey);
  keyTarget.addEventListener("blur", releaseAll);
  window.addEventListener("blur", releaseAll);

  // Save periodically and whenever the page is hidden or closed
  setInterval(save, SAVE_INTERVAL_MS);
  document.addEventListener("visibilitychange", () => {
    if (document.visibilityState === "hidden") save();
  });
  window.addEventListener("pagehide", save);

  romInput?.addEventListener("change", async () => {
    const file = romInput.files[0];
    if (!file) return;
    gb.loadRom(await file.arrayBuffer());
    romInput.blur();
    if (keyTarget === canvas) canvas.focus();
  });

  saveInput?.addEventListener("change", async () => {
    const file = saveInput.files[0];
    saveInput.value = ""; // allow picking the same file again
    if (!file) return;
    try {
      gb.importSave(await file.arrayBuffer());
      saveInput.dispatchEvent(new CustomEvent("saveimported"));
    } catch (err) {
      saveInput.dispatchEvent(new CustomEvent("saveerror", { detail: err }));
    }
    if (keyTarget === canvas) canvas.focus();
  });

  const gb = {
    /** Start a ROM from an ArrayBuffer, replacing any running one. */
    loadRom(bytes) {
      save(); // flush the outgoing game before replacing it
      emulator?.free();

      rom = new Uint8Array(bytes);
      emulator = new Emulator(rom);

      // Key saves by the header title (0x134-0x143) plus global checksum (0x14E-0x14F)
      // so different games, and different revisions of the same game, don't collide.
      title = String.fromCharCode(...rom.subarray(0x134, 0x144)).replace(/\0+$/, "");
      const checksum = ((rom[0x14e] << 8) | rom[0x14f]).toString(16).padStart(4, "0");
      saveKey = `juegoboy:sav:${title}:${checksum}`;

      try {
        const stored = localStorage.getItem(saveKey);
        if (stored) {
          emulator.load_cartridge_ram(Uint8Array.from(atob(stored), (c) => c.charCodeAt(0)));
        }
      } catch (err) {
        console.warn("Couldn't load save", err);
      }
      // Baseline is the RAM as loaded (or blank), so nothing is written until the game saves
      lastSaved = btoa(String.fromCharCode(...emulator.get_cartridge_ram()));

      lastTime = performance.now();
      behind = 0;
    },

    /**
     * Download the current game's save as a .sav file. Returns false if no ROM is loaded or
     * the game has no save RAM.
     */
    downloadSave() {
      const ram = emulator?.get_cartridge_ram();
      if (!ram || ram.length === 0) return false;

      const name = (title.replace(/[^A-Za-z0-9 _-]/g, "_").trim() || "save") + ".sav";
      const url = URL.createObjectURL(new Blob([ram], { type: "application/octet-stream" }));
      const link = document.createElement("a");
      link.href = url;
      link.download = name;
      link.click();
      // Mobile Safari reads the blob asynchronously, so don't revoke it straight away
      setTimeout(() => URL.revokeObjectURL(url), 30_000);
      return true;
    },

    /**
     * Replace the current game's save with a .sav file's bytes and restart the game so it
     * reads it, since games only load their save at boot. Throws (leaving the running game
     * untouched) if no ROM is loaded or the file is the wrong size for this cartridge.
     */
    importSave(bytes) {
      if (!rom) throw new Error("Load a ROM first");

      const next = new Emulator(rom);
      try {
        next.load_cartridge_ram(new Uint8Array(bytes));
      } catch (err) {
        next.free();
        throw err;
      }

      emulator.free();
      emulator = next;
      lastTime = performance.now();
      behind = 0;
      save();
    },

    /** Hold a button down (e.g. from an on-screen control). No-op before a ROM is loaded. */
    press(button) {
      emulator?.press_button(button);
    },

    /** Let go of a button pressed with `press`. */
    release(button) {
      emulator?.release_button(button);
    },

    get paused() {
      return paused;
    },

    pause() {
      paused = true;
      releaseAll();
    },

    resume() {
      paused = false;
      lastTime = performance.now(); // don't fast-forward through the pause
    },
  };

  requestAnimationFrame(loop);
  return gb;
}
