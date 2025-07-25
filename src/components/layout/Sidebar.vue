<template>
  <div class="flex">
    <!-- Sidebar -->
    <transition name="slide">
      <div
        v-if="sidebarOpen"
        class="bg-[var(-background)] fixed top-0 left-0 w-64 shadow-lg min-h-screen z-50 transition-all"
      >
        <!-- Close Button -->
        <div class="flex justify-end p-2">
          <button @click="$emit('toggle')" class="text-gray-700 hover:bg-gray-100 p-2 rounded">
            <PanelLeftClose class="w-5 h-5" />
          </button>
        </div>

        <!-- Sidebar Content -->
        <div class="p-6">
          <!-- User Info -->
          <div class="flex items-center space-x-3 mb-6">
            <CircleUserRoundIcon class="w-6 h-6 text-gray-600" />
            <div>
              <h3 class="font-medium text-gray-900">
                {{ auth.user?.displayName || 'User' }}
              </h3>
            </div>
          </div>

          <!-- Navigation -->
          <nav class="space-y-2 mb-8">
            <h4 class="text-base font-medium text-gray-900 mb-3">Menu</h4>
            <a href="#" class="flex items-center space-x-3 px-3 py-2 rounded-lg" style="color: var(--text);">
              <House class="w-5 h-5" style="color: var(--icon-color);"/>
              <span>Home</span>
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
            <h4 class="text-base font-medium text-gray-900 mb-3">Pages</h4>
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

        <!-- Bottom Logout -->
        <div class="absolute bottom-0 left-0 right-0 p-6">
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
    </transition>

    <!-- Toggle Button (Visible when sidebar is closed) -->
    <button
      v-if="!sidebarOpen"
      @click="$emit('toggle')"
      class="fixed top-0 left-0 h-screen w-14 bg-white border-r border-gray-100 z-50 flex flex-col items-center justify-between py-4"
      style="color: var(--icon-color)"
    >
      <PanelRightClose class="w-5 h-5" />
    </button>
  </div>
</template>

<script setup>
import { useAuthStore } from '@/stores/auth'
import { CircleUserRoundIcon, House, PanelLeftClose, PanelRightClose } from 'lucide-vue-next'

const props = defineProps({
  sidebarOpen: Boolean,
})

const emit = defineEmits(['toggle'])

const auth = useAuthStore()
</script>


<style scoped>
.slide-enter-active,
.slide-leave-active {
  transition: all 0.3s ease;
}
.slide-enter-from,
.slide-leave-to {
  transform: translateX(-100%);
  opacity: 0;
}
</style>
