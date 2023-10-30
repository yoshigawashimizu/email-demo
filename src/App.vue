<template>
  <div id="app">
    <RegisterView></RegisterView>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
import RegisterView from "./views/RegisterView.vue";

export default {
  name: "app",
  components: {
    // HelloWorld
    RegisterView,
  },
};
</script>

<style>
</style>
