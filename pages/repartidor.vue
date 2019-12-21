<template>
  <div class="main">
    <section class="pt-56 pb-12 md:pb-0 relative">
      <div class="position absolute left-0 top-0 bg-white h-full rounded-full z-10 oval-container"></div>
      <div class="img-container object-cover w-1/2 ml-auto absolute h-full bottom-0 right-0">
        <img src="/img/redy-back-dealer.webp" alt class="object-cover object-left h-full ml-auto" />
      </div>
      <div class="container mx-auto z-50 relative px-6">
        <div class="flex flex-col md:flex-row">
          <div class="w-full md:w-1/2 mb-8 md:mb-0 pr-6">
            <div class="max-w-md">
              <h1
                class="text-3xl md:text-4xl lg:text-5xl mb-8 leading-tight title"
                data-aos="fade"
                data-aos-delay="200"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
              >
                Obtén puntos
                <br />como repartidor
                <br />en
                <span class="font-semibold">Redy.</span>
              </h1>
            </div>
          </div>
          <div class="w-full md:w-1/2">
            <div class="bg-white shadow-lg rounded-xl py-8 px-3 max-w-md md:-mt-16 description">
              <p
                class="font-medium text-2xl text-black leading-tight text-center mb-8 mt-6 px-6 font-gordita"
              >
                ¡Afíliate y Reparte
                <br />cuando tu quieras!
              </p>
              <form @submit.prevent="submitForm" class>
                <div class="flex mb-4">
                  <div class="w-1/2 px-2">
                    <input
                      v-model="form.name"
                      name="name"
                      v-validate="'required'"
                      data-vv-as="nombre"
                      class="py-3 px-4 border-2 border-gray-300 w-full rounded-lg"
                      :class="{ 'border-red-400' :errors.first('name') }"
                      type="text"
                      placeholder="Nombre"
                    />
                  </div>
                  <div class="w-1/2 px-2">
                    <input
                      v-model="form.last_name"
                      name="last_name"
                      v-validate="'required'"
                      data-vv-as="nombre"
                      class="py-3 px-4 border-2 border-gray-300 w-full rounded-lg"
                      :class="{ 'border-red-400' :errors.first('last_name') }"
                      type="text"
                      placeholder="Apellido"
                    />
                  </div>
                </div>
                <div class="px-2 mb-4">
                  <div
                    class="flex items-center px-4 border-2 border-gray-300 w-full rounded-lg"
                    :class="{ 'border-red-400' :errors.first('phone') }"
                  >
                    <img src="/img/icons/mx-icon.svg" class="w-8" alt />
                    <span class="text-gray-700 font-semibold mx-2">+52</span>
                    <input
                      v-model="form.phone"
                      name="phone"
                      v-validate="'required'"
                      data-vv-as="nombre"
                      class="w-full h-full py-3 tracking-wide"
                      type="text"
                      placeholder="Ingresa tu número telefonico"
                      @keypress="isNumber"
                    />
                  </div>
                </div>
                <div class="px-2 mb-4">
                  <select
                    v-model="form.address"
                    name="address"
                    v-validate="'required'"
                    data-vv-as="dirección"
                    class="custom-select py-3 px-4 border-2 border-gray-300 w-full rounded-lg appearance-none bg-white"
                    :class="{ 'border-red-400' :errors.first('address') }"
                    type="text"
                    placeholder="Dirección y ciudad"
                  >
                    <option value>Ciudad</option>
                    <option value="Tampico">Tampico</option>
                    <option value="Ciudad Madero">Ciudad Madero</option>
                  </select>
                </div>

                <div class="px-2 mb-4">
                  <input
                    v-model="form.email"
                    name="email"
                    v-validate="'required|email'"
                    data-vv-as="nombre"
                    class="py-3 px-4 border-2 border-gray-300 w-full rounded-lg"
                    :class="{ 'border-red-400' :errors.first('email') }"
                    type="text"
                    placeholder="Correo"
                  />
                </div>
                <div class="px-2 mb-4">
                  <input
                    v-model="form.password"
                    name="password"
                    v-validate="'required'"
                    data-vv-as="password"
                    class="py-3 px-4 border-2 border-gray-300 w-full rounded-lg"
                    :class="{ 'border-red-400' :errors.first('password') }"
                    type="password"
                    placeholder="Contraseña"
                  />
                </div>
                <div class="px-2">
                  <p class="mb-4">
                    Ver
                    <nuxt-link to class="font-semibold underline">términos y condiciones</nuxt-link>
                  </p>
                  <button
                    class="p-3 bg-redy-gold font-semibold text-xl rounded-lg w-full hover:shadow-lg"
                    type="submit"
                  >Registrarme</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div class="w-full hidden md:block -mb-12 absolute bottom-0 right-0 z-20">
        <img src="/img/redy-back-dealer-1.png" alt class="w-full" />
      </div>
    </section>
    <section class="py-12 bg-redy-gold relative z-20 overflow-hidden">
      <div class="container mx-auto px-6">
        <div class="flex flex-wrap flex-col md:flex-row items-center">
          <div class="w-full md:w-1/2">
            <div class="text-right w-fullm md:-mb-40">
              <img
                class="max-w-xs mx-auto md:max-w-md w-full"
                src="/img/redy-dealer-item-1.png"
                alt
                data-aos="fade"
                data-aos-delay="100"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
              />
            </div>
          </div>
          <div class="w-full md:w-1/2">
            <div
              class="flex items-center mb-10 md:mb-20"
              data-aos="fade"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
            >
              <img src="/img/icons/redy-icon-1.svg" class="w-16 mr-8" alt />
              <p class="font-2xl text-xl">
                Gana propina extra
                <br />tus entregas.
              </p>
            </div>
            <div
              class="flex items-center mb-10 md:mb-20 md:ml-20"
              data-aos="fade"
              data-aos-delay="100"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
            >
              <img src="/img/icons/redy-icon-2.svg" class="w-16 mr-8" alt />
              <p class="font-2xl text-xl">
                Gana propina extra
                <br />tus entregas.
              </p>
            </div>
            <div
              class="flex items-center md:mb-12 md:ml-8"
              data-aos="fade"
              data-aos-delay="150"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
            >
              <img src="/img/icons/redy-icon-3.svg" class="w-16 mr-8" alt />
              <p class="font-2xl text-xl">
                Gana propina extra
                <br />tus entregas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
import { TweenMax, Expo } from 'gsap'
export default {
  layout: 'register',
  data: () => ({
    form: {
      name: null,
      last_name: null,
      address: '',
      phone: null,
      email: null,
      password: null
    }
  }),

  methods: {
    async submitForm() {
      const isValid = this.$validator.validateAll()

      try {
      } catch (error) {}
    },

    isNumber(evt) {
      evt = evt || window.event
      const charCode = evt.which ? evt.which : evt.keyCode
      if (
        charCode > 31 &&
        (charCode < 48 || charCode > 57) &&
        charCode !== 46
      ) {
        evt.preventDefault()
      } else {
        return true
      }
    },

    isInteger(evt) {
      evt = evt || window.event
      const charCode = evt.which ? evt.which : evt.keyCode
      if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        evt.preventDefault()
      } else {
        return true
      }
    }
  }
}
</script>
<style lang="scss" scoped>
.oval-container {
  width: 100%;
  left: -50%;
  transform: scale(1.5);
  @media screen and(max-width: 768px) {
    left: 0%;
    width: 400px;
    margin-bottom: auto;
    height: 400px !important;
  }
}

.custom-select {
  background-image: url('/img/icons/arrow-down.svg');
  background-repeat: no-repeat;
  background-position: 98%;
  background-size: 20px;
}
</style>
