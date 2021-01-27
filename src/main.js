import Vue from 'vue'
import App from './App.vue'
import { createApp } from 'vue'
import './index.css'

createApp(App).mount('#app')
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
