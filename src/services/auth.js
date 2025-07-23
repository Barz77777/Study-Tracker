import { defineStore } from 'pinia'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null,
  }),
  actions: {
    async login(email, password) {
      const result = await mockAuth.signInWithEmailAndPassword(email, password)
      this.user = result.user
    },
    async register(email, password) {
      const result = await mockAuth.createUserWithEmailAndPassword(email, password)
      this.user = result.user
    },
    async googleLogin() {
      const result = await mockAuth.signInWithPopup()
      this.user = result.user
    },
    logout() {
      mockAuth.signOut()
      this.user = null
    },
  },
})

const mockAuth = {
  currentUser: null,
  signInWithEmailAndPassword: (email, password) => Promise.resolve({ user: { uid: '123', email } }),
  createUserWithEmailAndPassword: (email, password) => Promise.resolve({ user: { uid: '123', email } }),
  signInWithPopup: () => Promise.resolve({ user: { uid: '123', email: 'user@gmail.com' } }),
  signOut: () => Promise.resolve(),
}
