<template>
  <div class="flex justify-center space-x-4">
    <button
      @click="$emit('toggle')"
      :class="playButtonClass"
    >
      <component :is="isActive ? PauseIcon : PlayIcon" class="w-5 h-5 mr-2" />
      {{ isActive ? 'Jeda' : 'Mulai' }}
    </button>
    
    <button
      @click="$emit('reset')"
      class="flex items-center px-6 py-3 bg-gray-600 hover:bg-gray-700 text-white rounded-lg font-medium transition-colors"
    >
      <RotateCcwIcon class="w-5 h-5 mr-2" />
      Reset
    </button>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { Play as PlayIcon, Pause as PauseIcon, RotateCcw as RotateCcwIcon } from 'lucide-vue-next'

const props = defineProps({
  isActive: Boolean
})

defineEmits(['toggle', 'reset'])

const playButtonClass = computed(() => {
  return props.isActive
    ? 'flex items-center px-6 py-3 bg-red-600 hover:bg-red-700 text-white rounded-lg font-medium transition-colors'
    : 'flex items-center px-6 py-3 bg-green-600 hover:bg-green-700 text-white rounded-lg font-medium transition-colors'
})
</script>