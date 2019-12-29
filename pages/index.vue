<template>
  <section class="bg-redy-gray mx-auto flex flex-col min-h-screen h-auto lg:h-screen">
    <div
      class="h-full flex flex-col md:flex-row items-center justify-center relative md:pt-0 mt-20"
    >
      <img
        src="/img/loading-phone.png"
        alt
        class="w-32 sm:w-48 lg:w-auto md:max-w-xs md:mb-16 -mb-32 relative"
        data-aos="zoom-in"
        data-aos-delay="200"
        data-aos-duration="1000"
        data-aos-easing="ease-in-out"
      />
      <div class="flex flex-col justify-center items-center">
        <h1
          class="text-4xl font-normal z-50 -mt-12 lg:-mt-24 absolute"
          data-aos="fade"
          data-aos-delay="100"
          data-aos-duration="2000"
          data-aos-easing="ease-in-out"
        >Próximamente</h1>
        <video src="/img/loader.mp4" loop autoplay class="video-loading w-full"></video>
      </div>
      <img
        src="/img/loading-phone-2.png"
        alt
        class="hidden md:block w-48 lg:w-auto md:max-w-xs -mb-32"
        data-aos="zoom-in"
        data-aos-delay="200"
        data-aos-duration="2000"
        data-aos-easing="ease-in-out"
      />
    </div>
    <div class="flex flex-col lg:flex-row justify-between items-center py-8 px-4 md:px-24">
      <div class="flex flex-col lg:flex-row items-center">
        <p class="mr-4 font-semibold text-black text-xl mb-4 lg:mb-0">Muy pronto en</p>
        <div class="flex items-center mb-20 lg:mb-0">
          <nuxt-link
            to="/"
            class="w-16 h-16 rounded-full flex items-center justify-center border-4 border-redy-gold mx-2 hover:bg-redy-gold"
          >
            <i class="icon-apple text-black text-4xl"></i>
          </nuxt-link>
          <nuxt-link
            to="/"
            class="w-16 h-16 rounded-full flex items-center justify-center border-4 border-redy-gold mx-2 hover:bg-redy-gold"
          >
            <i class="icon-playstore text-black text-4xl"></i>
          </nuxt-link>
        </div>
      </div>
      <div class="flex flex-col lg:flex-row items-center">
        <p
          class="text-lg text-black lg:mr-8 order-last lg:order-first"
        >© Copyright {{new Date().getFullYear()}} Redy</p>
        <div class="flex items-center mb-6 lg:mb-0">
          <a href="https://www.instagram.com/pideloredyapp/" target="_blank" class="ml-6">
            <i class="icon-instagram text-black hover:text-redy-gold text-3xl"></i>
          </a>
          <a href="https://www.facebook.com/PideloRedyApp/" target="_blank" class="ml-6">
            <i class="icon-facebook text-black hover:text-redy-gold text-3xl"></i>
          </a>
          <a href="https://twitter.com/PideloRedyApp" target="_blank" class="ml-6">
            <i class="icon-twitter text-black hover:text-redy-gold text-3xl"></i>
          </a>
        </div>
      </div>
    </div>
  </section>
</template>
<script>
export default {
  name: 'Home'
}
</script>
<style lang="scss">
.video-loading {
  height: 400px;
}
</style>

