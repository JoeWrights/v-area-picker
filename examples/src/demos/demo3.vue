<template>
  <v-picker :selected.sync="selectedVal" :lastCode="lastCode"></v-picker>
</template>

<script>
export default {
  data () {
    return {
      selectedVal: [],
      lastCode: ''
    }
  }
}
</script>
