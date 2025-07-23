// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import AuthView from '@/views/AuthView.vue'
import DashboardView from '@/views/DashboardView.vue'
import { useAuthStore } from '@/stores/auth'

const routes = [
  {
    path: '/',
    name: 'Login',
    component: AuthView,
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: DashboardView,
    meta: { requiresAuth: true },
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/',
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

// Middleware (navigation guard)
router.beforeEach((to, from, next) => {
  const auth = useAuthStore()

  // Jika route butuh login dan user belum login
  if (to.meta.requiresAuth && !auth.isAuthenticated) {
    next('/') // redirect ke login
  } else {
    next() // lanjut ke halaman
  }
})

export default router
