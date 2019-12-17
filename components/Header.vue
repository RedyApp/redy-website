<template>
  <div class="flex items-center justify-between py-6 px-12 absolute w-full z-50">
    <div class="flex items-center">
      <nuxt-link to class="mr-20">
        <img src="/img/logo.svg" class="w-24" alt />
      </nuxt-link>
      <nuxt-link to class="font-semibold mr-8 flex items-center">
        <i class="icon-arrow text-redy-gold mr-2"></i>Soporte Redy
      </nuxt-link>
      <nuxt-link to class="font-semibold flex items-center">
        <i class="icon-arrow text-redy-gold mr-2"></i>Términos
      </nuxt-link>
    </div>
    <div>
      <div class="flex flex-col lg:flex-row items-center">
        <p class="mr-4 font-semibold text-black text-lg mb-4 lg:mb-0">Muy pronto en</p>
        <div class="flex items-center mb-20 lg:mb-0">
          <nuxt-link
            to="/"
            class="w-12 h-12 rounded-full flex items-center justify-center mx-2 bg-redy-gold"
          >
            <i class="icon-apple text-black text-2xl"></i>
          </nuxt-link>
          <nuxt-link
            to="/"
            class="w-12 h-12 rounded-full flex items-center justify-center mx-2 bg-redy-gold"
          >
            <i class="icon-playstore text-black text-2xl"></i>
          </nuxt-link>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: ''
}
</script>
