<template>
  <div class="tabs-wrapper">
    <div class="tabs flex">
      <div
        :ref="`tabItem${i}`"
        class="item"
        :class="tabItemClass(item)"
        v-for="(item, i) in currOptions"
        :key="i"
        @click="onTabSelect(item)">
        <div>{{ item.label }}</div>
      </div>
      <div :ref="`tabLine`" class="tab-line" :class="{ animated }" :style="tabLineStyle"></div>
    </div>
    <keep-alive>
      <transition :name="transitionName">
        <div v-for="({ slot }, idx) in activeTabs" :key="idx" class="tabs-content">
          <slot :name="slot"></slot>
        </div>
      </transition>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'VTabs',
  props: {
    value: {
      type: [Number, String]
    },
    options: {
      type: Array,
      default: () => []
    },
    lineColor: {
      type: String,
      default: '#2B6BFF'
    },
    lineHeight: {
      type: Number,
      default: 2
    },
    lineWidth: Number,
    animated: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      currValue: this.value,
      currOptions: [],
      transitionName: '',
      tabLineStyle: {}
    }
  },
  computed: {
    tabItemClass () {
      return (item) => {
        const classList = []
        if (item.active) {
          classList.push('active c-3')
        } else {
          classList.push('c-9')
        }
        if (item.disabled) classList.push('disabled')
        return classList.join(' ')
      }
    },
    activeTabs () {
      return this.currOptions.filter((item) => item.value === this.currValue)
    },
    curIndex () {
      return this.currOptions.findIndex(({ value }) => value === this.value)
    }
  },
  watch: {
    options () {
      this.initOptions()
    },
    value: {
      async handler (value) {
        this.currValue = value
        this.initOptions()
        await this.$nextTick()
        await this.setTabItemLine()
      },
      immediate: true
    },
    curIndex (val, oldVal) {
      this.transitionName = val > oldVal ? 'slide-left' : 'slide-right'
    }
  },
  mounted () {
    this.initOptions()
  },
  methods: {
    initOptions () {
      const values = this.currOptions.map(({ value }) => value)
      const hasRepeatVal = values.length !== new Set(values).size
      if (hasRepeatVal) throw new Error('tab的value值必须唯一')
      this.currOptions = this.options.map(item => {
        return {
          ...item,
          active: item.value === this.currValue,
          disabled: !!item.disabled
        }
      })
    },
    onTabSelect (item) {
      if (item.disabled) return
      this.currOptions.forEach(obj => { obj.active = false })
      item.active = true
      this.currValue = item.value
      this.$emit('input', this.currValue)
    },
    async setTabItemLine () {
      const index = this.currOptions.findIndex(({ value }) => value === this.value)
      const doms = this.$refs[`tabItem${index}`]
      const dom = doms && doms[0]
      this.tabLineStyle = this.getDomPosition(dom)
    },
    getDomPosition (dom) {
      if (!dom) return {}
      const left = dom.offsetLeft + dom.offsetWidth / 2
      const { lineColor, lineHeight, lineWidth } = this
      return {
        height: `${lineHeight}px`,
        width: `${lineWidth || dom.getBoundingClientRect().width}px`,
        transform: `translateX(${left}px) translateX(-50%)`,
        background: lineColor
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '../assets/styles/common.styl'

.tabs-wrapper
  height 100%
  overflow hidden
.tabs
  position relative
  display flex
  background-color #fff
  .item
    position relative
    display flex
    flex-direction column
    align-items center
    font-size 14px
    & + .item
      margin-left 10px
  .tab-line
    position absolute
    height 2px
    left 0
    bottom -5px
    &.animated
      transition all 0.3s
.tabs-content
  margin-top 10px
  height 100%
  overflow scroll
.active
  color #2B6BFF
.disabled
  cursor not-allowed
.c-9
  color #999
</style>
