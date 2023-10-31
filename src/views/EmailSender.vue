<template>
  <div class="email-sender">
    <!-- 发送邮件界面 -->
    <h1>发送邮件</h1>
    <form>
      <label for="from">发件人:</label>
      <input type="text" id="from" name="from" v-model="from" required /><br />

      <label for="to">收件人:</label>
      <input type="text" id="to" name="to" v-model="to" required /><br />

      <label for="subject">主题:</label>
      <input
        type="text"
        id="subject"
        name="subject"
        v-model="subject"
        required
      />
      <br />

      <label for="content">邮件内容:</label>
      <textarea
        id="content"
        name="content"
        v-model="content"
        rows="5"
        cols="50"
        required
      ></textarea
      ><br />

      <button @click="sendEmail">发送邮件</button>
    </form>
  </div>
</template>

<script>
import http from "../utils/request"; // 引入二次封装的axios的工具类

export default {
  data() {
    return {
      from: "", // 发件人
      to: "", // 收件人
      // CC: '' // 抄写
      subject: "", //主题
      content: "", //邮件内容
      // ATTACHMENT // 附件
    };
  },

  methods: {
    // 发送邮件
    sendEmail() {
      // event.preventDefault(); // 阻止默认表单提交行为

      console.log("尝试发送邮件");
      console.log("发件人", this.form);
      console.log("收件人", this.to);
      console.log("主题", this.subject);
      console.log("邮件内容", this.content);

      // 后端api接口: /sendPushedMail
      // fetch("http://192.168.2.190:8080/sendPushedMail", {
      //   method: "POST", // 请求方法
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify({
      //     from: this.FROM,
      //     to: this.TO,
      //     subject: this.SUBJECT,
      //     content: this.CONTENT,
      //   }),
      // })
      //  .then((response) => response.json())
      //  .then((data) => {
      //    alert(data.message);
      //  })
      //  .catch((error) => {
      //    console.error("发生错误：", error);
      //    // 可以采取适当的措施，例如显示错误消息给用户
      //    alert("发生了错误，请重试");
      //  });

      // 使用axios发送请求
      // http是axios的二次封装类
      http
        .post("sendPushedMail", {
          FROM: this.form,
          TO: this.to,
          SUBJECT: this.subject,
          CONTENT: this.content,
        })
        // 取出响应信息
        .then((response) => {
          console.log("取出了响应信息", response);
          alert("取出了响应信息");
        })
        .catch((error) => {
          console.error("发生错误：", error);
          // 可以采取适当的措施，例如显示错误消息给用户
          alert("发生了错误，请重试");
        });
    },
  },
};
</script>


<style lang="less" scoped>
/* 设置页面容器的样式 */
.email-sender {
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
  background-color: #fff;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
}

h1 {
  color: #333;
  text-align: center;
}

form {
  margin-top: 20px;
}

label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
}

input[type="text"],
input[type="button"],
textarea {
  width: 100%;
  padding: 10px;
  margin-bottom: 10px;
  border: 1px solid #ccc;
  border-radius: 5px;
  outline: none;
}

button {
  background-color: #007bff;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
}

button:hover {
  background-color: #0056b3;
}
</style>