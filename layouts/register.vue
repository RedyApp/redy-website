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
import { TweenMax, Expo } from 'gsap'
export default {
  name: 'LayoutRegister',
  components:{
    Header,
    Footer
  },
  beforeMount() {
    TweenMax.from('.title', 2, {
      delay: 0.5,
      opacity: 0,
      y: '20%',
      z: 0,
      ease: Expo.easeInOut
    }),
      TweenMax.from('.description', 2, {
        delay: 0.7,
        opacity: 0,
        z: 0,
        ease: Expo.easeInOut
      })
  },
}
</script>
