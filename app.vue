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
  height: 100vh;
  min-height: 100vh;
  width: 100%;
  max-width: 100vw;
  overflow-x: hidden;
  padding: 0;
  margin: 0 auto;
}

#__nuxt {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 0;
  margin: 0;
  overflow: auto;
  background-color: theme('colors.red.500');
}
</style>
