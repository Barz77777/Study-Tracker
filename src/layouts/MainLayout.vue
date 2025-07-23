<template>
  <div class="flex">
    <Sidebar />
    <main class="flex-1 bg-gray-100 min-h-screen p-6">
      <slot />
    </main>
  </div>
</template>

<script setup>
import { ref, watch } from 'vue'
import { useRouter } from 'vue-router'
import Sidebar from '@/components/layout/Sidebar.vue'

const activeTab = ref('dashboard')
const router = useRouter()

function handleTabChange(tab) {
  activeTab.value = tab
  router.push(tab === 'dashboard' ? '/' : `/${tab}`)
}
</script>

<style scoped>
/* Tambahkan style layout jika perlu */
</style>
