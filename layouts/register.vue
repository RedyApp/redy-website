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
import { TweenMax, Expo, TimelineMax, Sine } from 'gsap'
export default {
  name: 'LayoutRegister',
  components: {
    Header,
    Footer
  },
  methods: {
    animate() {
      // const timeLine = new TimelineMax()
      // timeLine.from('.title', 0.5, {
      //   alpha: 0,
      //   opacity: 0,

      //   ease: Sine.easeIn
      // })
      // timeLine.to('.title', 0.5, {
      //   alpha: 1,
      //   delay:1.5,
      //   opacity: 1,
      //   y: '-20%',
      //   z: 0,
      //   ease: Sine.easeIn
      // })

      // timeLine.from('.nav-list', 0.5, {
      //   alpha: 0,
      //   ease: Sine.easeIn
      // })
      // timeLine.to('.nav-list', 0.5, {
      //   alpha: 1,
      //   ease: Sine.easeIn
      // })
      // timeLine.staggerFromTo(
      //   '.nav-list__item',
      //   0.5,
      //   { x: 50, alpha: 0 },
      //   { x: 0, alpha: 1 },
      //   0.2
      // )
      // timeLine.from('.nav__logo', 2, {
      //   alpha: 0,
      //   ease: Sine.easeIn
      // })
      // timeLine.to('.nav__logo', 2, {
      //   alpha: 1,
      //   ease: Sine.easeIn
      // })
    }
  },
  beforeMount() {
    this.animate()

    // TweexnMax.from('.title', 2, {
    //   delay: 0.5,
    //   opacity: 0,
    //   y: '20%',
    //   z: 0,
    //   ease: Expo.easeInOut
    // }),
    //   TweenMax.from('.description', 2, {
    //     delay: 0.7,
    //     opacity: 0,
    //     z: 0,
    //     ease: Expo.easeInOut
    //   })
  }
}
</script>
