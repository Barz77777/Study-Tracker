<template>
  <form @submit.prevent="handleLogin" class="space-y-6">
    <div>
      <label class="block text-sm font-medium text-gray-700 mb-2">Email</label>
      <input
        v-model="email"
        type="email"
        class="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500"
        placeholder="masukkan@email.com"
        required
      />
    </div>
    <!-- Form fields... -->
    <button
      type="submit"
      class="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg"
    >
      Masuk
    </button>
  </form>
</template>

<script setup>
import { ref } from 'vue'
import { useAuth } from '@/composables/useAuth'

const { login } = useAuth()
const email = ref('')
const password = ref('')

const handleLogin = async () => {
  await login(email.value, password.value)
}
</script>