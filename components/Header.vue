<template>
  <div class="flex items-center justify-between py-6 px-6 md:px-12 absolute w-full z-50">
    <div class="flex flex-col md:flex-row md:items-center">
      <div to class="md:mr-32 md:mb-4 md:mb-0 logo">
        <img src="/img/logo.svg" class="w-20 h-20 md:w-24 md:h-24 max-w-xs" alt />
        <p v-if="$route.name !== 'repartidor' && $route.name !== 'terminos' " class="-mt-5 font-regular text-md">Business</p>
      </div>
      <nuxt-link to class="font-semibold md:mr-10 flex items-center hidden md:block">
        <i class="icon-arrow text-redy-gold mr-2"></i>Soporte Redy
      </nuxt-link>
      <nuxt-link to class="font-semibold flex items-center hidden md:block">
        <i class="icon-arrow text-redy-gold mr-2"></i>Términos
      </nuxt-link>
    </div>
    <div
      v-if="$route.name !== 'repartidor'"
      class="md:flex flex-col lg:flex-row items-center mt-4 md:mt-0 hidden"
    >
      <p class="mr-4 font-medium text-sm md:text-lg mb-4 lg:mb-0 font-gordita">Muy pronto en</p>
      <div class="flex flex-col md:flex-row items-center lg:mb-0">
        <nuxt-link
          to="/"
          class="w-10 md:w-12 h-10 md:h-12 rounded-full flex items-center justify-center mx-2 bg-redy-gold mb-2 md:mb-0"
        >
          <i class="icon-apple text-black text-2xl"></i>
        </nuxt-link>
        <nuxt-link
          to="/"
          class="w-10 md:w-12 h-10 md:h-12 rounded-full flex items-center justify-center mx-2 bg-redy-gold"
        >
          <i class="icon-playstore text-black text-2xl"></i>
        </nuxt-link>
      </div>
    </div>
    <button class="h-8 w-8 md:hidden" @click.prevent="show = true">
      <span class="block w-full h-1 bg-black mb-2 rounded-lg"></span>
      <span class="block w-full h-1 bg-black mb-2 rounded-lg"></span>
      <span class="block w-full h-1 bg-black rounded-lg"></span>
    </button>
    <div class="min-menu w-full bg-white py-12 px-8 absolute left-0 top-0 z-index" :class="{'show' : show}">
      <div class="text-right mb-4">
        <button
          class="w-10 h-10 border-2 border-black rounded-full cursor-pointer flex items-center justify-center ml-auto"
          @click.prevent="show = false"
        >
          <i class="icon-close text-black"></i>
        </button>
      </div>
      <div class="flex flex-col items-between justify-between h-full relative">
        <div>
          <nuxt-link to class="font-semibold mb-8 flex items-center text-xl">
            <i class="icon-arrow text-redy-gold mr-2"></i>Soporte Redy
          </nuxt-link>
          <nuxt-link to="/terminos" class="font-semibold flex items-center text-xl mb-8">
            <i class="icon-arrow text-redy-gold mr-2"></i>Términos
          </nuxt-link>
        </div>
        <div class="flex items-center mb-6">
          <a href="https://www.instagram.com/pideloredyapp/" target="_blank" class="mr-8">
            <i class="icon-instagram text-black hover:text-redy-gold text-2xl"></i>
          </a>
          <a href="https://www.facebook.com/PideloRedyApp/" target="_blank" class="mr-8">
            <i class="icon-twitter text-black hover:text-redy-gold text-2xl"></i>
          </a>
          <a href="https://twitter.com/PideloRedyApp" target="_blank" class="mr-8">
            <i class="icon-facebook text-black hover:text-redy-gold text-2xl"></i>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Navbar',
  data: () => ({
    show: false
  })
}
</script>
<style lang="scss">
.min-menu {
  height: 400px;
  transform: translateY(-110%);
  transition: 1s all ease;
  z-index: 1000;
  &.show {
    transform: translateY(0%);
  }
}
</style>
