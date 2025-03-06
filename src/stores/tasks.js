import { defineStore } from 'pinia';

export const useTasksStore = defineStore('tasks', {
  state: () => ({
    tasks: [],
    nextId: 1,
  }),
  actions: {
    addTask(text) {
      this.tasks.push({
        id: this.nextId++,
        text,
        completed: false,
        starred: false, // Added starred property
      });
    },
    toggleTaskCompletion(id) {
      const task = this.tasks.find((task) => task.id === id);
      if (task) {
        task.completed = !task.completed;
      }
    },
    deleteTask(id) {
      this.tasks = this.tasks.filter((task) => task.id !== id);
    },
    toggleTaskStar(id) { // Added toggleTaskStar action
      const task = this.tasks.find((task) => task.id === id);
      if (task) {
        task.starred = !task.starred;
      }
    },
  },
});