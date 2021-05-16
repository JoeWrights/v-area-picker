import Tabs from './components/tabs.vue'
import ActionSheet from './components/action-sheet.vue'
import VAreaPicker from './components/area-picker.vue'

const components = [Tabs, ActionSheet, VAreaPicker]

const install = Vue => {
  components.forEach(c => {
    Vue.component(c.name, c)
  })
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default {
  install,
  ...components
}
