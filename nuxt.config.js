
export default {
  /*
  ** Nuxt rendering mode
  ** See https://nuxtjs.org/api/configuration-mode
  */

  /*
  ** Nuxt target
  ** See https://nuxtjs.org/api/configuration-target
  */
  target: 'server',
  /*
  ** Headers of the page
  ** See https://nuxtjs.org/api/configuration-head
  */
  head: {
    title: 'Selectel — IT-инфраструктура для бизнеса',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Selectel предлагает комплексные решения для разных категорий бизнеса: от индивидуальных предпринимателей до крупных корпораций.' },
      { hid: 'og:title', property: 'og:title', content: 'Selectel — IT-инфраструктура для бизнеса' },
      { hid: 'og:description', property: 'og:description', content: 'Selectel предлагает комплексные решения для разных категорий бизнеса: от индивидуальных предпринимателей до крупных корпораций.' },
      { hid: 'og:image', property: 'og:image', content: 'https://selectel.ru/wp-content/uploads/og_selectel.png' },
      { hid: 'twitter:title', property: 'twitter:title', content: 'Selectel — IT-инфраструктура для бизнеса' },
      { hid: 'twitter:description', property: 'twitter:description', content: 'Selectel предлагает комплексные решения для разных категорий бизнеса: от индивидуальных предпринимателей до крупных корпораций.' },
      { hid: 'twitter:image', property: 'twitter:image', content: 'https://selectel.ru/wp-content/uploads/og_selectel.png' },
      { hid: 'twitter:site', property: 'twitter:site', content: '@selectel' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.svg' },
      { rel: 'stylesheet', href: '/fonts/manrope/manrope.css' },
    ]
  },
  /*
  ** Global CSS
  */
  css: [
  ],
  /*
  ** Plugins to load before mounting the App
  ** https://nuxtjs.org/guide/plugins
  */
  plugins: [{ src: '~/plugins/swiper.js' }
  ],
  /*
  ** Auto import components
  ** See https://nuxtjs.org/api/configuration-components
  */
  components: true,
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],
  /*
  ** Nuxt.js modules
  */
  modules: [
    'nuxt-svg-loader',
    '@nuxtjs/axios',
  ],
  /*
  ** Build configuration
  ** See https://nuxtjs.org/api/configuration-build/
  */
  build: {
  },
  env: {
    API_URL: 'https://selectel.ru',
  },
}
