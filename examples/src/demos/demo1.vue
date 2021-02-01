<template>
  <div>
    <button @click="visible = true">test</button>
    <v-action-sheet v-model="visible" :inner-style="{ height: '60%' }" title="选择地址" toolbar-mode="simple" need-bottom-button>
      <div>sss</div>
    </v-action-sheet>
  </div>
</template>

<script>
export default {
  data () {
    return {
      visible: false
    }
  }
}
</script>
