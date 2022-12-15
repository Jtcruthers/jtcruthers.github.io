<script setup lang="ts">
import SidebarLayout from './components/layouts/SidebarLayout.vue';
</script>

<template>
  <SidebarLayout>
    <NuxtPage />
  </SidebarLayout>
</template>

<style>
html, body {
  height: 100%;
  width: 100%;
}

#__nuxt {
  height: 100%;
  width: 100%;
}
</style>
