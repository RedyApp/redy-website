<template>
  <div>
    <section class="pt-40 md:pt-56 md:pb-32 cover-container relative bg-white">
      <div
        class="position absolute left-0 top-0 bg-white h-full rounded-full z-10 oval-container hidden md:block"
      ></div>
      <div class="commerce-section container mx-auto z-20 relative md:px-6">
        <div class="flex flex-col md:flex-row">
          <div class="w-full md:w-1/2 mb-8 md:mb-0 pr-6 bg-white px-8 md:px-0">
            <div class="max-w-md">
              <h1
                class="text-3xl md:text-4xl lg:text-5xl mb-8 leading-tight title"
                data-aos="fade"
                data-aos-delay="100"
                data-aos-duration="1000"
                data-aos-easing="ease-in-out"
              >
                Genera
                <br />ingresos extra
                <br />con
                <span class="font-semibold">Redy.</span>
              </h1>
              <p
                class="text-md md:text-xl font-medium description font-gordita"
                data-aos="fade"
                data-aos-delay="400"
                data-aos-duration="1000"
                data-aos-easing="ease-in"
              >Redy te permite ampliar las ventas de tu restaurante para que puedas llegar a clientes que viven en otras zonas de la ciudad.</p>
            </div>
          </div>
          <div class="w-full md:w-1/2 form-container px-6 md:px-0 py-10">
            <div
              class="bg-white shadow-lg rounded-xl py-8 px-3 max-w-md mx-1 md:mx-none md:-mt-24 description"
            >
              <p
                class="font-medium text-lg md:text-xl text-center mb-8 mt-6 px-2 md:px-6 font-gordita leading-none"
              >
                ¡Estás a un paso de ser nuestro
                <br />nuevo aliado!
              </p>
              <form @submit.prevent="submitForm" class>
                <div class="px-2">
                  <input
                    v-model="form.restaurant_name"
                    name="restaurant"
                    v-validate="'required'"
                    data-vv-as="nombre"
                    class="py-3 px-4 border-2 border-gray-300 w-full rounded-lg mb-4"
                    :class="{ 'border-red-400' :errors.first('restaurant') }"
                    type="text"
                    placeholder="Nombre restaurante"
                  />
                </div>
                <div class="px-2 mb-4">
                  <input
                    v-model="form.restaurant_address"
                    name="address"
                    v-validate="'required'"
                    data-vv-as="dirección"
                    class="py-3 px-4 border-2 border-gray-300 w-full rounded-lg"
                    :class="{ 'border-red-400' :errors.first('address') }"
                    type="text"
                    placeholder="Dirección y ciudad"
                  />
                </div>
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
                    <span v-if="!loading" class="block h-full">Enviar</span>
                    <loader v-else />
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="py-12 bg-redy-gold relative z-20">
      <div class="container mx-auto px-6">
        <div class="flex flex-col md:flex-row">
          <div class="w-full md:w-1/2 hidden md:block">
            <img
              src="/img/redy-app-1.png"
              class="max-w-lg w-full md:-mt-64"
              alt
              data-aos="fade-up"
              data-aos-delay="100"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
            />
          </div>
          <div class="w-full md:w-1/2">
            <p
              class="text-2xl md:text-3xl mb-8 leading-tight"
              data-aos="fade"
              data-aos-delay="100"
              data-aos-duration="1000"
              data-aos-easing="ease-in-out"
            >
              Comencemos una
              <br />nueva experiencia y
              <br />conoce más a tus
              <br />consumidores.
            </p>
            <div class="text-right w-full">
              <img class="w-64 mx-auto md:max-w-xs md:ml-12" src="/img/redy-item-1.png" alt />
            </div>
          </div>
        </div>
      </div>
    </section>
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
import Loader from '~/components/Loader.vue'
export default {
  layout: 'register',
  components: {
    Loader
  },
  data: () => ({
    form: {
      restaurant_name: null,
      restaurant_address: null,
      name: null,
      last_name: null,
      phone: null,
      email: null
    },
    registerSuccess: false,
    loading: false
  }),

  methods: {
    async submitForm() {
      this.loading = true
      const isValid = await this.$validator.validateAll()
      console.log(isValid)
      try {
        if (isValid) {
          const response = await this.$axios.$post(
            '/api/mail/commerce',
            this.form
          )
          this.registerSuccess = true
          this.loading = false
          this.form = {
            restaurant_name: null,
            restaurant_address: null,
            name: null,
            last_name: null,
            phone: null,
            email: null
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
    }
  }
}
</script>
<style lang="scss">
.cover-container {
  background-image: url('/img/redy-back-commerce.png');
  background-position: top right;
  background-size: cover;
  background-repeat: no-repeat;
  @media screen and(max-width: 768px) {
    background-image: none;
  }
}
.oval-container {
  width: 100%;
  left: -65%;
  transform: scale(1.5);
  @media screen and(max-width: 768px) {
    left: 0%;
    widows: 600px;
    height: 600px !important;
    border-radius: 0;
  }
}
.form-container {
  background-image: url('/img/redy-back-commerce.png');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center;
  @media screen and(min-width: 768px) {
    background-image: none;
  }
}
.commerce-section {
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
