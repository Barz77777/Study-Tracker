import { defineStore } from 'pinia'
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
  signOut,
  onAuthStateChanged,
  GoogleAuthProvider,
} from 'firebase/auth'
import { auth } from '@/services/firebase'

export const useAuthStore = defineStore('auth', {
  state: () => ({
    user: null,
  }),
  getters: {
    isAuthenticated: (state) => !!state.user,
  },
  actions: {
    async login(email, password) {
      const result = await signInWithEmailAndPassword(auth, email, password)
      this.setUser(result.user)
    },
    async register(email, password) {
      const result = await createUserWithEmailAndPassword(auth, email, password)
      this.setUser(result.user)
    },
    async loginWithGoogle() {
      const provider = new GoogleAuthProvider()
      const result = await signInWithPopup(auth, provider)
      this.setUser(result.user)
    },
    async logout() {
      await signOut(auth)
      this.user = null
    },
    fetchUser() {
      return new Promise((resolve) => {
        onAuthStateChanged(auth, (user) => {
          if (user) {
            this.setUser(user)
          } else {
            this.user = null
          }
          resolve(user)
        })
      })
    },
    setUser(user) {
      this.user = {
        uid: user.uid,
        email: user.email,
        displayName: user.displayName || 'User',
      }
    },
  },
})
