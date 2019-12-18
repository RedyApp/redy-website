<template>
  <footer class="bg-redy-gray py-12">
    <div class="container mx-auto">
      <div class="flex flex-col md:flex-row justify-between items-center">
        <p
          class="w-full md:max-w-xs text-gray-500 order-last md:order-none text-center md:text-left"
        >
          © Copyright 2019 Redy Technologies Inc.
          Todos los derechos reservados.
        </p>
        <div class="flex flex-col md:flex-row justify-between items-center">
          <div class="flex flex-col md:flex-row md:mr-6 items-center">
            <nuxt-link
              to
              class="text-lg hover:text-redy-gold md:mr-8 mb-2 md:mb-0"
              data-sal="fade"
              data-sal-delay="100"
              data-sal-duration="200"
              data-sal-easing="ease-out-bounce"
            >Términos y condiciones</nuxt-link>
            <nuxt-link
              to
              class="text-lg hover:text-redy-gold mb-4 md:mb-0"
              data-sal="fade"
              data-sal-delay="200"
              data-sal-duration="200"
              data-sal-easing="ease-out-bounce"
            >Políticas y Privacidad</nuxt-link>
          </div>
          <div class="flex items-center mb-6 md:mb-0">
            <nuxt-link
              to="/"
              class="mx-3 md:ml-6"
              data-sal="fade"
              data-sal-delay="300"
              data-sal-duration="200"
              data-sal-easing="ease-out-bounce"
            >
              <i class="icon-instagram text-black hover:text-redy-gold text-2xl"></i>
            </nuxt-link>
            <nuxt-link
              to="/"
              class="mx-3 md:ml-6"
              data-sal="fade"
              data-sal-delay="400"
              data-sal-duration="200"
              data-sal-easing="ease-out-bounce"
            >
              <i class="icon-twitter text-black hover:text-redy-gold text-2xl"></i>
            </nuxt-link>
            <nuxt-link to="/" class="mx-3 md:ml-6"
             data-sal="fade"
              data-sal-delay="500"
              data-sal-duration="200"
              data-sal-easing="ease-out-bounce">
              <i class="icon-facebook text-black hover:text-redy-gold text-2xl"></i>
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
