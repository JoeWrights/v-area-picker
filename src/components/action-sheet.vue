<template>
  <div class="v-action-sheet">
    <transition name="slide-top">
      <div v-if="visible" class="sheet-wrapper" :style="innerStyle">
        <div class="toolbar">
          <div v-if="!$slots.toolbar" class="default-bar">
            <div v-if="toolbarMode === 'simple'" class="simple">
              <div class="title">{{ title }}</div>
              <div class="cancel-pla" @click="$emit('cancel'); $emit('input', false)">
                <icon name="close" class="close-icon"></icon>
              </div>
            </div>
            <div v-else class="confirm">
              <div class="cancel-pla" @click="$emit('cancel'); $emit('input', false)">{{ cancelText }}</div>
              <div class="title">{{ title }}</div>
              <div class="confirm-pla" @click="$emit('confirm')">{{ confirmText }}</div>
            </div>
          </div>
          <div v-else><slot name="toolbar"></slot></div>
        </div>

        <div class="content"><slot></slot></div>

        <div class="footer">
          <div v-if="$slots.footer"><slot name="footer"></slot></div>
          <div v-if="!$slots.footer && needBottomButton" class="bottom-button">
            <div v-if="bottomButtonMode !== 'single'" class="cancel-btn" @click="$emit('cancel'); $emit('input', false)">{{ cancelText }}</div>
            <div class="confirm-btn" @click="$emit('confirm')">{{ confirmText }}</div>
          </div>
        </div>
      </div>
    </transition>

    <transition name="fade">
      <div v-if="visible" class="mask" @touchmove.prevent.stop @click="$emit('input', false)"></div>
    </transition>
  </div>
</template>

<script>
import Icon from './icon.vue'

export default {
  name: 'VActionSheet',
  components: {
    Icon
  },
  props: {
    value: Boolean,
    title: {
      type: String,
      default: ''
    },
    toolbarMode: {
      type: String,
      default: 'confirm',
      validator (val) {
        return ['simple', 'confirm'].includes(val)
      }
    },
    bottomButtonMode: {
      type: String,
      default: 'multi',
      validator (val) {
        return ['single', 'multi'].includes(val)
      }
    },
    needBottomButton: {
      type: Boolean,
      default: false
    },
    cancelText: {
      type: String,
      default: '取消'
    },
    confirmText: {
      type: String,
      default: '确认'
    },
    innerStyle: {
      type: [Object, Array],
      default: () => ({})
    }
  },
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

<style lang="stylus" scoped>
stand-animation-enter = cubic-bezier(0.40,0.00,0.20,1.00)

.v-action-sheet
  .sheet-wrapper
    position fixed
    display flex
    flex-direction column
    min-height 10%
    max-height 100%
    width 100%
    margin 0 auto
    left 0
    right 0
    bottom 0
    z-index 999
    border-radius 8px
    background-color #fff
    .toolbar
      .default-bar
        padding 0 16px
        font-size 14px
        .title
          color #333
          font-size 16px
          font-weight 500
        .cancel-pla
          display flex
          justify-content center
          align-items center
          color #969799
          .close-icon
            width 20px
            height 20px
            color #333
        .confirm-pla
          color #576b95
        .simple
        .confirm
          display flex
          justify-content space-between
          align-items center
          height 44px
        .confirm
          .title
            margin 0 16px
    .content
      padding 0 16px
    .footer
      display flex
      align-items center
      margin 10px 16px
      position absolute
      left 0
      right 0
      bottom 0
      .bottom-button
        flex 1
        display flex
        justify-content space-between
        align-items center
        font-size 16px
        font-weight 500
        .cancel-btn
          display flex
          justify-content center
          align-items center
          border 1px solid #ccc
          width 140px
          height 48px
          border-radius 8px
        .confirm-btn
          flex 1
          display flex
          justify-content center
          align-items center
          height 48px
          border-radius 8px
          background-color: #f00fff;
        .cancel-btn + .confirm-btn
          margin-left 10px
  .mask
    position fixed
    left 0
    right 0
    top 0
    bottom 0
    width 100%
    height 100%
    background-color #000
    opacity .6
    z-index 998
.fade-enter
.fade-leave-to
  opacity 0 !important
.fade-enter-active
.fade-leave-active
  transition opacity 0.4s
.slide-top-enter
.slide-top-leave-to
  transform translate3d(0, 100%, 0)
.slide-top-enter-active
  will-change transform
  transition transform .4s stand-animation-enter 0s, opacity .2s linear
.slide-top-leave-active
  will-change transform
  transition transform .2s linear 0s
</style>
