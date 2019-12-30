<template>
  <div
    class="banner bg-white py-6 flex flex-col md:flex-row justify-center items-center fixed w-full bottom-0 left-0 z-50"
    :class="{'show': show}"
    ref="banner"
  >
    <p class="text-lg md:text-xl font-medium mr-4 mb-2 md:mb-0">¿Te gustaría trabajar con Redy?</p>
    <button
      class="rounded-lg py-2 px-3 border-2 border-gray-400 font-medium mx-3 w-32 mb-2 md:mb-0"
      @click="closeBanner"
    >Talvez luego</button>
    <button
      class="w-32 rounded-lg py-2 px-3 border-2 border-redy-gold bg-redy-gold font-medium text-black hover:shadow-lg"
      @click="toForm"
    >Estoy listo!</button>
  </div>
</template>
<script>
export default {
  name: 'Banner',
  data: () => ({
    show: false,
    showAgain: true
  }),
  mounted() {
    if (this.showAgain) {
      window.addEventListener('scroll', this.handleScroll, this.show)
    }
  },
  methods: {
    handleScroll() {
      if (window.scrollY > 200) {
        this.show = true
      } else {
        this.show = false
      }
    },
    toForm() {
      var element = document.querySelector('#page-form')
      element.scrollIntoView({ behavior: 'smooth', block: 'end' })
      this.showAgain = false
      this.show = false
      window.removeEventListener('scroll', this.handleScroll, this.show)
    },
    closeBanner() {
      this.showAgain = false
      this.show = false
      window.removeEventListener('scroll', this.handleScroll, this.show)
    }
  }
}
</script>
<style lang="scss">
.banner {
  transform: translateY(110%);
  transition: 0.5s all ease;
  &.show {
    transform: translateY(0%);
  }
}
</style>
