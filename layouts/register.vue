<template>
  <div>
    <Header />
    <nuxt />
    <Footer />
  </div>
</template>
<script>
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'
import Banner from '~/components/Banner.vue'

export default {
  name: 'LayoutRegister',
  components: {
    Header,
    Footer,
    Banner
  },

}
</script>
