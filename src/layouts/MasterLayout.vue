<template>
  <div>
    <!-- Barra de menú superior -->
    <header class="bg-white shadow-md py-4 px-6">
      <div class="flex justify-between items-center">
        <!-- Saludo y nombre de usuario -->
        <div class="flex items-center space-x-2">

  <img src="http://159.223.161.160:3040/img/sysnetExpandido.4ed5086a.png" alt="Logo" width="150" height="100">

</div>


        <!-- Menú para pantallas grandes (horizontal) -->
        <nav class="hidden md:flex space-x-8">
          <router-link 
            to="/welcome" 
            class="text-gray-800 font-bold hover:text-blue-600 transition" 
            exact-active-class="border-b-4 border-blue-600 text-blue-600"
          >
            DESCARGAR
          </router-link>
          <router-link 
            to="/instalar" 
            class="text-gray-800 hover:text-blue-600 transition" 
            exact-active-class="border-b-4 border-blue-600 text-blue-600"
          >
            INSTALAR
          </router-link>
        </nav>

        <!-- Menú hamburguesa para pantallas pequeñas (celular) -->
        <div class="md:hidden relative">
          <button
            @click="toggleMenu"
            class="text-gray-800 font-bold hover:text-blue-600 transition"
          >
            <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>

          <!-- Menú lateral derecho -->
          <transition name="slide-right">
            <div
              v-if="isMenuOpen"
              class="fixed top-0 right-0 w-64 h-full bg-white shadow-lg z-50 p-6 transform transition-transform duration-300 ease-out"
            >
              <button @click="toggleMenu" class="text-gray-800 font-bold hover:text-blue-600 mb-6">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              <nav class="flex flex-col space-y-4">
                <router-link
                  to="/welcome"
                  class="text-gray-800 hover:text-blue-600 transition"
                  exact-active-class="font-bold text-blue-600"
                >
                  DESCARGAR
                </router-link>
                <router-link
                  to="/instalar"
                  class="text-gray-800 hover:text-blue-600 transition"
                  exact-active-class="font-bold text-blue-600"
                >
                  INSTALAR
                </router-link>

                <button
                  @click="logout"
                  class="text-gray-800 hover:text-blue-600 transition w-full text-left"
                >
                  Salir
                </button>
              </nav>
            </div>
          </transition>
        </div>

        <!-- Botón de salir para pantallas grandes (escritorio) -->
        <div class="hidden md:flex items-center space-x-2">
          <button @click="logout" class="text-gray-800 font-bold hover:text-blue-600 transition">
            Salir
          </button>
          <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 text-gray-800 hover:text-blue-600 transition" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1m0-14v1m0 8l0-8"/>
          </svg>
        </div>
      </div>
    </header>

    <!-- Contenido principal -->
    <main>
      <router-view />
    </main>
  </div>
</template>

<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router'; // Importar router para redirigir
import store from '@/store';

export default {
  setup() {
    const username = ref(store.state.nombreApellidos || ''); // Obtener el nombre de usuario
    const router = useRouter(); // Inicializar router para redirigir
    const isMenuOpen = ref(false); // Control del estado del menú desplegable

    const toggleMenu = () => {
      isMenuOpen.value = !isMenuOpen.value; // Cambia el estado del menú
    };

    const logout = () => {
      localStorage.clear(); // Limpiar el almacenamiento local
      store.commit('clearState'); // Limpiar el estado de Vuex
      router.push('/login'); // Redirigir a la página de login
    };

    return {
      username,
      isMenuOpen,
      toggleMenu,
      logout,
    };
  },
};
</script>

<style scoped>
/* Transición para el menú deslizable */
.slide-right-enter-active, .slide-right-leave-active {
  transition: transform 0.3s ease-out;
}
.slide-right-enter, .slide-right-leave-to {
  transform: translateX(100%);
}
</style>
