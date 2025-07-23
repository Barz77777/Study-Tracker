import { ref, computed, onUnmounted } from 'vue'

export function useTimer() {
  const minutes = ref(25)
  const seconds = ref(0)
  const isActive = ref(false)
  const timerMode = ref('study') // 'study' or 'break'
  
  let interval = null

  const toggleTimer = () => {
    isActive.value = !isActive.value
    
    if (isActive.value) {
      startTimer()
    } else {
      stopTimer()
    }
  }

  const startTimer = () => {
    interval = setInterval(() => {
      if (seconds.value > 0) {
        seconds.value--
      } else if (minutes.value > 0) {
        minutes.value--
        seconds.value = 59
      } else {
        // Timer finished
        timerFinished()
      }
    }, 1000)
  }

  const stopTimer = () => {
    if (interval) {
      clearInterval(interval)
      interval = null
    }
  }

  const resetTimer = () => {
    stopTimer()
    isActive.value = false
    minutes.value = timerMode.value === 'study' ? 25 : 5
    seconds.value = 0
  }

  const timerFinished = () => {
    stopTimer()
    isActive.value = false
    
    // Show notification
    alert(timerMode.value === 'study' 
      ? 'Waktu belajar selesai! Saatnya istirahat.' 
      : 'Waktu istirahat selesai! Siap belajar lagi?')
    
    // Switch mode
    if (timerMode.value === 'study') {
      timerMode.value = 'break'
      minutes.value = 5
    } else {
      timerMode.value = 'study'
      minutes.value = 25
    }
    seconds.value = 0
  }

  onUnmounted(() => {
    stopTimer()
  })

  return {
    minutes: readonly(minutes),
    seconds: readonly(seconds),
    isActive: readonly(isActive),
    timerMode: readonly(timerMode),
    toggleTimer,
    resetTimer
  }
}