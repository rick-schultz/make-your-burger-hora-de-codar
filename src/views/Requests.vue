<template>
  <div class="main-container">
    <h1>Requests Management</h1>
    <Dashboard/>
  </div>
</template>

<script>
import Dashboard from '../components/Dashboard/Dashboard.vue'
export default {
  name: "Requests",
  components: {
    Dashboard
  }
}
</script>