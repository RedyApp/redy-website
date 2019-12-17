<template>
  <div class="flex md:items-center justify-between py-6 px-6 md:px-12 absolute w-full z-50">
    <div class="flex flex-col md:flex-row md:items-center">
      <nuxt-link to class="md:mr-12 mb-4 md:mb-0">
        <img src="/img/logo.svg" class="w-20 h-20 md:w-24 md:h-24 max-w-xs" alt />
      </nuxt-link>
      <nuxt-link to class="font-semibold md:mr-8 flex items-center">
        <i class="icon-arrow text-redy-gold mr-2"></i>Soporte Redy
      </nuxt-link>
      <nuxt-link to class="font-semibold flex items-center">
        <i class="icon-arrow text-redy-gold mr-2"></i>Términos
      </nuxt-link>
    </div>

    <div class="flex flex-col lg:flex-row items-center mt-4 md:mt-0">
      <p class="mr-4 font-semibold text-black text-sm md:text-lg mb-4 lg:mb-0">Muy pronto en</p>
      <div class="flex flex-col md:flex-row items-center  lg:mb-0 ">
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
  </div>
</template>
<script>
export default {
  name: ''
}
</script>
