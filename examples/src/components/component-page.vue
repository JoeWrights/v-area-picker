<template>
  <div class="docs-view">
    <div class="view-wrap">
      <install></install>
      <usage></usage>
    </div>
    <device class="view-device"></device>
  </div>
</template>

<script>
import Install from './install.vue'
import Usage from './usage.vue'
import Device from './divice.vue'

export default {
  name: 'ComponentPage',
  components: {
    Device,
    Install,
    Usage
  }
}
</script>

<style lang="scss" scoped>
.docs-view {
  height: 100%;
  overflow: auto;
  width: 100%;
  padding: 20px;
  display: flex;
  justify-content: center;
  background-color: #f7f8fa;
  .view-wrap {
    margin: 0 auto;
    @media (max-width: 768px) {
      width: calc(100% - 40px);
    }
    @media (min-width: 768px) {
      width: calc(100% - 120px);
    }
    @media (min-width: 1100px) {
      width: calc(100% - 300px);
    }
    color: #5e6d82;
  }
  .view-device {
    margin: 20px 50px 0 100px;
  }
}

</style>
