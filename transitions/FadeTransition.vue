<template>
  <Transition
    name="fade"
    mode="out-in"
  >
    <slot></slot>
  </Transition>
</template>

<style>
.fade-enter-active {
  transition: opacity 250ms cubic-bezier(0.55, 0.085, 0.68, 0.53);
}

.fade-leave-active {
  transition: opacity 250ms cubic-bezier(0.25, 0.46, 0.45, 0.94);
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
