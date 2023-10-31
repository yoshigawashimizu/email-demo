<template>
  <div id="app">
    <!-- <RegisterView></RegisterView> -->
    <EmailSender></EmailSender>
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import RegisterView from "./views/RegisterView.vue";
import EmailSender from "./views/EmailSender.vue";

export default {
  name: "app",
  components: {
    // HelloWorld
    // RegisterView,
    EmailSender,
  },
};
</script>

<style>
</style>
