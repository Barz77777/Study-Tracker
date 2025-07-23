import { ref, computed } from 'vue'
import { authService } from '@/services/auth'

const user = ref(null)
const isLoading = ref(false)

export function useAuth() {
  const isAuthenticated = computed(() => !!user.value)

  const login = async (email, password) => {
    isLoading.value = true
    try {
      const result = await authService.login(email, password)
      user.value = result.user
      return result
    } catch (error) {
      throw error
    } finally {
      isLoading.value = false
    }
  }

  const logout = async () => {
    await authService.logout()
    user.value = null
  }

  return {
    user: readonly(user),
    isAuthenticated,
    isLoading: readonly(isLoading),
    login,
    logout,
  }
}
