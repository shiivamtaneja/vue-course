<script>
export default {
  data() {
    return {
      message: 'Hello Vue!',
      status: 'active'
    }
  }
}
</script>

<template>
  <h1>{{ message }}</h1>

  <p v-if="status === 'active'">User is active</p>
  <p v-else-if="status === 'pending'">User is pending</p>
  <p v-else="status">User is inactive</p>
</template>