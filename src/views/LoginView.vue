<template>
  <div class="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-500 to-indigo-600 p-4 overflow-hidden">
    <!-- Fondo animado con movimiento -->
    <div class="absolute inset-0 z-0">
      <div class="w-full h-full flex items-center justify-center opacity-40">
        <!-- Formas animadas -->
        <div class="absolute top-0 left-0 w-64 h-64 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-move-slow"></div>
        <div class="absolute top-0 right-0 w-96 h-96 bg-yellow-200 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-move-medium animation-delay-2000"></div>
        <div class="absolute bottom-0 left-0 w-96 h-96 bg-pink-300 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-move-medium animation-delay-4000"></div>
        <div class="absolute bottom-0 right-0 w-64 h-64 bg-indigo-400 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-move-slow"></div>
      </div>
    </div>

    <!-- Mensaje de bienvenida con efectos -->
    <transition name="scale-fade">
      <h1 class="text-6xl sm:text-4xl md:text-5xl font-extrabold m-5  text-white">
  ¡Bienvenido!
</h1>

    </transition>

    <!-- Botón de empezar -->
    <button
      v-if="showWelcome"
      @click="empezar"
      class="relative z-10 bg-white text-indigo-600 font-bold py-3 px-6 rounded-full hover:bg-indigo-700 hover:text-white transition duration-500 transform hover:scale-110"
    >
      Empezar
    </button>

    <!-- Efecto de apertura antes de redirigir -->
    <div v-if="openingEffect" class="fixed inset-0 z-50 bg-indigo-600 transition-all duration-1000 ease-out transform scale-x-0 origin-left" :class="{ 'scale-x-100': openingEffect }"></div>
  </div>
</template>

<script>
import { ref } from 'vue';
import { useRouter } from 'vue-router';

export default {
  setup() {
    const router = useRouter();
    const showWelcome = ref(true);
    const openingEffect = ref(false);

    const empezar = () => {
      // Activar el efecto de apertura
      openingEffect.value = true;
      
      // Esperar la duración del efecto antes de redirigir
      setTimeout(() => {
        router.push({ name: 'welcome' });
      }, 1000); // 1 segundo para sincronizar con la animación
    };

    return {
      showWelcome,
      empezar,
      openingEffect,
    };
  },
};
</script>

<style scoped>
/* Animaciones para el fondo en movimiento */
@keyframes move-slow {
  0% {
    transform: translate(0, 0);
  }
  50% {
    transform: translate(20px, -20px);
  }
  100% {
    transform: translate(0, 0);
  }
}

@keyframes move-medium {
  0% {
    transform: translate(0, 0);
  }
  50% {
    transform: translate(-30px, 30px);
  }
  100% {
    transform: translate(0, 0);
  }
}

.animate-move-slow {
  animation: move-slow 10s ease-in-out infinite;
}

.animate-move-medium {
  animation: move-medium 6s ease-in-out infinite;
}

/* Escala y opacidad para el mensaje de Bienvenido */
.scale-fade-enter-active, .scale-fade-leave-active {
  transition: all 1s ease-in-out;
}
.scale-fade-enter-from, .scale-fade-leave-to {
  opacity: 0;
  transform: scale(0.8);
}

/* Efecto de apertura */
.scale-x-0 {
  transform: scaleX(0);
}
.scale-x-100 {
  transform: scaleX(1);
}
</style>
