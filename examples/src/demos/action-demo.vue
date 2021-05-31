<template>
  <div class="container">
    <div class="main-title">ActionSheet</div>
    <div>
      <div class="title f-12">基础用法</div>
      <div class="cell" @click="visible = true">
        <span class="f-12">显示actionSheet</span>
        <icon name="arrow-b" class="arrow-icon"></icon>
      </div>
      <v-action-sheet v-model="visible" title="标题" :inner-style="{ height: '60%' }"></v-action-sheet>
    </div>
    <div>
      <div class="title f-12">toolbar样式风格</div>
      <div class="cell" @click="visible2 = true">
        <span class="f-12">toolbar 精简风格</span>
        <icon name="arrow-b" class="arrow-icon"></icon>
      </div>
      <v-action-sheet v-model="visible2" title="标题" toolbar-mode="simple" :inner-style="{ height: '60%' }"></v-action-sheet>
    </div>
    <div>
      <div class="title f-12">底部操作项</div>
      <div class="cell" @click="visible3 = true">
        <span class="f-12">底部单个按钮</span>
        <icon name="arrow-b" class="arrow-icon"></icon>
      </div>
      <v-action-sheet v-model="visible3" title="标题" need-bottom-button bottom-button-mode="single" toolbar-mode="simple"  :inner-style="{ height: '60%' }"></v-action-sheet>
      <div class="cell" @click="visible4 = true">
        <span class="f-12">底部多个按钮</span>
        <icon name="arrow-b" class="arrow-icon"></icon>
      </div>
      <v-action-sheet v-model="visible4" title="标题" need-bottom-button toolbar-mode="simple"  :inner-style="{ height: '60%' }"></v-action-sheet>
    </div>
  </div>
</template>

<script>
import Icon from '@examples/components/icon.vue'
export default {
  name: 'ActionSheetDemo',
  components: { Icon },
  data () {
    return {
      visible: false,
      visible2: false,
      visible3: false,
      visible4: false
    }
  },
  methods: {
    handleConfirm () {

    },
    handleCancel () {}
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
