<template>
  <div class="bg-white rounded-xl shadow-sm overflow-hidden">
    <div class="grid grid-cols-8 gap-px bg-gray-200">
      <div class="bg-gray-50 p-4 font-semibold text-gray-700">Waktu</div>
      <div 
        v-for="day in days" 
        :key="day" 
        class="bg-gray-50 p-4 font-semibold text-gray-700 text-center"
      >
        {{ day }}
      </div>
    </div>
    
    <div 
      v-for="hour in hours" 
      :key="hour" 
      class="grid grid-cols-8 gap-px bg-gray-200 min-h-16"
    >
      <div class="bg-white p-4 text-sm text-gray-600">{{ hour }}:00</div>
      <div 
        v-for="day in days" 
        :key="`${hour}-${day}`" 
        class="bg-white p-2 relative"
      >
        <ScheduleCard
          v-for="schedule in getScheduleForSlot(day, hour)"
          :key="schedule.id"
          :schedule="schedule"
          @edit="$emit('edit', schedule)"
          @delete="$emit('delete', schedule.id)"
        />
      </div>
    </div>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import ScheduleCard from './ScheduleCard.vue'

const props = defineProps({
  schedules: Array
})

defineEmits(['edit', 'delete'])

const days = ['Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat', 'Sabtu', 'Minggu']
const hours = Array.from({ length: 12 }, (_, i) => 8 + i)

const getScheduleForSlot = (day, hour) => {
  return props.schedules.filter(schedule => 
    schedule.day === day && parseInt(schedule.time.split(':')[0]) === hour
  )
}
</script>