<template>
  <div class="area-picker">
    <tabs ref="tabs" v-model="activeTab" :options="tabs" @change="handleChangeTab">
      <div v-for="tab in tabs" :key="tab.slot" :slot="tab.slot">
        <div class="area-picker-column">
          <div class="area-picker-column__item" v-for="item in columnList" :key="item.code" @click="handleSelectColumn(tab, item)">
            <span class="name" :class="{ 'active': isActive(item) }">{{ item.name }}</span>
            <transition name="fade">
              <span v-if="!$slots.selectedIcon">
                <icon v-show="isActive(item)" class="ok-icon" name="ok"/>
              </span>
              <span v-else v-show="isActive(item)"><slot name="selectedIcon"></slot></span>
            </transition>
          </div>
        </div>
      </div>
    </tabs>
  </div>
</template>

<script>
import Tabs from './tabs.vue'
import Icon from './icon.vue'
import { getProvinceList, getCityListByProvince, getCountyListByCity, getCountyByCode, getCityByCountyCode, getProvinceByCityCode } from '../utils'

const areaMap = {
  0: 'province',
  1: 'city',
  2: 'county'
}

export default {
  name: 'Picker',
  components: {
    Tabs,
    Icon
  },
  props: {
    selected: {
      type: Array,
      default: () => []
    },
    lastCode: [String, Number],
    visible: Boolean
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
    },
    isActive () {
      return ({ code }) => {
        const curTabIdx = this.tabs.findIndex(({ value }) => value === this.activeTab)
        return `${this.selectedVal[curTabIdx]?.code}` === `${code}`
      }
    }
  },
  created () {
    this.provinceList = getProvinceList()
  },
  watch: {
    lastCode: {
      handler: 'matchAreaByLastCode',
      immediate: true
    },
    visible: {
      async handler (bool) {
        if (bool) {
          await this.$nextTick()
          this.$refs.tabs.setTabItemLine()
        }
      }
    }
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
        this.$emit('finish')
      }
      this.$emit('update:selected', this.selectedVal)
    },
    handleChangeTab (val) {
      const idx = this.tabs.findIndex(({ value }) => value === val)
      const areaDataListMap = {
        0: this.provinceList,
        1: this.cityList,
        2: this.countyList
      }
      const curColumnList = areaDataListMap[idx]

      if (this.selectedVal[idx] && this.selectedVal[idx]?.code) {
        const selectedIdx = curColumnList.findIndex(({ code }) => code === this.selectedVal[idx]?.code)
        curColumnList.splice(selectedIdx, 1)
        curColumnList.unshift(this.selectedVal[idx])
      }
    },
    async matchAreaByLastCode () {
      if (!this.lastCode) return

      const curCounty = getCountyByCode(this.lastCode)
      const curCity = getCityByCountyCode(curCounty.code)
      const curProvince = getProvinceByCityCode(curCity.code)

      this.cityList = getCityListByProvince(curProvince.code)
      this.countyList = getCountyListByCity(curCity.code)
      this.selectedVal = [curProvince, curCity, curCounty]

      this.tabs = this.selectedVal.map((item, i) => {
        return {
          label: item.name,
          value: areaMap[i],
          slot: areaMap[i],
          index: i
        }
      })
      const idx = this.countyList.findIndex(({ code }) => `${code}` === `${this.selectedVal[2]?.code}`)
      this.countyList.splice(idx, 1)
      this.countyList.unshift(this.selectedVal[2])
      this.activeTab = areaMap[this.selectedVal.length - 1]
      this.$emit('update:selected', [
        curProvince,
        curCity,
        curCounty
      ])
    },
    async resetData () {
      await this.matchAreaByLastCode()
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
      justify-content space-between
      font-size 14px
      margin-top 36px
      color #333
      &:first-child
        margin-top 16px
      .name
        &.active
          color #2B6BFF
      .ok-icon
        width 18px
        height 18px
        color #2B6BFF
</style>
