<template>
  <div class="device-container" ref="container">
    <div class="screen">
      <iframe ref="examples" id="exampleFrame" name="example" v-if="showIframe" width="100%" height="100%" :src="frameSrc" frameborder="0"></iframe>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Device',
  data () {
    return {
      showIframe: false,
      frameSrc: ''
    }
  },
  watch: {
    $route: {
      handler (val = {}) {
        const path = val.path
        this.jumpByRouter(path.replace('docs', 'example'))
      }
    }
  },
  async mounted () {
    const timer = setTimeout(async () => {
      const origin = process.env.NODE_ENV === 'production' ? 'https://joewrights.github.io/v-area-picker' : 'http://localhost:3333'
      this.frameSrc = `${origin}/demo.html`
      this.showIframe = true
      clearTimeout(timer)
    }, 1000)
  },
  methods: {
    // jumpByRouter (path) {
    //   let childWindow = window.frames && window.frames.example
    //   childWindow && childWindow.window && childWindow.window.jumpByRouter(path)
    // }
  }
}
</script>

<style lang="scss" scoped>
.device-container {
  min-width: 360px;
  width: 360px;
  height: 640px;
  overflow: hidden;
  overflow-y: auto;
  height: 100%;
  background-color: #fafafa;
  border-radius: 12px;
  box-shadow: #ebedf0 0 4px 12px;
  .screen {
    height: 640px;
    pointer-events: auto !important;
  }
}
</style>
