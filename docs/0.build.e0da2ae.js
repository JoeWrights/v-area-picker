(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{224:function(n,e,i){"use strict";i.r(e),e.default='<template>\n  <div class="container">\n    <div class="main-title">ActionSheet</div>\n    <div>\n      <div class="title f-12">基础用法</div>\n      <div class="cell" @click="visible = true">\n        <span class="f-12">显示actionSheet</span>\n        <icon name="arrow-b" class="arrow-icon"></icon>\n      </div>\n      <v-action-sheet v-model="visible" title="标题" :inner-style="{ height: \'60%\' }"></v-action-sheet>\n    </div>\n    <div>\n      <div class="title f-12">toolbar样式风格</div>\n      <div class="cell" @click="visible2 = true">\n        <span class="f-12">toolbar 精简风格</span>\n        <icon name="arrow-b" class="arrow-icon"></icon>\n      </div>\n      <v-action-sheet v-model="visible2" title="标题" toolbar-mode="simple" :inner-style="{ height: \'60%\' }"></v-action-sheet>\n    </div>\n    <div>\n      <div class="title f-12">底部操作项</div>\n      <div class="cell" @click="visible3 = true">\n        <span class="f-12">底部单个按钮</span>\n        <icon name="arrow-b" class="arrow-icon"></icon>\n      </div>\n      <v-action-sheet v-model="visible3" title="标题" need-bottom-button bottom-button-mode="single" toolbar-mode="simple"  :inner-style="{ height: \'60%\' }"></v-action-sheet>\n      <div class="cell" @click="visible4 = true">\n        <span class="f-12">底部多个按钮</span>\n        <icon name="arrow-b" class="arrow-icon"></icon>\n      </div>\n      <v-action-sheet v-model="visible4" title="标题" need-bottom-button toolbar-mode="simple"  :inner-style="{ height: \'60%\' }"></v-action-sheet>\n    </div>\n  </div>\n</template>\n\n<script>\nimport Icon from \'@examples/components/icon.vue\'\nexport default {\n  name: \'ActionSheetDemo\',\n  components: { Icon },\n  data () {\n    return {\n      visible: false,\n      visible2: false,\n      visible3: false,\n      visible4: false\n    }\n  },\n  methods: {\n    handleConfirm () {\n\n    },\n    handleCancel () {}\n  }\n}\n<\/script>\n\n<style lang="stylus" scoped>\n.container\n  margin 20px 10px\n.main-title\n  margin-bottom 10px\n  font-size 14px\n  color rgba(69, 90, 100, 0.6)\n  font-weight 500\n.title\n  font-size 12px\n  color rgba(69, 90, 100, 0.6)\n.cell\n  display flex\n  justify-content space-between\n  align-items center\n  padding 10px\n  margin 8px 0\n  border-radius 4px\n  background-color #fff\n.arrow-icon\n  width 12px\n  height 12px\n  transform rotate(150deg)\n.f-12\n  font-size 12px\n</style>\n'}}]);
//# sourceMappingURL=0.build.e0da2ae.js.map