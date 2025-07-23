<template>
  <div class="bg-indigo-100 text-indigo-800 rounded-xl p-4 shadow-md">
    <h2 class="text-lg font-semibold mb-2">Waktu Belajar Hari Ini</h2>
    <p class="text-3xl font-bold">{{ totalMinutes }} menit</p>
  </div>
</template>

<script setup>
const totalMinutes = 75 // TODO: ganti dengan state sebenarnya
</script>
