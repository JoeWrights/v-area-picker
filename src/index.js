import VAreaPicker from './area-picker.vue'

const components = [VAreaPicker]

const install = Vue => {
  components.forEach(c => {
    Vue.component(c.name, c)
  })
}

if (typeof window !== 'undefined' && window.Vue) {
  install(window.Vue)
}

export default install
