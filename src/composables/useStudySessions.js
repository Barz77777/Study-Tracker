// src/composables/useStudySessions.js

import { ref } from 'vue'

export function useStudySessions() {
  const sessions = ref([])

  function addSession(session) {
    sessions.value.push(session)
  }

  function clearSessions() {
    sessions.value = []
  }

  return {
    sessions,
    addSession,
    clearSessions,
  }
}
