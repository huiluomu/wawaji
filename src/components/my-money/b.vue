<template>
  <transition name="fade">
    <div class="index" v-show="isShow" ref="jilu">
      <div class="mian_top">
        <span class="mint-button-icon" @click="show(false)">
          <i class="el-icon-arrow-left"></i>
        </span>
      </div>
    </div>
  </transition>
</template>

<script>
  import BScroll from 'better-scroll'
  export default {
    data(){
      return{
        isShow:false
      }
    },
    methods:{
      show(isShow) {
        this.isShow = !this.isShow
        if(isShow) {
          this.$nextTick(() => {
            if(!this.scroll) {
              this.scroll = new BScroll(this.$refs.jilu, {
                click: true
              })
            } else {
              this.scroll.refresh()
            }
          })
        }
      }
    }
  }
</script>

<style lang="sass" rel="stylesheet/sass" scoped>
  .index
    position: absolute
    top: 0
    left: 0
    width: 100%
    bottom: 0
    overflow: hidden
    background: rgb(255,255,255)
    z-index: 100
    &.fade-enter-active, &.fade-leave-active
      transition: opacity .3s linear
    &.fade-enter,&.fade-leave-to
      opacity: 0
    .mian_top
      background-color: #f2f2f2
      height: 128px
      border-bottom: 1px solid #cccccc
      .mint-button-icon
        .mintui
          font-size: 40px
          line-height: 100%
      .my_currency
        position: absolute
        transform: translate(0,30%)
        font-size: 20px
      .jilu
        float: right
        width: 56px
        line-height: 20px
        text-align: center
        border: 1px solid #cccccc
        border-radius: 5px
        background-color: #fff
        margin-top: 10px
        font-size: 12px
        color: #333333
</style>
