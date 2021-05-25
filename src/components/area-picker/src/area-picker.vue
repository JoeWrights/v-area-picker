<template>
  <action-sheet v-model="visible" :title="title" v-bind="areaPickerAttrs" v-on="areaPickerListeners" @confirm="handleConfirmPicker" @cancel="handleCancelPicker" @click-overlay="handleClickOverlay">
    <picker ref="picker" :selected.sync="selectedVal" :visible="visible" :lastCode="lastCode" @finish="onFinished">
      <template v-if="$slots.selectedIcon" #selectedIcon>
        <slot name="selectedIcon"></slot>
      </template>
    </picker>
  </action-sheet>
</template>

<script>
import ActionSheet from '../../action-sheet/src/action-sheet.vue'
import Picker from '../../picker/src/picker.vue'

export default {
  name: 'VAreaPicker',
  components: {
    Picker,
    ActionSheet
  },
  props: {
    value: Boolean,
    title: {
      type: String,
      default: '选择地址'
    },
    lastCode: [String, Number]
  },
  data () {
    return {
      selectedVal: [],
      finished: false
    }
  },
  computed: {
    visible: {
      get () {
        return this.value
      },
      set (val) {
        this.$emit('input', val)
      }
    },
    areaPickerAttrs () {
      const attrs = Object.keys(this.$attrs)
      if (attrs.includes('disabledConfirm')) return this.$attrs
      return {
        ...this.$attrs,
        disabledConfirm: !this.finished
      }
    },
    areaPickerListeners () {
      return {
        ...this.$listeners,
        'confirm-picker': this.handleConfirmPicker,
        'cancel-picker': this.handleCancelPicker,
        'click-overlay': this.handleClickOverlay
      }
    }
  },
  methods: {
    onFinished () {
      const { $attrs: { autoConfirm = false } } = this
      if (autoConfirm) {
        this.$emit('input', false)
        this.handleConfirmPicker()
      }
      this.finished = true
    },
    handleConfirmPicker () {
      this.$emit('confirm-picker', this.selectedVal)
    },
    handleCancelPicker () {
      const bool = `${this.selectedVal[this.selectedVal.length - 1]?.code}` === `${this.lastCode}`
      if (!bool) {
        this.$refs.picker.resetData()
      }
      this.$emit('cancel-picker')
    },
    handleClickOverlay () {
      const bool = `${this.selectedVal[this.selectedVal.length - 1]?.code}` === `${this.lastCode}`
      if (!bool) {
        this.$refs.picker.resetData()
      }
      this.$emit('click-overlay')
    }
  }
}
</script>

<style scoped>

</style>
