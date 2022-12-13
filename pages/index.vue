<script setup lang="ts">
import { computed } from "vue"
const names = ["Justin", "Molly", "Ashe"]
let counter = ref(0)

const name = computed(() => {
  const nameIndex = counter.value % names.length
  return names[nameIndex]
})

setInterval(() => {
  counter.value++
}, 3500)

</script>

<template>
  <div class="w-full h-full">
    <!-- Add transition to text change -->
    <Transition name="fade" mode="out-in">
      <h1 :key="counter" class="w-full h-full flex align-middle justify-center text-4xl m-auto text-center">{{ `Hello, ${name} :)` }}</h1>
    </Transition>
  </div>
</template>

<style scoped>
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

h1 {
  height: 100vh;
  line-height: 100vh;
}
</style>
