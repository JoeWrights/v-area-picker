<template>
  <action-sheet v-model="visible" v-bind="$attrs" v-on="$listeners">
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
  value: Boolean,
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
