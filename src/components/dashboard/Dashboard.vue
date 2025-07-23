<template>
  <div class="w-full">
    <!-- Tab Button -->
    <div class="flex justify-center space-x-4 mb-6">
      <button @click="activeTab = 'timer'" class="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300">
        Timer
      </button>
      <button
        @click="activeTab = 'schedule'"
        class="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300"
      >
        Schedule
      </button>
      <button @click="activeTab = 'stats'" class="px-4 py-2 rounded bg-gray-200 hover:bg-gray-300">
        Stats
      </button>
    </div>

    <!-- Transition Content -->
    <transition name="fade" mode="out-in">
      <div :key="activeTab" class="text-center py-12">
        <img :src="tabImage.src" :alt="tabImage.alt" class="mx-auto mb-8" />
        <h2 class="text-2xl font-bold text-gray-800 mb-2">{{ tabTitle }}</h2>
        <p class="text-gray-500">Work in progress - coming soon!</p>
      </div>
    </transition>
  </div>
</template>

<!-- JS -->
<script setup>
import { computed } from 'vue'
import StatsCards from './StatsCards.vue'
import TaskList from './TaskList.vue'
import WeeklyChart from './WeeklyChart.vue'
import { useStudySessions } from '@/composables/useStudySessions'

const { sessions, tasks } = useStudySessions()

const todayStudyTime = computed(() => {
  // Calculate today's study time
})

const upcomingTasks = computed(() => {
  return tasks.value.filter((t) => !t.completed).slice(0, 3)
})

// aktifkan tab yang sedang dipilih
const activeTab = ref('timer')

// computed title berdasarkan tab
const tabTitle = computed(() => {
  switch (activeTab.value) {
    case 'timer':
      return 'Timer Page'
    case 'schedule':
      return 'Schedule Page'
    case 'stats':
      return 'Statistics Page'
    default:
      return ''
  }
})

// image URL berdasarkan tab
const tabImage = computed(() => {
  switch (activeTab.value) {
    case 'timer':
      return {
        src: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/0cd5dcb2-6a0b-4803-bc91-0dfcf3b453a7.png',
        alt: 'Illustration of a digital timer',
      }
    case 'schedule':
      return {
        src: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/1fbc9a8a-0f25-4446-8f29-582816858bbf.png',
        alt: 'Illustration of a calendar',
      }
    case 'stats':
      return {
        src: 'https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/e140fca3-710d-43ff-87bd-5d3824623c2b.png',
        alt: 'Illustration of stats',
      }
    default:
      return { src: '', alt: '' }
  }
})
</script>

<!-- CSS -->
<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
