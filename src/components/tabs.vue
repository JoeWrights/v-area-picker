<template>
  <div :class="{'tabs-content': currOptions.length === 1}">
    <div class="tabs flex">
      <div
        :ref="`tabItem${i}`"
        class="item flex-center f-29 text-500"
        :class="tabItemClass(item)"
        v-for="(item, i) in currOptions"
        :key="i"
        @click="onTabSelect(item)">
        <div>{{ item.label }}</div>
        <div v-if="i === 0" :ref="`tabLine${item.value}`" class="tab-line" :style="tabLineStyle"></div>
      </div>
    </div>
    <keep-alive>
      <transition :name="transitionName">
        <div v-for="({ slot }, idx) in activeTabs" :key="idx" class="bg-f" :class="{'tabs-content': currOptions.length > 1}">
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
    }
  },
  data () {
    return {
      currValue: this.value,
      currOptions: [],
      transitionName: '',
      tabLineStyle: {},
      firstChildLeft: null
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
    }
  },
  watch: {
    options () {
      this.initOptions()
    },
    value: {
      async handler (value, oldVal) {
        this.currValue = value
        this.initOptions()
        this.transitionName = value > oldVal ? 'slide-left' : 'slide-right'
        await this.$nextTick()
        this.setTabItemLine()
      },
      immediate: true
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
      const idx = this.currOptions.findIndex(({ value }) => value === this.value)
      const doms = this.$refs[`tabItem${idx}`]
      const dom = doms && doms[0]
      const firstChildDom = this.$refs.tabItem0
      if (dom && firstChildDom) {
        this.firstChildLeft = this.firstChildLeft === null ? firstChildDom[0].offsetLeft : this.firstChildLeft
        const { width, left } = this.getDomPosition(dom)
        this.tabLineStyle = {
          width: typeof width === 'string' ? width : `${width}px`,
          transform: `translateX(${left - this.firstChildLeft}px)`
        }
        return false
      }
    },
    getDomPosition (dom) {
      if (!dom) return {}
      return {
        width: dom.getBoundingClientRect().width,
        left: dom.offsetLeft
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.tabs
  display flex
  .item
    position relative
    display flex
    flex-direction column
    align-items center
    font-size 14px
    & + .item
      margin-left 10px
    .tab-line
      height 2px
      margin-top 2px
      background blue
      transition all 0.3s
.tabs-content
  margin-top 10px
.active
  color blue
.disabled
  cursor not-allowed
</style>
