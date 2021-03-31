<template>
  <action-sheet v-model="visible" :title="title" v-bind="$attrs" v-on="$listeners">
    <picker></picker>
  </action-sheet>
</template>

<script>
import ActionSheet from './action-sheet.vue'
import Picker from './picker.vue'

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
    }
  }
}
</script>

<style scoped>

</style>
