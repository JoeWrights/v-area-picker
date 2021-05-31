(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{237:function(n,e,i){"use strict";i.r(e),e.default='<template>\n  <div class="container">\n    <div class="main-title">Picker</div>\n    <div>\n      <div class="title f-12">基础用法</div>\n      <div class="card">\n        <v-picker :selected.sync="selectedVal"></v-picker>\n      </div>\n    </div>\n    <div>\n      <div class="title f-12">绑定finish事件</div>\n      <div class="card">\n        <v-picker :selected.sync="selectedVal2" @finish="onFinished"></v-picker>\n      </div>\n    </div>\n  </div>\n</template>\n\n<script>\nexport default {\n  name: \'PickerDemo\',\n  data () {\n    return {\n      selectedVal: [],\n      selectedVal2: []\n    }\n  },\n  methods: {\n    onFinished () {\n      const timer = setTimeout(() => {\n        window.alert(JSON.stringify(this.selectedVal2))\n        clearTimeout(timer)\n      }, 2000)\n    }\n  }\n}\n<\/script>\n\n<style lang="stylus" scoped>\n.container\n  margin 20px 10px\n.main-title\n  margin-bottom 10px\n  font-size 14px\n  color rgba(69, 90, 100, 0.6)\n  font-weight 500\n.title\n  font-size 12px\n  color rgba(69, 90, 100, 0.6)\n.card\n  background-color #fff\n  border-radius 4px\n  padding 10px\n  margin 10px 0\n  font-size 14px\n  height 340px\n</style>\n'}}]);
//# sourceMappingURL=13.build.0128b50.js.map