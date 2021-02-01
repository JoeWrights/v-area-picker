<template>
  <div>
    <div class="nav">
      <div class="router-path">{{ 'https://joewrights.github.io/v-area-picker/demo.html' }}</div>
    </div>
    <component-page class="demo-container"></component-page>
  </div>
</template>

<script>
import ComponentPage from './src/components/component-page.vue'

export default {
  name: 'App',
  components: {
    ComponentPage
  }
}
</script>

<style lang="stylus" scoped>
.nav
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 40px;
  width: 100%;
  background-color: rgba(0,0,0,.7);
  .router-path
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    margin: 10px;
    padding: 5px 0;
    box-sizing border-box
    border-radius: 6px;
    background-color: #fff;
    font-size: 13px;
.demo-container
  position relative
  top 40px
</style>
