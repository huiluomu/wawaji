<template>
  <div>
    <transition name="fade">
      <div class="persion" ref="per">
        <div>
          <div class="Account-header">
            <div class="avart-box">
              <div class="avatar"></div>
              <div class="name-wrappar">
                <h4 class="name">张学友</h4>
                <div class="id_num">ID：<span>2578963170</span></div>
              </div>
            </div>
            <div class="close_Account">
              <a href="javascript:history.back(-1)">
                <i class="el-icon-arrow-left"></i>
              </a>
            </div>
            <div class="tiao-border">
              <img src="../../../static/images/v.png" alt="">
            </div>
          </div>
          <ul class="account-list-wrappar">
            <li class="list">
              <router-link to="/persion/myBaby">
                <div class="list-left">
                  <span class="icion"></span>
                  <span class="text-left">我的娃娃</span>
                </div>
                <div class="list-right" v-if="list.objectItem">
                  <span class="text-right">{{list.objectItem.length}}个娃娃</span>
                  <span class=" arrows el-icon-arrow-right"></span>
                </div>
              </router-link>
            </li>
            <li class="list">
              <router-link to="/persion/myMoney">
                <div class="list-left">
                  <span class="icion"></span>
                  <span class="text-left">我的游戏币</span>
                </div>
                <div class="list-right">
                  <span class="text-right">{{user.balance}}个</span>
                  <span class="arrows el-icon-arrow-right"></span>
                </div>
              </router-link>
            </li>
            <li class="list">
              <router-link to="/persion/messageCenter">
                <div class="list-left">
                  <span class="icion"></span>
                  <span class="text-left">邀请有奖</span>
                </div>
                <div class="list-right">
                  <span class="arrows el-icon-arrow-right"></span>
                </div>
              </router-link>
            </li>
            <li class="list">
             <router-link to="/persion/messageCenter">
               <div class="list-left">
                 <span class="icion"></span>
                 <span class="text-left">通知</span>
               </div>
               <div class="list-right">
                 <span class="text-right">{{user.notices}}</span>
                 <span class="arrows el-icon-arrow-right"></span>
               </div>
             </router-link>
            </li>
          </ul>
          <!--退出登录  -->
          <div class="drop-out">
            <button>退出登录</button>
            <router-link to="/persion/setting">
              <span class="setting">
                <img src="../../../static/images/one.png" alt="">
              </span>
            </router-link>
          </div>
        </div>
        <keep-alive>
          <router-view :list="list" :money="money" :user="user"></router-view>
        </keep-alive>
      </div>
    </transition>
  </div>
</template>

<script>
  import axios from 'axios'
  import BScroll from 'better-scroll'
  const OK = 0
  export default {
    data(){
      return {
        user:{},
        money:{},
        list:{}
      }
    },
    created () {
      let me=this;
     setTimeout(()=>{
       // 商品列表
       axios.post('/api/index/object/index',{
         headers: {
           'Content-Type': 'application/x-www-form-urlencoded'
         }
       })
         .then(function (res) {
           let result = res.data
           if (result.code === OK) {
             me.list=result.data
             console.log(me.list)
           }
         })

       // 用户信息
       axios.post('/api/index/user/index',{
         headers: {
           'Content-Type': 'application/x-www-form-urlencoded'
         }
       })
         .then(function (res) {
           let result = res.data
           if (result.code === OK) {
             me.user=result.data
             console.log(me.user)
           }
         })
         .catch(function (error) { //错误信息
           console.log(error);
         });
       // 游戏币
       axios.get('/api/index/recharge/rules')
         .then(function (res) {
           let result = res.data
           if (result.code === OK) {
             me.money=result.data
             console.log(me.money)
           }
         })
         .catch(function (error) { //错误信息
           console.log(error);
         });
     },1000)
      this.$nextTick(() => {
        this._initScroll()
      })
    },
    methods: {
      _initScroll () {
        new BScroll(this.$refs.per, {
          click: true
        })
      }
    }
  }
</script>

<style lang="sass" rel="stylesheet/sass" scoped>
    .persion
      position: fixed
      top: 0
      left: 0
      width: 100%
      max-width: 415px
      bottom: 0
      overflow: hidden
      background: rgb(255,255,255)
      z-index: 100
      &.fade-enter-active, &.fade-leave-active
        transition: opacity .3s linear
      &.fade-enter,&.fade-leave-to
        opacity: 0
      .Account-header
        padding-top: 10px
        position: relative
        height: 190px
        background: #7DD5C9
        .avart-box
          padding-top: 50px
          .avatar
            width: 60px
            height: 60px
            border-radius: 50%
            background: #000
            margin: 0 auto

          .name-wrappar
            margin-top: 10px
            text-align: center
            color: #fff
            .id_num
              font-size: 10px
              margin-top: 5px
        .close_Account
          position: absolute
          top: 20px
          left: 10px
          font-size: 24px
          width: 30px
          height: 30px
          text-align: center
          a
            .el-icon-arrow-left
              color: #ffffff

        .tiao-border
          margin-top: 18px
          img
            width: 100%
      .account-list-wrappar
        margin-top: 15px
        padding: 0 20px

        .list
          height: 40px
          line-height: 40px
          a
            width: 100%
            display: flex
          .list-left
            flex: 0 0 30%
            -webkit-flex: 0 0 30%

            .icion
              width: 25px
              height: 24px
              background: #F2F2F2
              vertical-align: middle

            .text-left
              vertical-align: middle
              margin-left: 5px

          .list-right
            flex: 1
            -webkit-flex: 1
            text-align: right

            .text-right
              margin-right: 5px
              color: #ccc

            .arrows
              color: #333

      /*退出登录*/
      .drop-out
        height: 40px
        line-height: 40px
        position: relative
        text-align: center
        margin-top: 50px
        button
          width: 50%
          height: 40px
          line-height: 40px
          border-radius: 25px
          background: #FF4E9E
          border: none
          color: #fff
        a
          display: block
          width: 25px
          height: 25px
          position: absolute
          right: 20px
          top: 10px
          .setting
            display: inline-block
            width: 25px
            height: 25px
            img
              width: 100%
              position: absolute
              left: 0

</style>
