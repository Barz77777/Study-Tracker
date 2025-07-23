import { defineStore } from 'pinia'

export const useTasksStore = defineStore('tasks', {
  state: () => ({
    tasks: [
      { id: 1, title: 'Tugas Matematika Bab 5', deadline: '2025-07-25', priority: 'high', completed: false },
      { id: 2, title: 'Essay Sejarah Indonesia', deadline: '2025-07-28', priority: 'medium', completed: false },
      { id: 3, title: 'Presentasi Bahasa Inggris', deadline: '2025-07-30', priority: 'low', completed: true },
    ]
  }),
  actions: {
    addTask(task) {
      this.tasks.push(task)
    },
    completeTask(id) {
      const task = this.tasks.find(t => t.id === id)
      if (task) task.completed = true
    }
  }
})
