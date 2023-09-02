// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  ssr: false,
  baseURL: /jtcruthers.github.io/,
  srcDir: 'src',
  router: {
    base: '/jtcruthers.github.io/'
  },
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
