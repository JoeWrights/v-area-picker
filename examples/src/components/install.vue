<template>
  <div>
    <doc-title name="安装" size="lg"></doc-title>
    <doc-section>
      <template slot="title">1. 使用npm</template>
      <template slot="content">
        <code-reader readOnly file="installation/npm.sh"></code-reader>
        <br>
        <code-reader readOnly type="javascript" file="installation/demo1.js"></code-reader>
      </template>
    </doc-section>
    <doc-section>
      <template slot="title">2. 安装babel-plugin-import按需引入</template>
      <template slot="content">
        <code-reader readOnly file="installation/npm2.sh"></code-reader>
        <br>
        <code-reader readOnly type="javascript" file="installation/babelConfig.js"></code-reader>
        <br>
        <code-reader readOnly type="javascript" file="installation/demand.js"></code-reader>
      </template>
    </doc-section>
  </div>
</template>

<script>
import DocTitle from './doc-title.vue'
import DocSection from './doc-section.vue'
import CodeReader from './code-reader.vue'
export default {
  name: 'Install',
  components: {
    DocTitle,
    DocSection,
    CodeReader
  }
}
</script>

<style scoped>

</style>
