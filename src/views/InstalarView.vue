<template>
    <div class="relative min-h-screen flex flex-col items-center justify-center bg-gradient-to-r from-blue-500 to-indigo-600 p-4 overflow-hidden">      
      <div class="text-center mb-12">
        <h1 class="text-5xl font-extrabold text-white mb-4">
          Pasos para Instalar un APK
        </h1>
        <p class="text-lg text-white font-semibold">
          Sigue estos simples pasos para instalar una aplicación APK en tu dispositivo Android
        </p>
      </div>
  
      <!-- Contenedor de los pasos -->
      <div class="w-full max-w-4xl bg-white shadow-lg rounded-lg p-8">
        <div class="space-y-8">
          <!-- Paso 1 -->
          <div class="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
            <div class="text-4xl font-bold text-indigo-600">1</div>
            <div>
              <h2 class="text-2xl font-bold text-gray-800 mb-2">Permitir Fuentes Desconocidas</h2>
              <p class="text-gray-700">Ve a <strong>Ajustes > Seguridad</strong> y activa la opción de "Fuentes desconocidas" para permitir la instalación de aplicaciones que no provienen de Google Play.</p>
            </div>
            <i class="mdi mdi-shield-lock-outline text-indigo-600 text-6xl"></i> <!-- Icono de seguridad -->
          </div>
  
          <!-- Paso 2 -->
          <div class="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
            <div class="text-4xl font-bold text-indigo-600">2</div>
            <div>
              <h2 class="text-2xl font-bold text-gray-800 mb-2">Descargar el APK</h2>
              <p class="text-gray-700">Descarga el archivo APK desde el enlace proporcionado en nuestro sitio web. Asegúrate de que el archivo haya terminado de descargarse correctamente antes de proceder.</p>
            </div>
            <i class="mdi mdi-download-circle-outline text-indigo-600 text-6xl"></i> <!-- Icono de descarga -->
          </div>
  
          <!-- Paso 3 -->
          <div class="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
            <div class="text-4xl font-bold text-indigo-600">3</div>
            <div>
              <h2 class="text-2xl font-bold text-gray-800 mb-2">Abrir el APK</h2>
              <p class="text-gray-700">Localiza el archivo descargado en tu carpeta de descargas y tócala para iniciar la instalación de la aplicación APK.</p>
            </div>
            <i class="mdi mdi-file-find-outline text-indigo-600 text-6xl"></i> <!-- Icono de abrir archivo -->
          </div>
  
          <!-- Paso 4 -->
          <div class="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
            <div class="text-4xl font-bold text-indigo-600">4</div>
            <div>
              <h2 class="text-2xl font-bold text-gray-800 mb-2">Completar la Instalación</h2>
              <p class="text-gray-700">Sigue las instrucciones en pantalla y acepta los permisos solicitados para completar la instalación. Una vez terminado, podrás abrir la aplicación desde tu menú de aplicaciones.</p>
            </div>
            <i class="mdi mdi-checkbox-marked-circle-outline text-indigo-600 text-6xl"></i> <!-- Icono de completar -->
          </div>
        </div>
      </div>
  
   
    </div>
  </template>
  
  <script>
  export default {
    name: 'InstallApkSteps',
  };
  </script>
  
  <style scoped>
  /* No es necesario agregar estilos adicionales gracias a Tailwind */
  </style>
  
  