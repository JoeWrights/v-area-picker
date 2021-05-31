<template>
  <v-picker :selected.sync="selectedVal" :lastCode="lastCode" @finish="onFinished"></v-picker>
</template>

<script>
export default {
  data () {
    return {
      selectedVal: [],
      lastCode: ''
    }
  },
  methods: {
    onFinished () {
      // do something
    }
  }
}
</script>
