<template>
  <div>
    <v-area-picker v-model="visible" :inner-style="{ height: '60%' }" :last-code="lastCode" @confirm-picker="handleConfirm" @cancel-picker="handleCancel"></v-area-picker>
  </div>
</template>

<script>
export default {
  data () {
    return {
      visible: false,
      lastCode: 310109
    }
  },
  methods: {
    handleConfirm (data) {
      this.selectedVal = data
      this.lastCode = data[data.length - 1]?.code
      this.visible = false
    },
    handleCancel () {

    }
  }
}
</script>
