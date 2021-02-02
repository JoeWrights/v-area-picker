<template>
  <div>
    <tabs v-model="activeTab" :options="tabs">
      <div slot="province">111</div>
      <div slot="city">222</div>
      <div slot="area">333</div>
    </tabs>
  </div>
</template>

<script>
import Tabs from './tabs.vue'

export default {
  name: 'Picker',
  components: {
    Tabs
  },
  data () {
    return {
      activeTab: 'aa',
      tabs: [
        { label: '请选择', value: 'aa', slot: 'province' },
        { label: '请选择', value: 'bb', slot: 'city' },
        { label: '请选择', value: 'cc', slot: 'area' }
      ]
    }
  }
}
</script>

<style scoped>

</style>
