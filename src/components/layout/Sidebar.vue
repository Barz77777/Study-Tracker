<template>
  <div class="w-64 bg-white shadow-sm min-h-screen relative">
    <div class="p-6">
      <!-- User Info -->
      <div class="flex items-center space-x-3 mb-6">
        <CircleUserRoundIcon />
        <div>
          <h3 class="font-medium text-gray-900">
            {{ auth.user?.displayName || 'User' }}
          </h3>
        </div>
      </div>

      <!-- Navigation -->
      <nav class="space-y-2 mb-8">
        <a
          href="#"
          class="flex items-center space-x-3 px-3 py-2 rounded-lg bg-teal-50 text-teal-700"
        >
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
          <span>Activity</span>
        </a>
        <a
          href="#"
          class="flex items-center space-x-3 px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-50"
        >
          <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
            <path
              fill-rule="evenodd"
              d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
              clip-rule="evenodd"
            ></path>
          </svg>
          <span>My Profile</span>
        </a>
      </nav>

      <!-- Pages -->
      <div class="mb-8">
        <h4 class="text-sm font-medium text-gray-900 mb-3">Pages</h4>
        <nav class="space-y-1">
          <a
            href="#"
            class="flex items-center space-x-3 px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-50"
          >
            <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path
                d="M3 4a1 1 0 011-1h12a1 1 0 011 1v2a1 1 0 01-1 1H4a1 1 0 01-1-1V4zM3 10a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H4a1 1 0 01-1-1v-6zM14 9a1 1 0 00-1 1v6a1 1 0 001 1h2a1 1 0 001-1v-6a1 1 0 00-1-1h-2z"
              ></path>
            </svg>
            <span>Dashboard</span>
          </a>
        </nav>
      </div>
    </div>

    <!-- Bottom Section -->
    <div class="absolute bottom-0 left-0 right-0 w-64 p-6">
      <a
        @click="auth.logout"
        class="flex items-center space-x-3 px-3 py-2 rounded-lg text-gray-700 hover:bg-gray-50 cursor-pointer"
      >
        <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
          <path
            fill-rule="evenodd"
            d="M3 3a1 1 0 00-1 1v12a1 1 0 102 0V4a1 1 0 00-1-1zm10.293 9.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L14.586 9H7a1 1 0 100 2h7.586l-1.293 1.293z"
            clip-rule="evenodd"
          ></path>
        </svg>
        <span>Logout</span>
      </a>
    </div>
  </div>
</template>

<script setup>
import { useAuthStore } from '@/stores/auth'
import { CircleUserRoundIcon } from 'lucide-vue-next'

const auth = useAuthStore()
</script>
