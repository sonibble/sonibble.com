// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  components: {
    dirs: [{ path: '~/components', pathPrefix: false }],
  },
  modules: [
    '@nuxtjs/tailwindcss',
    '@nuxt/image-edge',
    '@nuxt/content',
    '@nuxt/devtools',
  ],
  css: [
    '@flaticon/flaticon-uicons/css/all/all.css',
    '~/assets/styles/globals.css',
  ],
  runtimeConfig: {
    public: {
      host: '',
    },
  },
})
