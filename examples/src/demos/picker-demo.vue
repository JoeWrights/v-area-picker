<template>
  <div class="container">
    <div class="main-title">Picker</div>
    <div>
      <div class="title f-12">基础用法</div>
      <div class="card">
        <v-picker :selected.sync="selectedVal"></v-picker>
      </div>
    </div>
    <div>
      <div class="title f-12">绑定finish事件</div>
      <div class="card">
        <v-picker :selected.sync="selectedVal2" @finish="onFinished"></v-picker>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PickerDemo',
  data () {
    return {
      selectedVal: [],
      selectedVal2: []
    }
  },
  methods: {
    onFinished () {
      const timer = setTimeout(() => {
        window.alert(JSON.stringify(this.selectedVal2))
        clearTimeout(timer)
      }, 2000)
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
  height 340px
</style>
