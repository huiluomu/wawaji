<template>
  <div id="app">
    <ele-header></ele-header>
    <div class="s-main">
      <!--轮播图-->
      <div class="s-swiper">
      <transition name="mybox">
        <el-carousel height="120px" :interval="4000" arrow="never" v-show="isShow" ref="lunbo">
          <el-carousel-item v-for="item in imgs">
            <img class="img" :src=item.name alt="">
          </el-carousel-item>
        </el-carousel>
      </transition>
      </div>
      <div class="tiao" v-show="isShow">
        <img src="../../../static/images/tiao2.png" alt="">
      </div>
    <!--路由-->
      <div class="s-router" :class="{'s-gengs':isTop}">
        <!--关闭轮播按钮-->
        <p class="s-close" @click="showDetail" v-text="btnClose"></p>
        <div class="tab">
          <div class="tab-item bg-left">
            <router-link to="/all">全部</router-link>
          </div>
          <div class="tab-item bg-right">
            <router-link to="/sale">特价</router-link>
          </div>
          <div class="tab-item paih">
            大神榜
          </div>
        </div>
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </div>
  </div>
    <sign></sign>
  </div>
</template>

<script>
  import header from '../../components/header/header.vue'
  //  import swiper from './components/swiper/swiper.vue'
  import sign from '../../components/sign/sign.vue'
//  import all from '../../components/all/all.vue'

  export default {
    data () {
      return {
        imgs: [
          {name: '../../../static/images/89356511572109873.png'},
          {name: '../../../static/images/482659599503776800.png'},
          {name: '../../../static/images/539591306034657542.png'},
          {name: '../../../static/images/89356511572109873.png'},
          {name: '../../../static/images/482659599503776800.png'}
        ],
        btnClose: 'close', // 轮播关闭按钮
        isShow: true, // 轮播关闭参数
        isTop: false,
        tabPosition: 'top',
      }
    },
    created(){
      this.toggleTab
    },
    methods: {
      showDetail () { // 轮播
        this.isShow = !this.isShow
        if (this.isShow) {
          this.btnClose = 'close'
          this.isTop = false
        } else {
          this.btnClose = 'show'
          this.isTop = true
        }
      },
//      toggleTab(tab,items) {
//        this.currentTab = tab; // tab 为当前触发标签页的组件名
//        this.activeName=items
//      },
    },
    components: {
      'ele-header': header,
//      swiper,
      sign,
//      all
      //  special
    }
  }
</script>

<style lang="sass" rel="stylesheet/sass" scoped>
  .s-main
    background: #fff
    /*轮播*/
    .s-swiper
      overflow: hidden
      padding: 10px 8px 15px 8px
      .mybox-leave-active,.mybox-enter-active
        transition:  all 0.3s ease
      .mybox-leave-active,.mybox-enter
        height: 0 !important
      .mybox-leave,.mybox-enter-active
        height: 150px
      .el-carousel
        .el-carousel__item
          h3
            color: #475669
            font-size: 18px
            opacity: 0.75
            line-height: 150px
            margin: 0
            height: 150px
          .img
            width: 100%
            height: 100%
    .tiao
      img
        width: 100%
    @media screen and (min-width: 375px) and (max-width: 425px)
      .tiao
        margin-top: -4px
    /*路由*/
    .s-router
      position: absolute
      top: 232px
      bottom: 0
      left: 0
      width: 100%
      overflow: hidden
      background: #f5f5f5
      transition: All 0.4s ease-in-out
      -webkit-transition: All 0.4s ease-in-out
      -moz-transition: All 0.4s ease-in-out
      -o-transition: All 0.4s ease-in-out
      .s-close
        position: absolute
        right: 5px
      .tab
        padding-top: 10px
        display: flex
        background: #F5F5F5
        .tab-item
          height: 40px
          line-height: 40px
          flex: 1
          font-size: 14px
          color: rgb(77,85,93)
          text-align: center
          a
            display: inline-block
            width: 100%
            border-radius: 25px
            background: #fff
          .active
            background: #7DD5C9
            color: #fff
        .bg-right
          background: #fff
          border-top-right-radius: 25px
          border-bottom-right-radius: 25px
        .bg-left
          background: #fff
          border-top-left-radius: 25px
          border-bottom-left-radius: 25px
        .paih
          color: #FF509F
    .s-gengs
      position: absolute
      top: 60px
      bottom: 0
      overflow: hidden
    /*签到弹出层*/
    .s-sign-wrapper
      position: fixed
      top: 0
      left: 0
      right: 0
      bottom: 0
      background: rgba(7,17,27,0.8)
      z-index: 100
      &.fade-enter-active, &.fade-leave-active
        transition: opacity .3s linear
      &.fade-enter,&.fade-leave-to
        opacity: 0
      .s-bigWrapper
        position: relative
        .s-sign-box
          width: 80%
          padding: 20px
          overflow: hidden
          margin: 150px auto 0 auto
          background: #fff
          border-radius: 25px
          .s-sign-list
            float: left
            margin-bottom: 10px
            text-align: center
            width: 20%
            .s-sign
              width: 50px
              height: 50px
              border-radius: 50%
              background: #ddd
              margin: 0 auto
              img
                width: 100%
                height: 100%
                border-radius: 50%
            .s-moneyP
              font-size: 10px
              height: 25px
              margin-top: 10px
          /*iphone5下li宽度*/
          @media screen  and (max-width: 320px)
            .s-sign-list
              width: 25%
        .s-sign-close
          width: 30px
          height: 30px
          text-align: center
          border-radius: 50%
          border: none
          background: #000
          color: #fff
          font-size: 14px
          position: absolute
          top: -15px
          right: 10px

    /*签到按钮*/
    .s-btn-box
      position: fixed
      bottom: 30px
      right: 30px
      z-index: 2
      .s-sign-btn
        width: 40px
        height: 40px
        text-align: center
        border-radius: 50%
        border: none
        background: rgba(0,0,0,0.5)
        color: #fff
        font-size: 10px
        z-index: 2
  /*排行榜*/
  /*.s-special-offer*/
    /*.s-special-wrapper*/
      /*position: fixed*/
      /*top: 0*/
      /*left: 0*/
      /*right: 0*/
      /*bottom: 0*/
      /*background: #fff*/
      /*z-index: 100*/
      /*&.fade-enter-active, &.fade-leave-active*/
        /*transition: opacity .3s linear*/
      /*&.fade-enter,&.fade-leave-to*/
        /*opacity: 0*/
      /*.s-sp-box*/
        /*.s-infinit-list*/


</style>
