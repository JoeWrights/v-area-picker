<template>
  <div class="container">
    <div class="main-title">AreaPicker</div>
    <div>
      <div class="title f-12">基础用法</div>
      <div class="cell" @click="visible = true">
        <span class="f-12">显示地址选择器</span>
        <icon name="arrow-b" class="arrow-icon"></icon>
      </div>
      <v-area-picker v-model="visible" :inner-style="{ height: '60%' }" :last-code="lastCode" @confirm-picker="handleConfirm" @cancel-picker="handleCancel"></v-area-picker>
    </div>
    <div>
      <div class="title f-12">默认选中地址</div>
      <div class="cell" @click="visible2 = true">
        <span class="f-12">默认选中</span>
        <icon name="arrow-b" class="arrow-icon"></icon>
      </div>
      <v-area-picker v-model="visible2" :inner-style="{ height: '60%' }" :last-code="lastCode2" @confirm-picker="handleConfirm"></v-area-picker>
    </div>
  </div>
</template>

<script>
import Icon from '@examples/components/icon.vue'
export default {
  name: 'AreaPickerDemo',
  components: { Icon },
  data () {
    return {
      visible: false,
      visible2: false,
      lastCode: '',
      lastCode2: 310109
    }
  },
  methods: {
    handleConfirm (val) {
      console.log(val)
      this.visible = false
    },
    handleCancel () {},
    handleConfirm2 (data) {
      this.selectedVal = data
      this.lastCode = data[data.length - 1]?.code
      this.visible2 = false
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
.cell
  display flex
  justify-content space-between
  align-items center
  padding 10px
  margin 8px 0
  border-radius 4px
  background-color #fff
.arrow-icon
  width 12px
  height 12px
  transform rotate(150deg)
.f-12
  font-size 12px
</style>
