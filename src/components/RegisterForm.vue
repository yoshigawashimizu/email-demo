<template>
  <div class="register-form">
    <!-- 这是注册表单 -->
    <el-form
      :model="formData"
      :rules="formRules"
      ref="registerForm"
      label-width="100px"
    >
      <el-form-item label="姓" prop="lastName">
        <el-input v-model="formData.lastName"></el-input>
      </el-form-item>
      <el-form-item label="名前" prop="firstName">
        <el-input v-model="formData.firstName"></el-input>
      </el-form-item>
      <el-form-item label="性別" prop="gender">
        <el-radio-group v-model="formData.gender">
          <el-radio label="1">男性</el-radio>
          <el-radio label="0">女性</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="メールアドレス" prop="email">
        <el-input v-model="formData.email"></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('registerForm')"
          >注册</el-button
        >
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      // 表单数据
      formData: {
        lastName: "", // 姓氏
        firstName: "", // 名字
        gender: "男性", // 性别
        email: "", // 邮箱
      },

      // 表单验证规则
      formRules: {
        // 姓氏:
        lastName: [
          { required: true, message: "姓を入力してください", trigger: "blur" },
          {
            type: "string",
            message: "正しい姓を入力してください",
            trigger: "blur",
          },
        ],

        // 名前:
        firstName: [
          {
            required: true,
            message: "名前を入力してください",
            trigger: "blur",
          },
          {
            type: "string",
            message: "正しい名前を入力してください",
            trigger: "blur",
          },
        ],

        // 性別
        gender: [
          {
            required: true,
            message: "性別を選択してください",
            trigger: "change",
          },
        ],
        email: [
          {
            required: true,
            message: "メールアドレスを入力してください",
            trigger: "blur",
          },
          {
            type: "email",
            message: "メールアドレスの形式が正しくありません",
            trigger: ["blur", "change"],
          },
        ],
      },
    };
  },

  methods: {
    /** 提交表单.
     *
     * @param formName 表单名称,这里只传入"注册表单registerForm" */
    submitForm(formName) {
      this.$refs[formName].validate((valid) => {
        if (valid) {
          // 表单验证通过，可以在这里提交数据或执行其他操作
          console.log("表单验证通过");
        } else {
          console.log("表单验证失败");
          return false;
        }
      });
    },
  },
};
</script>

<style lang="less" scoped>
.register-form {
  width: 500px;
  border: 2px solid #000;
}
</style>