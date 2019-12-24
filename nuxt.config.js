const pkg = require('./package')


module.exports = {
  mode: 'universal',
  env: {
    SENDGRID_API_KEY: process.env.SENDGRID_API_KEY
  },
  /*
  ** Headers of the page
  */
  head: {
    title: "Redy app",
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: pkg.description }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  /*
  ** Customize the progress-bar color
  */
  loading: { color: '#fff' },

  /*
  ** Global CSS
  */
  css: [
    '~/assets/scss/main.scss',
    '~/assets/style.scss',
    '~/assets/gordita.scss',
    'aos/dist/aos.css'
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    { src: "~/plugins/aos.js", ssr: false },
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    '@nuxtjs/tailwindcss',
    'nuxt-webfontloader',
    ['nuxt-validate', {
      lang: 'es',
      // regular vee-validate options
    }],
  ],
  /*
  ** Axios module configuration
  */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    extend(config, ctx) {

    }
  },
  serverMiddleware: [
    { path: '/api/mail', handler: '~/api/mail' },
  ],
  tailwindcss: {
    configPath: '~/tailwind.config.js',
    cssPath: '~/assets/scss/tailwind.scss'
  },
  webfontloader: {
    google: {
      families: ['Poppins:300,400,500,600,700']
    }
  },
  purgeCSS: {
    enabled: false,
  },
}
