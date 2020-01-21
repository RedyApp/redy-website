<template>
  <footer class="py-12"
  :class="`bg-${background}`">
    <div class="container mx-auto">
      <div class="flex flex-col lg:flex-row items-center mt-4 md:mt-0 md:hidden mb-8">
        <p class="font-medium text-lg mb-4 lg:mb-0 font-gordita">Muy pronto en</p>
        <div class="flex items-center lg:mb-0">
          <nuxt-link
            to="/"
            class="w-10 md:w-12 h-10 md:h-12 rounded-full flex items-center justify-center mx-2 bg-redy-gold "
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
      <div class="flex flex-col md:flex-row justify-between items-center px-3">
        <p
          class="w-full md:max-w-xs text-gray-500 order-last md:order-none text-center md:text-left font-gordita text-sm md:text-md font-base"
        >
          © Copyright 2019 Redy Technologies Inc.
          Todos los derechos reservados.
        </p>
        <div class="flex flex-col md:flex-row justify-between items-center">
          <div class="flex flex-col md:flex-row md:mr-6 items-center">
            <nuxt-link
              to="/terminos"
              class="text-lg hover:text-redy-gold md:mr-8 mb-10 md:mb-0"
              :class="background === 'black' ? 'text-white' : ''"
            >Términos y condiciones</nuxt-link>
            <nuxt-link to class="text-lg hover:text-redy-gold mb-10 md:mb-0"
            :class="background === 'black' ? 'text-white' : ''"
            >Políticas y Privacidad</nuxt-link>
          </div>
          <div class="flex items-center mb-10 md:mb-0">
            <a href="https://www.instagram.com/pideloredyapp/" target="_blank" class="mx-3 md:ml-6">
              <i class="icon-instagram hover:text-redy-gold text-2xl"
              :class="background === 'black' ? 'text-white' : 'text-black '"></i>
            </a>
            <a href="https://twitter.com/PideloRedyApp" target="_blank" class="mx-3 md:ml-6">
              <i class="icon-twitter  hover:text-redy-gold text-2xl"
              :class="background === 'black' ? 'text-white' : 'text-black '"></i>
            </a>
            <a href="https://www.facebook.com/PideloRedyApp/" target="_blank" class="mx-3 md:ml-6">
              <i class="icon-facebook  hover:text-redy-gold text-2xl"
              :class="background === 'black' ? 'text-white' : 'text-black '"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
<script>
import { type } from 'os'
export default {
  name: 'Footer',
  props: {
    background: {
      type: String,
      default: 'redy-gray'
    }
  }
}
</script>

<style>
</style>
