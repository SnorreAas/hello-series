import Vue from 'vue'
import App from './App.vue'
import axios from 'axios'
import VueAxios from 'vue-axios'
import './index.css'
import vClickOutside from 'v-click-outside'
import Vuex from 'vuex'

Vue.use(Vuex)
Vue.use(vClickOutside)
Vue.use(VueAxios, axios)
Vue.config.productionTip = false
const store = new Vuex.Store({
  state:{
    showOverlay: false
  },
  getters: {
    showOverlay(state){
      return state.showOverlay
    }
  },
  mutations: {
    setOverlay (state, payload) {
      state.showOverlay = payload
    },
    toggleOverlay (state, payload) {
      state.showOverlay = payload
    }
  }
})

new Vue({
  store: store,
  render: h => h(App),
}).$mount('#app')
