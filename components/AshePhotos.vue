<script setup lang="ts">
const props = defineProps<{
  images: {
    src: string
    alt: string
  }[]
}>()
</script>

<template>
    <div class="flex gap-5 mx-3 sm:mx-6 lg:mx-10 justify-center flex-wrap">
      <a v-for="image in props.images" :href="image.src" target="_blank">
        <nuxt-img :src="image.src" :alt="image.alt" class="h-48 w-36 min-w-56 sm:h-64 sm:w-48 md:h-72 md:w-56 lg:h-96 lg:w-72 rounded-lg border-teal-200 border-solid border-2 object-cover object-center" />
      </a>
    </div>
</template>
