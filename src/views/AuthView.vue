<template>
  <AuthLayout>
  <div class="min-h-screen flex items-center justify-center relative overflow-hidden">
    <!-- FULLSCREEN BACKGROUND -->
    <div class="beams-container absolute inset-0 -z-10">
      <Beams
        :beam-width="2.6"
        :beam-height="22"
        :beam-number="20"
        :light-color="'#ffffff'"
        :speed="4"
        :noise-intensity="1.75"
        :scale="0.2"
        :rotation="140"
      />
    </div>

    <!-- Glassmorphism Login Card -->
    <div class="relative z-10 w-full max-w-md">
      <div
        class="backdrop-blur-xl bg-white/10 border border-white/20 rounded-3xl shadow-2xl p-8 login-card"
      >
        <!-- Header with Icon -->
        <div class="text-center mb-8">
          <ShinyText
            text="Welcome Back!"
            :disabled="false"
            :speed="2"
            class="text-3xl font-bold bg-clip-text mb-2"
          />
          <p class="text-gray-300 mt-2">Sign in to your account</p>
        </div>

        <!-- Login Form -->
        <form @submit.prevent="handleLogin" class="space-y-6">
          <!-- Email Input -->
          <div class="input-group">
            <div class="relative">
              <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <UserRound class="relative w-5 h-5" />
              </div>
              <input
                v-model="email"
                type="email"
                placeholder="Email address"
                required
                aria-label="Email address"
                class="w-full pl-10 pr-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent transition-all duration-300"
              />
            </div>
          </div>

          <!-- Password Input -->
          <div class="input-group">
            <div class="relative">
              <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <LockKeyhole class="relative w-5 h-5" />
              </div>
              <input
                v-model="password"
                :type="showPassword ? 'text' : 'password'"
                placeholder="Password"
                required
                aria-label="Password"
                class="w-full pl-10 pr-12 py-3 bg-white/10 border border-white/20 rounded-xl text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-purple-400 focus:border-transparent transition-all duration-300"
              />
              <button
                type="button"
                @click="showPassword = !showPassword"
                class="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-white transition-colors"
                aria-label="Toggle password visibility"
              >
                <svg
                  v-if="!showPassword"
                  class="h-5 w-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                  ></path>
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                  ></path>
                </svg>
                <svg v-else class="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21"
                  ></path>
                </svg>
              </button>
            </div>
          </div>

          <!-- Remember Me & Forgot Password -->
          <div class="flex items-center justify-between text-sm">
            <label class="flex items-center text-gray-300">
              <input
                type="checkbox"
                class="mr-2 rounded-full border-gray-300 text-purple-600 focus:ring-purple-500 bg-white/10 border-white/20"
              />
              Remember me
            </label>
            <a href="#" class="text-white hover:text-gray-300 hover:bg-transparent">
              Forgot password?
            </a>
          </div>

          <!-- Login Button -->
          <button
            type="submit"
            :disabled="loading"
            class="w-full relative overflow-hidden bg-white text-black font-semibold py-3 px-6 rounded-xl disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <span v-if="!loading" class="flex items-center justify-center">
              <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1"
                ></path>
              </svg>
              Sign In
            </span>
            <span v-else class="flex items-center justify-center">
              <div
                class="animate-spin rounded-full h-5 w-5 border-2 border-white border-t-transparent mr-2"
              ></div>
              Signing in...
            </span>
          </button>
        </form>

        <!-- Divider -->
        <div class="my-6 flex items-center">
          <div class="flex-1 border-t border-white/20"></div>
          <span class="px-4 text-gray-400 text-sm">or</span>
          <div class="flex-1 border-t border-white/20"></div>
        </div>

        <!-- Social Login -->
        <div class="space-y-3">
          <button
            class="w-full flex items-center justify-center px-4 py-3 bg-white/10 border border-white/20 rounded-xl text-white hover:bg-white/20 transition-all duration-300 backdrop-blur-sm"
          >
            <svg class="w-5 h-5 mr-2" viewBox="0 0 24 24" fill="currentColor">
              <path
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                fill="#4285F4"
              />
              <path
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                fill="#34A853"
              />
              <path
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                fill="#FBBC05"
              />
              <path
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                fill="#EA4335"
              />
            </svg>
            Continue with Google
          </button>
        </div>

        <!-- Sign Up Link -->
        <p class="mt-6 text-center text-gray-400">
          Don't have an account?
          <a
            href="#"
            class="text-white hover:text-gray-300 hover:bg-transparent ont-semibold transition-colors"
          >
            Sign up
          </a>
        </p>
      </div>
    </div>
  </div>
</AuthLayout>
</template>

<script setup>
import ShinyText from '@/components/vuebits/ShinyText.vue'
import Beams from "@/components/vuebits/Beams.vue";
import { UserRound } from 'lucide-vue-next'
import { LockKeyhole } from 'lucide-vue-next'
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { useAuthStore } from '@/stores/auth'
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth'
import { auth as firebaseAuth } from '@/services/firebase'
import AuthLayout from '@/layouts/AuthLayout.vue'

const email = ref('')
const password = ref('')
const loading = ref(false)
const auth = useAuthStore()
const router = useRouter()

const provider = new GoogleAuthProvider()

async function handleGoogleLogin() {
  loading.value = true
  try {
    const result = await signInWithPopup(firebaseAuth, provider)
    const user = result.user
    auth.setUser(user) // Simpan ke Pinia store
    router.push('/dashboard')
  } catch (error) {
    console.error('Login failed:', error)
  } finally {
    loading.value = false
  }
}
</script>

<style scoped>
/* Background */
.beams-container {
    background: #000;
  }

/* Login Card Animation */
.login-card {
  animation: slideInUp 0.8s ease-out;
}

@keyframes slideInUp {
  0% {
    opacity: 0;
    transform: translateY(60px) scale(0.95);
  }
  100% {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}

/* Input Group Animation */
.input-group {
  animation: fadeInUp 0.6s ease-out forwards;
  opacity: 0;
  transform: translateY(20px);
}

.input-group:nth-child(1) {
  animation-delay: 0.1s;
}
.input-group:nth-child(2) {
  animation-delay: 0.2s;
}

@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Input Focus Effects */
input:focus {
  box-shadow:
    0 0 0 1px rgba(255, 255, 255, 0.3),
    0 0 20px rgba(247, 238, 255, 0.1);
}

/* Glassmorphism Effects */
.login-card {
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(90px);
}

/* Custom Scrollbar */
::-webkit-scrollbar {
  width: 8px;
}

::-webkit-scrollbar-track {
  background: rgba(255, 255, 255, 0.1);
}

::-webkit-scrollbar-thumb {
  background: rgba(147, 51, 234, 0.5);
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: rgba(147, 51, 234, 0.7);
}

/* Mobile Responsiveness */
@media (max-width: 640px) {
  .login-card {
    margin: 1rem;
    padding: 1.5rem;
  }

  .shape {
    display: none;
  }
}
</style>
