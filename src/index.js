// import Tabs from './components/tabs.vue'
// import ActionSheet from './components/action-sheet.vue'
// import VAreaPicker from './components/area-picker.vue'

import VTabs from '@/components/tabs/index.js'
import VActionSheet from '@/components/action-sheet/index.js'
import VPicker from '@/components/picker/index.js'
import VAreaPicker from '@/components/area-picker/index.js'

const components = [VTabs, VActionSheet, VPicker, VAreaPicker]

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
