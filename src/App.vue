<template>
  <div v-if="!loading">
    <AuthLayout v-if="isAuthenticated">
      <RouterView />
    </AuthLayout>
    <MainLayout v-else>
      <RouterView />
    </MainLayout>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import { useAuthStore } from '@/stores/auth'
import MainLayout from '@/layouts/MainLayout.vue'
import AuthLayout from '@/layouts/AuthLayout.vue'

const auth = useAuthStore()
const isAuthenticated = computed(() => auth.isAuthenticated)
const loading = ref(true)

onMounted(async () => {
  await auth.fetchUser()
  loading.value = false
})
</script>
