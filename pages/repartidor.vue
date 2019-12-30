<template>
  <div class="main">
    <section
      class="pt-32 md:pt-56 md:pb-12 md:pb-0 relative flex flex-col md:flex-row flex-wrap bg-white"
    >
      <div
        class="position w-full absolute left-0 top-0 bg-white h-full z-10 oval-container hidden md:block"
      ></div>
      <div
        class="img-container object-cover w-full md:w-1/2 ml-auto absolute h-full bottom-0 right-0 hidden md:block"
      >
        <img src="/img/redy-back-dealer.png" alt class="object-cover object-left h-full ml-auto" />
      </div>
      <div class="w-full container main-section mx-auto md:z-50 relative px-0 md:px-6">
        <div class="flex flex-col md:flex-row">
          <div class="w-full md:w-1/2 mb-8 md:mb-0 pr-6 bg-white md:bg-transparent px-6 md:px-0">
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
          <div class="w-full md:w-1/2 py-12 md:py-0 form-container px-6 md:px-0">
            <div
              class="bg-white shadow-lg rounded-xl py-8 px-3 max-w-md mx-auto md:mx-none md:-mt-16 description"
              id="page-form"
            >
              <p
                class="font-medium text-2xl text-black leading-tight text-center mb-8 mt-6 px-6 font-gordita"
              >
                ¡Afíliate y Reparte
                <br />cuando tu quieras!
              </p>
              <form @submit.prevent="submitForm" class>
                <div class="flex flex-wrap mb-4">
                  <div class="w-full md:w-1/2 px-2 mb-4 md:mb-0">
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
                  <div class="w-full md:w-1/2 px-2">
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
                    v-model="form.city"
                    name="city"
                    v-validate="'required'"
                    data-vv-as="dirección"
                    class="custom-select py-3 px-4 border-2 border-gray-300 w-full rounded-lg appearance-none bg-white"
                    :class="{ 'border-red-400' :errors.first('city') }"
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
                  <p v-if="error" class="text-red-500 font-semibold text-center mb-2">{{error}}</p>
                  <button
                    class="p-3 bg-redy-gold font-semibold text-xl rounded-lg w-full hover:shadow-lg flex items-center justify-center"
                    type="submit"
                  >
                    <span v-if="!loading" class="block h-full">Registrarme</span>
                    <loader v-else />
                  </button>
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
    <section class="py-16 md:py-10 bg-redy-gold relative z-20 overflow-hidden">
      <div class="container mx-auto px-6">
        <div class="flex flex-wrap flex-col md:flex-row items-center">
          <div class="w-full md:w-1/2 hidden md:block">
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
          <div class="w-full md:w-1/2 px-4">
            <div
              class="flex items-center mb-10 md:mb-20"
              data-aos="fade"
              data-aos-delay="50"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
            >
              <img src="/img/icons/redy-icon-1.svg" class="w-16 mr-8" alt />
              <p class="text-lg md:text-xl">
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
              <p class="text-lg md:text-xl">
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
              <p class="text-lg md:text-xl">
                Gana propina extra
                <br />tus entregas.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
    <banner />
    <div
      class="register-banner bg-redy-gold py-8 shadow-lg flex flex-col md:flex-row justify-center items-center fixed w-full bottom-0 left-0 z-50"
      :class="{'show': registerSuccess}"
      ref="banner"
    >
      <p
        class="text-lg md:text-xl font-medium text-black mr-4 mb-2 md:mb-0"
      >Te has registrado a Redy satisfactoriamente</p>
    </div>
  </div>
</template>
<script>
import { TweenMax, Expo } from 'gsap'
import Banner from '~/components/Banner.vue'
import Loader from '~/components/Loader.vue'
export default {
  components: {
    Banner,
    Loader
  },
  layout: 'register',
  data: () => ({
    form: {
      name: null,
      last_name: null,
      city: '',
      phone: null,
      email: null,
      password: null
    },
    registerSuccess: false,
    error: null,
    loading: false
  }),

  methods: {
    async submitForm() {
      this.loading = true
      const isValid = await this.$validator.validateAll()

      try {
        if (isValid) {
          this.loading = false
          const response = await this.$axios.$post(
            '/api/mail/dealer',
            this.form
          )
          this.registerSuccess = true
          this.form = {
            name: null,
            last_name: null,
            city: '',
            phone: null,
            email: null,
            password: null
          }
          this.$validator.reset()
          setTimeout(() => {
            this.registerSuccess = false
          }, 4000)
        }
        this.loading = false
      } catch (error) {        
        this.error = 'Ha ocurrido un error vuelve a intentarlo'
        this.loading = false
        setTimeout(() => {
          this.error = null
        }, 6000)
      }
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
  border-radius: 9999px;
  @media screen and(max-width: 768px) {
    left: 0%;
    width: 100%;
    margin-bottom: auto;
    height: 400px !important;
    transform: scale(1);
    top: 0;
    border-radius: 0;
  }
}
.form-container {
  background-image: url('/img/redy-back-dealer.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  @media screen and(min-width: 768px) {
    background-image: none;
  }
}
.custom-select {
  background-image: url('/img/icons/arrow-down.svg');
  background-repeat: no-repeat;
  background-position: 98%;
  background-size: 20px;
}
.main-section {
  &.container {
    @media screen and(max-width: 768px) {
      max-width: 100%;
    }
  }
}
.register-banner {
  transform: translateY(110%);
  transition: 0.5s all ease;
  &.show {
    transform: translateY(0%);
  }
}
</style>
