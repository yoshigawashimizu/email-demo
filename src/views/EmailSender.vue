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
      /><br />

      <label for="message">邮件内容:</label>
      <textarea
        id="message"
        name="message"
        v-model="message"
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
export default {
  data() {
    return {
      from: "", // 发件人
      to: "", // 收件人
      subject: "", //主题
      message: "", //邮件主题
    };
  },

  methods: {
    // 发送邮件
    sendEmail() {
      fetch("/sendEmail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          from: this.from,
          to: this.to,
          subject: this.subject,
          message: this.message,
        }),
      })
        .then((response) => response.json())
        .then((data) => {
          alert(data.message);
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