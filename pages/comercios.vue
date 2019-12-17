<template>
  <div>
    <section class="pt-56 pb-32 cover-container relative">
      <div class="position absolute left-0 top-0 bg-white h-full rounded-full z-10 oval-container"></div>
      <div class="container mx-auto z-20 relative">
        <div class="flex">
          <div class="w-1/2">
            <div class="max-w-md">
              <h1 class="text-5xl mb-8 leading-tight">
                Comienza hoy
                <br />a trabajar con
                <br />
                <span class="font-semibold">Redy.</span>
              </h1>
              <p
                class="text-xl font-medium"
              >Redy te permite ampliar las ventas de tu restaurante para que puedas llegar a clientes que viven en otras zonas de la ciudad.</p>
            </div>
          </div>
          <div class="w-1/2">
            <div class="bg-white shadow-lg rounded-lg py-8 px-3 max-w-md -mt-12">
              <p class="font-medium text-xl text-center mb-8 mt-6 px-6">
                ¡Estás a un paso de ser nuestro
                nuevo aliado!
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
                    v-model="form.address"
                    name="address"
                    v-validate="'required'"
                    data-vv-as="dirección"
                    class="py-3 px-4 border-2 border-gray-300 w-full rounded-lg"
                    :class="{ 'border-red-400' :errors.first('address') }"
                    type="text"
                    placeholder="Dirección y ciudad"
                  />
                </div>
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
                      class="w-full h-full py-3"
                      type="text"
                      placeholder="Ingresa tu número telefonico"
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
                  <button
                    class="p-3 bg-redy-gold font-semibold text-xl rounded-lg w-full hover:shadow-lg"
                    type="submit"
                  >Enviar</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section class="py-12 bg-redy-gold relative z-20">
      <div class="container mx-auto">
        <div class="flex">
          <div class="w-1/2">
            <img src="/img/redy-app-1.png" class="max-w-lg w-full -mt-64" alt />
          </div>
          <div class="w-1/2">
            <p class="text-3xl mb-8">
              Aumenta las ventas
              <br />hasta un
              <b>40%</b>.
            </p>
            <div class="text-right w-full">
              <img class="max-w-xs ml-12" src="/img/redy-item-1.webp" alt />
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  layout: 'register',
  data: () => ({
    form: {
      restaurant_name: null,
      address: null,
      name: null,
      last_name: null,
      phone: null,
      email: null
    }
  }),
  methods: {
    async submitForm() {
      const isValid = this.$validator.validateAll()

      try {
      } catch (error) {}
    }
  }
}
</script>
<style lang="scss">
.cover-container {
  background-image: url('/img/redy-back-commerce.webp');
  background-position: top right;
  background-size: cover;
  background-repeat: no-repeat;
}
.oval-container {
  width: 100%;
  left: -65%;
  transform: scale(1.5);
}
</style>
