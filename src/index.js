import ActionSheet from './action-sheet.vue'
import VAreaPicker from './area-picker.vue'

const components = [ActionSheet, VAreaPicker]

const install = Vue => {
  components.forEach(c => {
    Vue.component(c.name, c)
  })
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default install
