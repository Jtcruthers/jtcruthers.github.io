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
      <h1 :key="counter" class="w-full h-full flex align-middle justify-center text-2xl m-auto text-center">{{ `Hello, ${name} :)` }}</h1>
  </div>
</template>
