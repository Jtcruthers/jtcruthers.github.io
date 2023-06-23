<script setup lang="ts">
import { computed } from "vue"
import { ChevronDownIcon } from "@heroicons/vue/20/solid/index.js"
import FadeTransition from '../transitions/FadeTransition.vue'

const names = ["Justin", "Molly", "Ashe"]
let counter = ref(0)

const name = computed(() => {
  const nameIndex = counter.value % names.length
  return names[nameIndex]
})

setInterval(() => {
  counter.value++
}, 2000)
</script>

<template>
  <div class="relative h-full w-full">
    <div class="flex justify-center items-center align-middle h-full w-full">
      <div class="w-2/3 sm:w-1/2 lg:w-5/12 xl:w-1/3 px-16 py-12 border-4 border-solid border-teal-400 rounded-lg text-xl sm:text-4xl lg:text-5xl text-center">
        <FadeTransition>
          <h1 :key="name" class="h-full w-full sm:text-4xl lg:text-5xl text-center">
            Hello {{ name }} :)
          </h1>
        </FadeTransition>
      </div>
    </div>

    <div class="absolute bottom-0 left-1/2 -translate-x-1/2 -translate-y-1/2">
      <ChevronDownIcon class="h-12 w-12 md:h-16 md:w-16 text-teal-400 animate-bounce" />
    </div>

    <div class="h-96">
      <p></p>
    </div>
  </div>
</template>
