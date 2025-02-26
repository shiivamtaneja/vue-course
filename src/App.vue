<script>
import { ref } from 'vue';

export default {
  setup() {
    const message = ref('Hello Composition API');
    const status = ref('active');
    const link = ref('https://shivamtaneja.com/');
    const tasks = ref(['Task 1', 'Task 2', 'Task 3']);

    const toggleStatus = () => {
      if (status.value === 'active') {
        status.value = 'pending';
      } else if (status.value === 'active') {
        status.value = 'inactive';
      } else {
        status.value = 'active';
      }
    }

    return {
      message,
      status,
      link,
      tasks,
      toggleStatus
    }
  }
}
</script>

<template>
  <h1>{{ message }}</h1>

  <p v-if="status === 'active'">User is active</p>
  <p v-else-if="status === 'pending'">User is pending</p>
  <p v-else="status">User is inactive</p>

  <h3>Taks: </h3>
  <ul>
    <li v-for="task in tasks" :key="task">{{ task }}</li>
  </ul>

  <a :href="link" target="_blank">Click for my webstie</a>

  <button @click="toggleStatus">Change status</button>
</template>