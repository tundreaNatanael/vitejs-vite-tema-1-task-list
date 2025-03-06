<template>
     <button @click="addTask">+ Add Task</button>
</template>
  
  <script setup>
  import { useTasksStore } from '../stores/tasks';
  
  const tasksStore = useTasksStore();
  
  const addTask = () => {
    const newTaskText = prompt('Enter task text:');
    if (newTaskText) {
      tasksStore.addTask(newTaskText);
    }
  };
  </script>