import { createRouter, createWebHistory } from 'vue-router';
import store from '@/store'; // Importar Vuex para verificar el estado

const router = createRouter({
    history: createWebHistory(),
    routes: [
        // Ruta para el login
        {
            meta: {
                title: "Login"
            },
            path: "/login",
            name: "login",
            component: () => import("@/views/LoginView.vue")  // Vista de Login
        },
        // Ruta principal que redirige a login si no está autenticado, o a welcome si ya lo está
        {
            path: "/",
            redirect: () => {
                const nombreApellidos = store.state.nombreApellidos || localStorage.getItem('nombreApellidos');
                const edad = store.state.edad || localStorage.getItem('edad');
                if (nombreApellidos && edad) {
                    return '/welcome'; // Redirige a la vista de bienvenida si ya hay datos
                } else {
                    return '/login'; // Redirige al login si no hay datos
                }
            }
        },
        // Layout principal y sus rutas hijas
        {
            meta: {
                title: "Home"
            },
            path: "/",
            component: () => import("@/layouts/MasterLayout.vue"),
            children: [
                {
                    path: "welcome",
                    name: "welcome",
                    component: () => import("@/views/welcomeView.vue")  // Vista de inicio
                },
                {
                    path: "instalar",
                    name: "instalar",
                    component: () => import("@/views/InstalarView.vue")  // Nueva vista para el Test Vocacional
                },
                {
                    path: "recursos",
                    name: "recursos",
                    component: () => import("@/views/recursosView.vue")  // Nueva vista para Recursos
                },
                {
                    path: "resultados",
                    name: "resultados",
                    component: () => import("@/views/resultadosView.vue")  // Nueva vista para Resultados
                }
            ]
        },
        // Redirigir cualquier otra ruta no definida al login
        {
            path: '/welcome',
            redirect: '/login'
        }
    ]
});





export default router;
