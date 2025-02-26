<script>
export default {
  data() {
    return {
      message: 'Hello Vue!',
      status: 'active',
      tasks: ['Task one', 'Task two', 'Task three'],
      link: 'https://shivamtaneja.com/'
    }
  },
  methods: {
    toggleStatus() {
      if (this.status === 'active') {
        this.status = 'pending';
      } else if (this.status === 'active') {
        this.status = 'inactive';
      } else {
        this.status = 'active';
      }
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

  <!-- <a v-bind:href="link" target="_blank">Click for my webstie</a> -->
  <a :href="link" target="_blank">Click for my webstie</a>

  <!-- <button v-on:click="toggleStatus">Change status</button> -->
  <button @click="toggleStatus">Change status</button>
</template>