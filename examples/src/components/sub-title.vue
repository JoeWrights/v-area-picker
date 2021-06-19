<template>
  <div class="sub-title">
    <div class="text">{{ title }}</div>
    <div class="desc"><slot></slot></div>
  </div>
</template>

<script>
export default {
  name: 'SubTitle',
  props: {
    title: String
  }
}
</script>

<style lang="scss" scoped>
.sub-title {
  padding: 10px 0;
  .text {
    font-size: 16px;
    font-weight: 500;
    padding: 10px 0;
  }
  .desc {
    background: #fff;
    padding: 10px;
    border-radius: 8px;
  }
}
</style>
