<template>
    <div>
      <button @click="toggleComplete(task.id)">
        <span v-if="task.completed">&#x2714;</span>
        <span v-else>&#x25A1;</span>
      </button>
      {{ task.text }}
      <button @click="toggleStar(task.id)">
        <span v-if="task.starred" style="color: yellow;">&#x2605;</span>
        <span v-else style="color: gray;">&#x2606;</span>
      </button>
      <button @click="deleteTask(task.id)">&#x1F5D1;</button>
    </div>
  </template>
  
  <script setup>
  import { defineProps } from 'vue';
  import { useTasksStore } from '../stores/tasks';
  
  const props = defineProps({
    task: {
      type: Object,
      required: true,
    },
  });
  
  const tasksStore = useTasksStore();
  
  const toggleComplete = (id) => {
    tasksStore.toggleTaskCompletion(id);
  };
  
  const deleteTask = (id) => {
    tasksStore.deleteTask(id);
  };
  
  const toggleStar = (id) => {
    tasksStore.toggleTaskStar(id);
  };
  </script>
  
  <style scoped>
  button {
    border: none;
    background: none;
    font-size: 1.2em;
    padding: 5px;
    cursor: pointer;
}
  </style>