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

<style>
</style>