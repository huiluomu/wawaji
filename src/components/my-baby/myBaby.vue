<template>

  <!-- // 每一个 tab 绑定了一个点击事件，传入的参数对应着 tab 下的组件名 -->
  <!-- 头部 -->
  <transition name="fade">
    <div class="index">
     <div>
       <div class="header">
        <span class="mint-button-icon">
          <a @click="$router.go(-1)" href="javascript:;">
            <i class="el-icon-arrow-left"></i>
          </a>
        </span>
         <span id="wawa">抓取娃娃</span>
         <div class="tiao-border">
           <img src="../../../static/images/v.png" alt="">
         </div>
       </div>
       <div class="num">
        <div class="zon-box"  v-if="list.objectItem">
          <p id="wawa_sum">现有娃娃数</p>
          <span>{{list.objectItem.length}}</span>
        </div>
         <p>
           <router-link to="/persion/myBaby/FetchingRecords">
             <i></i>
             抓取记录
           </router-link>
         </p>
       </div>
     </div>
      <div class="tiao">
        <img src="../../../static/images/tiao2.png" alt="">
      </div>
      <div class="tab_box">
        <div class="tab">
          <!--<div class="tab-item bg-left">-->
            <!--<router-link to="/persion/myBaby/babyAll">全部</router-link>-->
          <!--</div>-->
          <!--<div class="tab-item">-->
            <!--<router-link to="/persion/myBaby/distributionS">已配送</router-link>-->
          <!--</div>-->
          <!--<div class="tab-item bg-right">-->
            <!--<router-link to="/persion/myBaby/NoDistribution">未配送</router-link>-->
          <!--</div>-->
          <div class="tab-item bg-left" @click="toggleTab('babyAll')">
            <a>全部</a>
          </div>
          <div class="tab-item" @click="toggleTab('distributionS')">
            <a>已配送</a>
          </div>
          <div class="tab-item bg-right" @click="toggleTab('NoDistribution')">
            <a>未配送</a>
          </div>
        </div>
        <!--娃娃配送列表-->
        <!--<router-view :list="list"></router-view>-->
        <babyAll  :is="currentTab" :list="list" keep-alive></babyAll>
      </div>
    </div>
  </transition>
</template>

<script>
  // 引入子组件
  import axios from 'axios'
  import babyAll from './babyAll/babyAll.vue';
  import distributionS from './babyAll/distributionS.vue';
  import NoDistribution from './babyAll/NoDistribution.vue';
//  import BScroll from 'better-scroll'
  const OK = 0
  export default {
    props:{
      list:Object
    },
    data () {
      return {
        currentTab: 'babyAll',
      };
    },
    created() {
    },
    methods: {
      toggleTab: function(tab) {
        this.currentTab = tab; // tab 为当前触发标签页的组件名

      }
    },
    components:{
      babyAll,
      distributionS,
      NoDistribution
    }
  };
</script>


<style lang="sass" rel="stylesheet/sass" scoped>
  .index
    position: absolute
    top: 0
    left: 0
    width: 100%
    bottom: 0
    overflow: hidden
    background: #f5f5f5
    z-index: 100
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
    .num
      display: flex
      font-size: 20px
      background-color: #fff
      padding: 24px 0
      .zon-box
        flex: 1
        text-align: center
        #wawa_sum
          font-size: 0.35rem
          height: 0.55rem
        span
          font-weight: bold
          font-size: 0.7rem
          color: #7DD5C9
      p
        flex: 1
        a
          display: inline-block
          width: 2.6rem
          height: 0.7rem
          line-height: 0.7rem
          border: 1px solid #FF73B1
          border-radius: 1rem
          font-size: 0.3rem
          color: #FF73B1
          text-align: center
          margin-top: 0.2rem
          padding-left: 0.3rem
          position: relative
          i
            display: inline-block
            width: 0.6rem
            height: 0.8rem
            background: url("../../../static/images/text.png") left center no-repeat
            position: absolute
            left: 0.4rem
            top: -0.05rem
    .tiao
      margin-top: -0.18rem
      img
        width: 100%
    .tab_box
      margin-top: 2px
      .tab
        width: 95%
        margin: 0 auto
        height: 40px
        line-height: 40px
        display: flex
        .tab-item
          flex: 1
          font-size: 14px
          text-align: center
          background: #fff
          a
            display: inline-block
            width: 100%
            border-radius: 25px
            background: #fff
            color: #757474
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

</style>
