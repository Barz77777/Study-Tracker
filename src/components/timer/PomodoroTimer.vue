<template>
  <div class="max-w-md mx-auto">
    <h2 class="text-2xl font-bold text-gray-800 mb-8 text-center">Timer Pomodoro</h2>
    
    <div class="bg-white p-8 rounded-2xl shadow-lg text-center">
      <div class="mb-6">
        <span :class="modeClass">
          {{ timerMode === 'study' ? 'Waktu Belajar' : 'Waktu Istirahat' }}
        </span>
      </div>
      
      <div class="text-6xl font-mono font-bold text-gray-800 mb-8">
        {{ formattedTime }}
      </div>
      
      <TimerControls 
        :isActive="isActive"
        @toggle="toggleTimer"
        @reset="resetTimer"
      />
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import TimerControls from './TimerControls.vue'
import { useTimer } from '@/composables/useTimer'

const { 
  minutes, 
  seconds, 
  isActive, 
  timerMode, 
  toggleTimer, 
  resetTimer 
} = useTimer()

const formattedTime = computed(() => {
  return `${String(minutes.value).padStart(2, '0')}:${String(seconds.value).padStart(2, '0')}`
})

const modeClass = computed(() => {
  return timerMode.value === 'study' 
    ? 'inline-block px-4 py-2 rounded-full text-sm font-medium bg-blue-100 text-blue-800'
    : 'inline-block px-4 py-2 rounded-full text-sm font-medium bg-green-100 text-green-800'
})
</script>