<template>
  <div class="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-500 to-indigo-600 p-4 overflow-hidden">
    <!-- Encabezado llamativo con íconos -->
    <div class="text-center mb-8">
      <h1 class="text-5xl font-extrabold text-white mb-4">
        <span class="mdi mdi-download-circle-outline"></span> Descarga tus Aplicaciones 
      </h1>
      <p class="text-lg text-white font-semibold">
        Encuentra y descarga las últimas versiones de nuestras aplicaciones 
        <span class="mdi mdi-cellphone-android"></span>
      </p>
    </div>

    <!-- Componente de descarga de archivos APK -->
    <div class="w-full max-w-6xl bg-white shadow-lg rounded-lg p-8">
      <ApkDownloadList />
    </div>

    <!-- Mensaje motivacional al final -->
    <div class="text-center text-white text-lg mt-4">
      ¡Explora nuestras aplicaciones y descarga la que necesites! 

      <span class="mdi mdi-rocket text-yellow-400"></span>
      <br>
      <span>@sysnet del Perú</span>
    </div>
  </div>
</template>

<script>
import ApkDownloadList from '@/components/welcome/ApkDownloadList.vue';

export default {
  components: {
    ApkDownloadList
  }
};
</script>

<style scoped>
@import '@mdi/font/css/materialdesignicons.min.css'; /* Importa MDI Icons */

/* Ajustes adicionales si es necesario */
</style>
