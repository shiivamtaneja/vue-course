<script setup>
import { ref } from "vue";

const message = ref("Hello Composition API");
const status = ref("active");
const link = ref("https://shivamtaneja.com/");
const tasks = ref(["Task 1", "Task 2", "Task 3"]);
const newTask = ref("");

const toggleStatus = () => {
  if (status.value === "active") {
    status.value = "pending";
  } else if (status.value === "active") {
    status.value = "inactive";
  } else {
    status.value = "active";
  }
};

const addTask = () => {
  if (newTask.value.trim() !== "") {
    tasks.value.push(newTask.value);
    newTask.value = "";
  }
};

const deleteTask = (idx) => {
  tasks.value.splice(idx, 1);
};

const updateTask = (idx) => {
  if(newTask.value.trim() !== "") {
    tasks.value[idx] = newTask.value;
    newTask.value = "";
  }
};
</script>

<template>
  <h1>{{ message }}</h1>

  <p v-if="status === 'active'">User is active</p>
  <p v-else-if="status === 'pending'">User is pending</p>
  <p v-else>User is inactive</p>

  <form @submit.prevent="addTask">
    <label for="newTask">Add Task</label>
    <input type="text" id="newTask" v-model="newTask" />
    <button type="submit">Submit</button>
  </form>

  <h3>Taks:</h3>
  <ul>
    <li v-for="(task, idx) in tasks" :key="task">
      <span>{{ task }}</span>
      <button @click="deleteTask(idx)">X</button>
      <button @click="updateTask(idx)">Update</button>
    </li>
  </ul>

  <a :href="link" target="_blank">Click for my webstie</a>

  <button @click="toggleStatus">Change status</button>
</template>