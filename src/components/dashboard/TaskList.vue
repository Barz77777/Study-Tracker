<template>
  <div class="bg-white dark:bg-gray-800 p-4 rounded-xl shadow-md">
    <h2 class="text-lg font-semibold mb-3">Tugas Mendekati Deadline</h2>
    <ul class="space-y-2">
      <li v-for="task in tasks" :key="task.id" class="border-b pb-2">
        <p class="font-medium">{{ task.title }}</p>
        <p class="text-sm text-gray-500">Deadline: {{ task.deadline }}</p>
      </li>
    </ul>
  </div>
</template>

<script setup>
const tasks = [
  { id: 1, title: 'Matematika Bab 3', deadline: '23 Juli' },
  { id: 2, title: 'Essay Sejarah', deadline: '24 Juli' },
]
</script>
