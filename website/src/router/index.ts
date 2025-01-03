import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/Home.vue'),
    },
    {
      path: '/usuarios',
      name: 'usuarios',
      component: () => import('../views/Usuarios.vue'),
    },
    {
      path: '/estadisticas',
      name: 'estadisticas',
      component: () => import('../views/Estadisticas.vue'),
    },
    {
      path: '/clasificaciones',
      name: 'clasificaciones',
      component: () => import('../views/Clasificaciones.vue'),
    },
  ],
})

export default router
