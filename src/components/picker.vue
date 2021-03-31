<template>
  <div class="area-picker">
    <tabs v-model="activeTab" :options="tabs">
      <div v-for="tab in tabs" :key="tab.slot" :slot="tab.slot">
        <div class="area-picker-column">
          <div class="area-picker-column__item" v-for="item in columnList" :key="item.code" @click="handleSelectColumn(tab, item)">{{ item.name }}</div>
        </div>
      </div>
    </tabs>
  </div>
</template>

<script>
import Tabs from './tabs.vue'
import { getProvinceList, getCityListByProvince, getCountyListByCity } from '../utils'

export default {
  name: 'Picker',
  components: {
    Tabs
  },
  data () {
    return {
      activeTab: 'province',
      tabs: [{ label: '请选择', value: 'province', slot: 'province', index: 0 }],
      provinceList: [],
      cityList: [],
      countyList: [],
      selectedVal: []
    }
  },
  computed: {
    columnList () {
      const listMap = {
        province: this.provinceList,
        city: this.cityList,
        county: this.countyList
      }
      return listMap[this.activeTab]
    }
  },
  created () {
    this.provinceList = getProvinceList()
  },
  methods: {
    handleSelectColumn ({ value, index }, item) {
      const handlerMap = {
        province: {
          fn: getCityListByProvince,
          value: 'city'
        },
        city: {
          fn: getCountyListByCity,
          value: 'county'
        }
      }
      const nextColumn = handlerMap[value]?.value

      const list = this[`${nextColumn}List`] = nextColumn ? handlerMap[value].fn(item.code) : []

      this.selectedVal = [...this.selectedVal.slice(0, index), { ...item }]
      if (item.name) this.tabs[index].label = item.name

      this.$emit('column-change', item)

      // if nextColumn's list not empty
      if (list.length) {
        const nextTab = {
          index: index + 1,
          label: '请选择',
          value: nextColumn,
          slot: nextColumn
        }
        this.tabs = [...this.tabs.slice(0, index + 1), { ...nextTab }]

        const timer = setInterval(() => {
          this.activeTab = nextColumn
          clearInterval(timer)
        }, 300)
      } else {
        // reset tabs
        this.tabs = this.tabs.slice(0, index + 1)
        this.tabs[this.tabs.length - 1].label = item.name
      }
    }
  }
}
</script>

<style lang="stylus" scoped>
.area-picker
  overflow hidden
  user-select none
  position relative
  height 100%
  background-color #fff
  &-column
    display flex
    flex-direction column
    height 100%
    overflow auto
    &__item
      display flex
      align-items center
      font-size 14px
      margin-top 36px
      color #333
      &:first-child
        margin-top 16px
</style>
