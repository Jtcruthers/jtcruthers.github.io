// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  app: {
    baseURL: process.env.NUXT_APP_BASE_URL || '/jtcruthers.github.io/'
  },
  srcDir: 'src',
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/content',
    '@nuxt/image-edge'
  ],
  extends: ['@nuxt-themes/typography'],
  content: {
    highlight: {
      preload: ['vue', 'ts', 'rust'],
      theme: {
        dark: 'github-dark',
        default: 'github-light'
      }
    }
  }
})
