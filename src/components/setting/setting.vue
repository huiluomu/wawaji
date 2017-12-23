<template>
  <transition name="fade">
    <div class="index" ref="setting">
      <div>
        <div class="header">
          <span class="mint-button-icon">
            <a @click="$router.go(-1)" href="javascript:;">
              <i class="el-icon-arrow-left"></i>
            </a>
          </span>
          <span id="wawa">设置</span>
          <div class="tiao-border">
            <img src="../../../static/images/v.png" alt="">
          </div>
        </div>
        <!-- 背景音乐和音效 -->
        <div class="music">
          <p>
            <i>背景音乐</i>
            <el-switch class="switchs"
              v-model="value2"
              active-color="#FF4E9E"
              inactive-color="#D8DCE5">
            </el-switch>
          </p>
          <p>
            <i>音效&nbsp;&nbsp;&nbsp;&nbsp;</i>
            <el-switch class="switchs"
              v-model="value4"
              active-color="#FF4E9E"
              inactive-color="#D8DCE5">
            </el-switch>
          </p>
        </div>
        <div class="music-bottom">
          <p>
            <i>问题反馈</i>
            <span><i class="el-icon-arrow-right"></i></span>
          </p>
          <p>
            <i>关于我们</i>
            <span><i class="el-icon-arrow-right"></i></span>
          </p>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
  import BScroll from 'better-scroll'
  export default {
    data(){
      return{
        isShow:false,
        value1: true,
        value2: true,
        value3: true,
        value4: true
      }
    },
    methods:{
//      showSet(isShow) {
//        this.isShow = !this.isShow
//        if(isShow) {
//          this.$nextTick(() => {
//            if(!this.scroll) {
//              this.scroll = new BScroll(this.$refs.setting, {
//                click: true
//              })
//            } else {
//              this.scroll.refresh()
//            }
//          })
//        }
//      }
    },
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
    /*z-index: 100*/
    &.fade-enter-active, &.fade-leave-active
      transition: opacity .3s linear
    &.fade-enter,&.fade-leave-to
      opacity: 0
    .header
      position: relative
      background: #7DD5C9
      height: 40px
      .mint-button-icon
        display: inline-block
        margin-top: 7px
        .el-icon-arrow-left
          font-size: 25px
          color: #fff
      #wawa
        color: #fff
        font-size: 18px
        position: absolute
        top: 50%
        left: 50%
        transform: translate(-50%,-50%)
      .tiao-border
        img
          width: 100%
    .music
      margin-top: 44px
      p
        display: -webkit-flex
        margin-bottom: 25px
        text-align: center
        i
          display: inline-block
          flex: 1
        .switchs
          display: inline-block
          flex: 1
    .music-bottom
      p
        display: -webkit-flex
        margin-top: 25px
        text-align: center
        i
          display: inline-block
          flex: 1
        span
          display: inline-block
          flex: 1
</style>
