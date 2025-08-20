// src/router/index.js
import { createRouter, createWebHistory } from 'vue-router'
import AuthView from '@/views/AuthView.vue'
import DashboardView from '@/views/DashboardView.vue'
import { useAuthStore } from '@/stores/auth'

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: AuthView,
    meta: { layout: 'auth' },
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: DashboardView,
    meta: { requiresAuth: true, layout: 'main' },
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/login', // fallback jangan ke "/" karena belum ada
  },
]

const router = createRouter({
  history: createWebHistory(),
  routes,
})

// Middleware (navigation guard)
router.beforeEach((to, from, next) => {
  const auth = useAuthStore()
  console.log('Navigating to:', to.path, '| isAuth:', auth.isAuthenticated)

  // butuh login, tapi belum login
  if (to.meta.requiresAuth && !auth.isAuthenticated) {
    if (to.path !== '/login') {
      return next('/login')
    }
  }

  // kalau udah login tapi buka /login
  if (to.path === '/login' && auth.isAuthenticated) {
    if (to.path !== '/dashboard') {
      return next('/dashboard')
    }
  }

  return next()
})

export default router
