<template>
  <div>
    <button @click="visible = true">test</button>
    <!-- <v-action-sheet v-model="visible" :inner-style="{ height: '60%' }" title="选择地址" toolbar-mode="simple" need-bottom-button>
      <v-tabs v-model="activeTab" :options="tabs">
        <div slot="province">111</div>
        <div slot="city">222</div>
        <div slot="area">333</div>
      </v-tabs>
    </v-action-sheet> -->
    <v-area-picker v-model="visible" :inner-style="{ height: '60%' }" :last-code="lastCode" @confirm-picker="handleConfirm" @cancel-picker="handleCancel"></v-area-picker>
  </div>
</template>

<script>
export default {
  data () {
    return {
      visible: false,
      activeTab: 'aa',
      tabs: [
        { label: '请选择', value: 'aa', slot: 'province' },
        { label: '请选择', value: 'bb', slot: 'city' },
        { label: '请选择', value: 'cc', slot: 'area' }
      ],
      selectedVal: [],
      lastCode: 360732
    }
  },
  methods: {
    handleConfirm (data) {
      this.selectedVal = data
      this.lastCode = data[data.length - 1]?.code
      this.visible = false
    },
    handleCancel () {
      console.log('------------------------------------')
      console.log('cancel')
      console.log('------------------------------------')
    }
  }
}
</script>
