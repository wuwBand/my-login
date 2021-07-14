<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
// import Index from "./views/Index.vue";
import login from "./components/home/login";
import Table from "./views/Table";

export default {
  name: 'App',
  components: {
    login,
    Table
  }
}
</script>

