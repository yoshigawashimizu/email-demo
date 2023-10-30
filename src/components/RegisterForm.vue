<template>
  <div class="register-form">
    <!-- 这是注册表单 -->
    <el-form
      :model="formData"
      :rules="formRules"
      ref="registerForm"
      label-width="auto"
      size="medium"
      hide-required-asterisk
    >
      <h3 class="formTitle">新規登録</h3>
      <el-form-item label="姓" prop="lastName">
        <el-input v-model.trim="formData.lastName"></el-input>
      </el-form-item>
      <el-form-item label="名前" prop="firstName">
        <el-input v-model.trim="formData.firstName"></el-input>
      </el-form-item>
      <el-form-item label="性別" prop="gender">
        <el-radio-group v-model="formData.gender">
          <el-radio label="1">男性</el-radio>
          <el-radio label="0">女性</el-radio>
        </el-radio-group>
      </el-form-item>
      <el-form-item label="メールアドレス" prop="email">
        <el-input v-model.trim="formData.email"></el-input>
      </el-form-item>

      <el-form-item label="使用条例" prop="terms">
        <el-checkbox v-model="formData.terms" label="0">
          <a href="#">利用規約</a>に同意してください
        </el-checkbox>
      </el-form-item>

      <el-form-item label="接收广告" prop="receiveAds">
        <el-checkbox v-model="formData.receiveAds" label="1">
          このウェブサイトからのメール通知を受け取ります
        </el-checkbox>
      </el-form-item>

      <el-form-item>
        <el-button type="primary" @click="submitForm('registerForm')">
          注册
        </el-button>
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
        terms: [], // 使用条例
        receiveAds: [], // 广告推送
      },

      // 表单验证规则
      // 书写技巧:先范围否定,在范围限定
      formRules: {
        // 姓氏:
        lastName: [
          {
            required: true,
            message: "姓を入力してください",
            trigger: "blur",
          },
          // 不能有阿拉伯数字
          {
            pattern: /^[^\d]+$/,
            message: "アラビア数字が使えません",
            trigger: ["blur", "change"],
          },
          // 非全角字符
          {
            /* 正则解释:
            \uFF01-\uFF5E 全角字符范围 */
            pattern: /^[^\uFF01-\uFF5E]+$/,
            message: "半角文字を入力しでください",
            trigger: ["blur", "change"],
          },
          // 中英日
          {
            /*正则解释: 
            \u4e00-\u9fa5 匹配中文字符范围
            A-Za-z 匹配英文字母
            \u3040-\u309F 匹配平假名字符
            一-龯ァ-ヴー 更广泛的日文字符范围，涵盖片假名、片假名扩展字符以及一些其他特殊字符
            */
            pattern: /^[\u4e00-\u9fa5A-Za-z\u3040-\u309F一-龯ァ-ヴー]+$/,
            message: "英語、または日本語を入力してください",
            trigger: ["blur", "change"],
          },
        ],

        // 名前:
        firstName: [
          {
            required: true,
            message: "姓を入力してください",
            trigger: "blur",
          },
          // 不能有阿拉伯数字
          {
            pattern: /^[^\d]+$/,
            message: "アラビア数字が使えません",
            trigger: ["blur", "change"],
          },
          // 非全角字符
          {
            pattern: /^[^\uFF01-\uFF5E]+$/,
            message: "半角文字を入力しでください",
            trigger: ["blur", "change"],
          },
          // 中英日
          {
            pattern: /^[\u4e00-\u9fa5A-Za-z\u3040-\u309F一-龯ァ-ヴー]+$/,
            message: "英語、または日本語を入力してください",
            trigger: ["blur", "change"],
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

        // 邮箱
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

        // 使用条例
        terms: [
          {
            required: true,
            type: "array",
            min: 1, //
            message: "利用規約に同意してください",
            trigger: "change",
          },
        ],

        // 是否接收广告
        receiveAds: [
          {
            type: "array",
            default: [],
            trigger: "change",
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
  margin: 70px auto;
  padding: 25px;
  width: 640px;
  border: 2px solid #000;
  border-radius: 25px;
  .formTitle {
    display: block;
    padding-bottom: 20px;
    text-align: center;
    font-size: 35px;
  }
}
</style>