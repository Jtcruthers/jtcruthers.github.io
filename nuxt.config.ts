// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  router: {
    base: '/jtcruthers.github.io/'
  },
  modules: [
    '@nuxtjs/tailwindcss'
  ]
})
