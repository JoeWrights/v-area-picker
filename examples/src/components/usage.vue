<template>
  <div>
    <doc-title name="组件使用" size="lg"></doc-title>
    <doc-section>
      <template slot="title">
        <doc-title name="AreaPicker地址选择器" size="sm"></doc-title>
      </template>
      <template slot="content">
        <div>
          <sub-title title="1. 基础用法">
            <md-reader>通过 `v-model` 控制地址选择器是否展示。</md-reader>
          </sub-title>
          <code-reader readOnly type="javascript" file="demo1.vue"></code-reader>
        </div>
        <div>
          <sub-title title="2. 默认选中">
            <md-reader>如果想选中某个省市区，需要传入一个 `lastCode` 属性（即最后一级区的code），绑定对应的省市区 code。</md-reader>
          </sub-title>
          <code-reader readOnly type="javascript" file="demo11.vue"></code-reader>
        </div>

        <div>
          <sub-title title="3. AreaPicker Props">
            <md-reader>
              参数 | 说明 | 类型 | 默认值 | |
              --- | --- | --- | --- | ---- |
              v-model | 是否显示地址选择器 | boolean |   `false` | |
              title | 地址选择器标题 | _string_ | `选择地址` | |
              lastCode | 最后一级选择的code(用于默认选中) | _string_ \| number | `undefined` |  |
            </md-reader>
          </sub-title>
        </div>
        <div>
          <sub-title title="4. AreaPicker Events">
            <md-reader>
              参数 | 说明 | 回调参数 | |
              --- | --- | --- | --- |
              confirm-picker | 点击确认的事件 | 选择的地址 `[{ name: '北京市', code: 110000 }, ...]` | |
              cancel-picker | 点击取消的事件 | - | |
              click-overlay | 点击遮罩的事件 | - | |
            </md-reader>
          </sub-title>
        </div>
      </template>
    </doc-section>
    <doc-section>
      <template slot="title">
        <doc-title name="Tabs选项卡" size="sm"></doc-title>
      </template>
      <template slot="content">
        <div>
          <sub-title title="1. 基础用法">
            <md-reader>通过 `v-model` 控制当前激活tab，`v-model`的值可以是数字或者字符串</md-reader>
            <md-reader>通过 `options` 配置tabs的选项</md-reader>
          </sub-title>
          <code-reader readOnly type="javascript" file="demo2.vue"></code-reader>
        </div>
        <div>
          <sub-title title="2. change事件">
            <md-reader>可以在 tabs 上绑定 `change` 事件，事件传参为当前tab激活的value。</md-reader>
          </sub-title>
          <code-reader readOnly type="javascript" file="demo22.vue"></code-reader>
        </div>
        <div>
          <sub-title title="3. Tabs Props">
            <md-reader>
              参数 | 说明 | 类型 | 默认值 | |
              --- | --- | --- | --- | ---- |
              v-model | 绑定当前选中标签的标识符 | _string_ \| number | - | |
              options | tabs选择项 | array | `[]` | |
              line-color | 底部条的背景色 | _string_ | `#2B6BFF` |  |
              line-height | 底部条高度， 默认`px` | number | `2` |  |
              line-width | 底部条宽度， 默认`px` | number | `跟随标签的长度` |  |
              animated | 是否开启切换标签内容时的转场动画 | boolean | `true` |  |
            </md-reader>
          </sub-title>
        </div>
        <div>
          <sub-title title="4. Tabs Events">
            <md-reader>
              参数 | 说明 | 回调参数 | |
              --- | --- | --- | --- |
              change | 当前激活的标签改变时触发 | 当前激活的标签值 | |
            </md-reader>
          </sub-title>
        </div>
      </template>
    </doc-section>
    <doc-section>
      <template slot="title">
        <doc-title name="Picker选择器" size="sm"></doc-title>
      </template>
      <template slot="content">
        <div>
          <sub-title title="1. 基础用法">
            <md-reader>如果只想用地址选择picker面板，可以选择用这个</md-reader>
            <md-reader>通过 `selected.sync` 绑定当前地址选择项</md-reader>
            <md-reader>如果想选中某个省市区，需要传入一个 `last-code` 属性（即最后一级区的code），绑定对应的省市区 code。</md-reader>
          </sub-title>
          <code-reader readOnly type="javascript" file="demo3.vue"></code-reader>
        </div>
        <div>
          <sub-title title="2. 选择完成的事件 finish">
            <md-reader>可以绑定 `finish` 事件做一些其他的逻辑</md-reader>
          </sub-title>
          <code-reader readOnly type="javascript" file="demo33.vue"></code-reader>
        </div>
        <div>
          <sub-title title="3. Picker Props">
            <md-reader>
              参数 | 说明 | 类型 | 默认值 | |
              --- | --- | --- | --- | ---- |
              selected | 绑定当前选中的地址 | array | [] | |
              last-code | 选中的地址最后一项的code | _string_ \| number | - | |
            </md-reader>
          </sub-title>
        </div>
        <div>
          <sub-title title="4. Picker Events">
            <md-reader>
              参数 | 说明 | 回调参数 | |
              --- | --- | --- | --- |
              column-change | 选择省\|市\|区的事件 | 当前选择的省\|市\|区 | |
              finish | 选择完成的事件 | - | |
            </md-reader>
          </sub-title>
        </div>
      </template>
    </doc-section>
    <doc-section>
      <template slot="title">
        <doc-title name="ActionSheet动作面板" size="sm"></doc-title>
      </template>
      <template slot="content">
        <code-reader readOnly type="javascript" file="demo4.vue"></code-reader>
      </template>
    </doc-section>
  </div>
</template>

<script>
import MdReader from './md-reader.vue'
import DocTitle from './doc-title.vue'
import SubTitle from './sub-title.vue'
import DocSection from './doc-section.vue'
import CodeReader from './code-reader.vue'
export default {
  name: 'Usage',
  components: {
    MdReader,
    DocTitle,
    SubTitle,
    DocSection,
    CodeReader
  }
}
</script>

<style scoped>

</style>
