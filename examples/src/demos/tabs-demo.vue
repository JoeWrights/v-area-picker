<template>
  <div class="container">
    <div class="main-title">Tabs</div>
    <div>
      <div class="title f-12">基础用法</div>
      <div class="card">
        <v-tabs v-model="activeTab" :options="tabs">
          <div slot="province">标签1</div>
          <div slot="city">标签2</div>
          <div slot="area">标签3</div>
        </v-tabs>
      </div>
    </div>
    <div>
      <div class="title f-12">绑定change事件</div>
      <div class="card">
        <v-tabs v-model="activeTab2" :options="tabs" @change="handleChange">
          <div slot="province">标签1</div>
          <div slot="city">标签2</div>
          <div slot="area">标签3</div>
        </v-tabs>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TabsDemo',
  data () {
    return {
      activeTab: 1,
      activeTab2: 2,
      tabs: [
        { label: '标签1', value: 1, slot: 'province' },
        { label: '标签2', value: 2, slot: 'city' },
        { label: '标签3', value: 3, slot: 'area' }
      ]
    }
  },
  methods: {
    handleChange (val) {
      console.log(val)
    }
  }
}
</script>

<style lang="stylus" scoped>
.container
  margin 20px 10px
.main-title
  margin-bottom 10px
  font-size 14px
  color rgba(69, 90, 100, 0.6)
  font-weight 500
.title
  font-size 12px
  color rgba(69, 90, 100, 0.6)
.card
  background-color #fff
  border-radius 4px
  padding 10px
  margin 10px 0
  font-size 14px
</style>
