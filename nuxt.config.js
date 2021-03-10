export default {
  server: {
    port: 8000, // default: 3000
    host: '0.0.0.0', // default: localhost,
    timing: false
  },

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'MonicaCentri',
    htmlAttrs: {
      lang: 'it'
    },
    meta: [{
        charset: 'utf-8'
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1'
      },
      {
        hid: 'description',
        name: 'description',
        content: ''
      }
    ],
    link: [{
      rel: 'icon',
      type: 'image/x-icon',
      href: '/favicon.ico'
    }]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    /*Plugin media query */
    {src: '~/plugins/vueMq'}
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    //Libreria per la gestione delle lingue
    ['nuxt-i18n', {
      locales: [{
          name: 'Italiano',
          code: 'it',
          iso: 'it-IT',
          file: 'it-IT.js'
        },
        {
          name: 'Inglese',
          code: 'en',
          iso: 'en-US',
          file: 'en-US.js'
        },
      ],
      lazy: true,
      langDir: 'lang/',
      defaultLocale: 'it'
    }]
  ],

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {}
}
