import Vue from 'vue'
import VAreaPicker from '../src/index.js'
import App from './App.vue'
import './src/assets/styles/common.styl'

Vue.use(VAreaPicker)

window.$vue = new Vue({
  el: '#phone-device',
  render: h => h(App)
})
