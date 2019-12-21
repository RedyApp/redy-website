<template>
  <footer class="bg-redy-gray py-12">
    <div class="container mx-auto">
      <div class="flex flex-col md:flex-row justify-between items-center">
        <p
          class="w-full md:max-w-xs text-gray-500 order-last md:order-none text-center md:text-left font-gordita font-base"
        >
          © Copyright 2019 Redy Technologies Inc.
          Todos los derechos reservados.
        </p>
        <div class="flex flex-col md:flex-row justify-between items-center">
          <div class="flex flex-col md:flex-row md:mr-6 items-center">
            <nuxt-link
              to
              class="text-lg hover:text-redy-gold md:mr-8 mb-2 md:mb-0"
            >Términos y condiciones</nuxt-link>
            <nuxt-link to class="text-lg hover:text-redy-gold mb-4 md:mb-0">Políticas y Privacidad</nuxt-link>
          </div>
          <div class="flex items-center mb-6 md:mb-0">
            <a href="https://www.instagram.com/pideloredyapp/" target="_blank" class="mx-3 md:ml-6">
              <i class="icon-instagram text-black hover:text-redy-gold text-2xl"></i>
            </a>
            <a href="https://www.facebook.com/PideloRedyApp/" target="_blank" class="mx-3 md:ml-6">
              <i class="icon-twitter text-black hover:text-redy-gold text-2xl"></i>
            </a>
            <a href="https://twitter.com/PideloRedyApp" target="_blank" class="mx-3 md:ml-6">
              <i class="icon-facebook text-black hover:text-redy-gold text-2xl"></i>
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
