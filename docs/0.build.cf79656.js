(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{222:function(e,n,t){"use strict";t.r(n),n.default="<template>\n  <div>\n    <button @click=\"visible = true\">test</button>\n    \x3c!-- <v-action-sheet v-model=\"visible\" :inner-style=\"{ height: '60%' }\" title=\"选择地址\" toolbar-mode=\"simple\" need-bottom-button>\n      <v-tabs v-model=\"activeTab\" :options=\"tabs\">\n        <div slot=\"province\">111</div>\n        <div slot=\"city\">222</div>\n        <div slot=\"area\">333</div>\n      </v-tabs>\n    </v-action-sheet> --\x3e\n    <v-area-picker v-model=\"visible\" :inner-style=\"{ height: '60%' }\" :last-code=\"lastCode\" @confirm-picker=\"handleConfirm\" @cancel-picker=\"handleCancel\"></v-area-picker>\n  </div>\n</template>\n\n<script>\nexport default {\n  data () {\n    return {\n      visible: false,\n      activeTab: 'aa',\n      tabs: [\n        { label: '请选择', value: 'aa', slot: 'province' },\n        { label: '请选择', value: 'bb', slot: 'city' },\n        { label: '请选择', value: 'cc', slot: 'area' }\n      ],\n      selectedVal: [],\n      lastCode: 360732\n    }\n  },\n  methods: {\n    handleConfirm (data) {\n      this.selectedVal = data\n      this.lastCode = data[data.length - 1]?.code\n      this.visible = false\n    },\n    handleCancel () {\n      console.log('------------------------------------')\n      console.log('cancel')\n      console.log('------------------------------------')\n    }\n  }\n}\n<\/script>\n"}}]);
//# sourceMappingURL=0.build.cf79656.js.map