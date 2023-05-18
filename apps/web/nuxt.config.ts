// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  components: {
    dirs: [{ path: '~/components', pathPrefix: false }]
  },
  modules: ['@nuxtjs/prismic', '@nuxtjs/tailwindcss', '@nuxt/image-edge'],
  css: [
    '@flaticon/flaticon-uicons/css/all/all.css',
    '~/assets/css/globals.css'
  ],
  prismic: {
    endpoint: 'sonibble-official-site'
  }
})
