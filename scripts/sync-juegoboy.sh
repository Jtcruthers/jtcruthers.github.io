#!/usr/bin/env bash
# Build the JuegoBoy wasm emulator and copy it into static/juegoboy.
#
# Usage: scripts/sync-juegoboy.sh [path/to/juegoboy]   (default: ~/dev/juegoboy)

set -euo pipefail

src=${1:-"$HOME/dev/juegoboy"}
cd "$(dirname "$0")/.."
dest=static/juegoboy

(cd "$src" && wasm-pack build packages/web --target web --release --out-dir www/pkg --no-typescript)

rm -rf "$dest"
mkdir -p "$dest/pkg"
cp "$src/packages/web/www/juegoboy.js" "$dest/"
# only the runtime files; wasm-pack's pkg/.gitignore would hide these from git
cp "$src/packages/web/www/pkg/"*.{js,wasm} "$dest/pkg/"

echo "Synced JuegoBoy ($(cd "$src" && git rev-parse --short HEAD)) into $dest"
