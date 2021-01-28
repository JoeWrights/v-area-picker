<template>
  <div class="device-container" ref="container">
    <div class="example-container center-flex">
      <div class="device-wrapper">
        <div class="device" data-device="iPhone5" data-orientation="portrait" data-color="black">
          <div class="screen">
            <iframe ref="example" id="exampleFrame" name="example" v-if="showIframe" width="100%" height="100%" :src="frameSrc" frameborder="0"></iframe>
          </div>
          <div class="button">
            <!-- You can hook the "home button" to some JavaScript events or just remove it -->
          </div>
        </div>
      </div>
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
      const origin = window.location.origin
      this.frameSrc = `${origin}/iframe.html`
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
  min-width: 350px;
  width: 350px;
  overflow: hidden;
  overflow-y: auto;
  height: 100%;
}
.example-container {
  height: 100%;
  box-shadow: inset 15px 0px  10px -15px rgba(0, 0, 0, .1);
}
.screen {
  background-color: #FFFFFF;
  pointer-events: auto !important;
}
</style>
