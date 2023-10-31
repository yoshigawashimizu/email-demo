import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './styles/base.css'
import './plugins/element.js'
import './api/mock/mock.js'// 引入mock

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
