<template>
  <div>
    <area-picker-demo></area-picker-demo>
    <tabs-demo></tabs-demo>
    <picker-demo></picker-demo>
    <action-demo></action-demo>
  </div>
</template>

<script>
import AreaPickerDemo from '@examples/demos/area-demo.vue'
import TabsDemo from '@examples/demos/tabs-demo.vue'
import PickerDemo from '@examples/demos/picker-demo.vue'
import ActionDemo from '@examples/demos/action-demo.vue'

export default {
  name: 'ComponentPage',
  components: {
    AreaPickerDemo,
    TabsDemo,
    PickerDemo,
    ActionDemo
  }
}
</script>

<style scoped>

</style>
