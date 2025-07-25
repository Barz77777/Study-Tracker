<template>
  <div class="flex min-h-screen">
    <!-- Sidebar -->
    <Sidebar :sidebar-open="sidebarOpen" @toggle="toggleSidebar" />

    <!-- Main Content -->
    <main :class="['flex-1 bg-gray-100 min-h-screen transition-all duration-300', sidebarOpen ? 'ml-64' : 'ml-14',]">
      <slot />
    </main>
  </div>
</template>

<script setup>
import { ref, provide } from 'vue'
import Sidebar from '@/components/layout/Sidebar.vue'

// State Sidebar
const sidebarOpen = ref(true)

// Toggle Function
const toggleSidebar = () => {
  sidebarOpen.value = !sidebarOpen.value
}

// Provide for descendant components (optional)
provide('sidebarOpen', sidebarOpen)
provide('toggleSidebar', toggleSidebar)
</script>

<style scoped>
/* Tambahkan style tambahan jika dibutuhkan */
</style>
