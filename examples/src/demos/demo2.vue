<template>
  <v-tabs v-model="activeTab" :options="tabs">
    <div slot="province">111</div>
    <div slot="city">222</div>
    <div slot="area">333</div>
  </v-tabs>
</template>

<script>
export default {
  data () {
    return {
      activeTab: 1,
      tabs: [
        { label: '省', value: 1, slot: 'province' },
        { label: '市', value: 2, slot: 'city' },
        { label: '区', value: 3, slot: 'area' }
      ]
    }
  }
}
</script>
