<template>
  <div class="h-64 bg-white dark:bg-gray-800 p-4 rounded-2xl shadow">
    <h3 class="text-lg font-semibold mb-4 text-gray-800 dark:text-white">Progress Mingguan</h3>
    <Bar :data="chartData" :options="chartOptions" />
  </div>
</template>

<script setup>
import { Bar } from 'vue-chartjs'
import {
  Chart as ChartJS,
  Title,
  Tooltip,
  Legend,
  BarElement,
  CategoryScale,
  LinearScale
} from 'chart.js'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

const chartData = {
  labels: ['Sen', 'Sel', 'Rab', 'Kam', 'Jum', 'Sab', 'Min'],
  datasets: [
    {
      label: 'Jam Belajar',
      backgroundColor: '#6366f1',
      data: [2, 3, 1, 4, 3, 0, 2],
    },
  ],
}

const chartOptions = {
  responsive: true,
  maintainAspectRatio: false,
}
</script>


