import Vue from 'vue'
import App from './App.vue'
import VAreaPicker from '../../src'
import VueCodeMirror from 'vue-codemirror'
import VueMarkdown from 'vue-markdown'
import 'codemirror/mode/vue/vue'
import 'codemirror/mode/javascript/javascript'
import 'codemirror/mode/css/css'
import 'codemirror/lib/codemirror.css'
import 'codemirror/theme/monokai.css'
import 'codemirror/theme/3024-day.css'

import 'xe-utils'
import VXETable from 'vxe-table'
import 'vxe-table/lib/style.css'

Vue.use(VAreaPicker)
Vue.use(VueCodeMirror)
Vue.use(VueMarkdown)
Vue.use(VXETable)

window.$vue = new Vue({
  el: '#app',
  render: h => h(App)
})
