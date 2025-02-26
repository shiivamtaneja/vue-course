<script>
export default {
  data() {
    return {
      message: 'Hello Vue!',
      status: 'active',
      tasks: ['Task one', 'Task two', 'Task three']
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
</template>