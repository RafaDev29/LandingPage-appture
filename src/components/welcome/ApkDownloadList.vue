<template>
  <div class="w-full max-w-4xl mx-auto py-8">

    <!-- Lista de aplicaciones -->
    <div class="space-y-8">
      <div
        v-for="app in apkList"
        :key="app.id"
        class="flex flex-col md:flex-row items-center bg-white shadow-lg rounded-lg overflow-hidden"
      >
        <!-- Imagen de la aplicación -->
        <img :src="app.image" alt="App Image" class="w-full md:w-48 h-48 md:h-auto object-cover">

        <!-- Contenido de la aplicación -->
        <div class="p-6 flex-1">
          <h3 class="text-2xl font-bold text-indigo-600 mb-2">{{ app.name }}</h3>
          <p class="text-gray-700 mb-4">{{ app.description }}</p>
          <p class="text-sm text-gray-500 mb-4">{{ app.details }}</p>

          <!-- Botón de descargar APK -->
          <a
            :href="app.downloadLink"
            class="bg-indigo-600 text-white font-semibold py-2 px-4 rounded-lg hover:bg-indigo-700 transition duration-300"
            download
          >
            Descargar 
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // Lista de aplicaciones
      apkList: [
        {
          id: 1,
          name: 'eDrivers',
          description: 'Esta aplicación permite asignar conductores a sus unidades de manera rápida y eficiente mediante el escaneo del código QR de la unidad. Una vez escaneado, el conductor queda automáticamente vinculado a esa unidad específica.',
          details: 'Versión 2.1.5 | Tamaño: 22MB | Compatible con Android 7.0 y superior',
          image: 'http://159.223.161.160:3020/img/logo_edriver.a7b8c288.png', // Reemplaza con imagen real
          downloadLink: 'https://common-box.s3.us-east-2.amazonaws.com/eDrivers.apk' // Enlace de descarga actualizado
        },
        {
          id: 2,
          name: 'eDispatch',
          description: 'Esta aplicación está diseñada para gestionar el despacho de productos líquidos, como combustibles, en integración con dispositivos especializados para el abastecimiento seguro y eficiente.',
          details: 'Versión 2.3.1 | Tamaño: 20MB | Compatible con Android 7.0 y superior',
          image: 'https://cdn-icons-png.freepik.com/512/5823/5823203.png?uid=R99885452&ga=GA1.1.1631165784.1714706813',
          downloadLink: 'https://common-box.s3.us-east-2.amazonaws.com/eDrivers.apk'
        },
       
      ]
    };
  }
};

</script>

<style scoped>
/* No es necesario agregar estilos adicionales gracias a Tailwind */
</style>
