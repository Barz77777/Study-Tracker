<template>
  <div v-if="!loading">
    <component :is="layout">
      <RouterView />
    </component>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useAuthStore } from '@/stores/auth'
import { useRoute } from 'vue-router'
import MainLayout from '@/layouts/MainLayout.vue'
import AuthLayout from '@/layouts/AuthLayout.vue'

const auth = useAuthStore()
const route = useRoute()
const loading = ref(true)

const layout = computed (() => {
  if (route.meta.layout === 'auth') return AuthLayout
  return MainLayout
})

onMounted(async () => {
  await auth.fetchUser()
  loading.value = false
})
</script>
