<template>
  <v-action-sheet
    v-model="visible"
    :inner-style="{ height: '60%' }"
    @confirm="handleConfirm"
    @cancel="handleCancel">
  </v-action-sheet>
</template>

<script>
export default {
  data () {
    return {
      visible: false
    }
  },
  methods: {
    handleConfirm () {
      // do something
    },
    handleCancel () {
      // do something
    }
  }
}
</script>
