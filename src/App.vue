<template>
  <Head />
  <div v-for="task in tasks" :key="task.id">
    <Task :task="task" />
  </div>
  <AddTaskButton />
</template>

<script setup>
import Head from './components/Head.vue';
import Task from './components/Task.vue';
import AddTaskButton from './components/AddTaskButton.vue';
import { useTasksStore } from './stores/tasks';
import { storeToRefs } from 'pinia';

const tasksStore = useTasksStore();
const { tasks } = storeToRefs(tasksStore);
</script>