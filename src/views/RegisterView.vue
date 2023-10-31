<template>
  <div class="register-view">
    <!-- 注册用表单组件 -->
    <RegisterForm></RegisterForm>
  </div>
</template>

<script>
import RegisterForm from "../components/RegisterForm.vue"; // 表单组件
export default {
  components: {
    RegisterForm,
  },
};
</script>

<style>
.register-view {
  margin: 0 auto;
  width: 1240px;
}
</style>