<template>
  <transition name="fade">
    <div class="index" ref="money">
     <div>
       <div>
         <div class="header">
          <span class="mint-button-icon">
            <a @click="$router.go(-1)" href="javascript:;">
              <i class="el-icon-arrow-left"></i>
            </a>
          </span>
           <span id="wawa">我的金币</span>
           <div class="tiao-border">
             <img src="../../../static/images/v.png" alt="">
           </div>
         </div>
         <div class="num">
           <div class="zon-box">
             <p id="wawa_sum">我的金币</p>
             <span>{{user.balance}}</span>
           </div>
           <p @click="luShow">
             <a href="javascript:;">
               <i></i>
               金币记录
             </a>
           </p>
         </div>
       </div>
       <div class="tiao">
         <img src="../../../static/images/tiao2.png" alt="">
       </div>
       <div class="wx_payment">
         <div>
           <img src="../../../static/images/login03.png" alt="">
         </div>
         <span>
           微信支付
         </span>
       </div>
       <div class="wx_payment_bottom clearfix">
         <ul>
           <li class="clearfix" v-for="money in money.ruleItem">
            <div class="m_left">
              <div class="img-box">
                <img src="../../../static/images/pay.png" alt="">
              </div>
              <div class="money-box">
                <p class="gold">{{money.gold}}金币</p>
                <p class="back-gold">首次充值返100%金币</p>
              </div>
            </div>
             <span class="m_right">
                <i>￥   {{money.price}}</i>
            </span>
           </li>
         </ul>
       </div>

       <!--游戏币记录-->
       <moneyRec ref="record" :gold="gold"></moneyRec>
     </div>
    </div>
  </transition>
</template>

<script>
    import axios from 'axios'
    import BScroll from 'better-scroll'
    import moneyRec from './moneyRec.vue'
    const OK = 0
    export default {
      props:{
        money:Object,
        user:Object
      },
      data(){
        return{
          gold:{}
        }
      },
      created(){
        let me=this;
        axios.post('/api/index/gold/index',{
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        })
          .then(function (res) {
            let result = res.data
            if (result.code === OK) {
              me.gold=result.data
              console.log(me.gold)
            }
          })
      },
      methods:{
        luShow(){
          this.$refs.record.show(true)
        }
      },
      components:{
        moneyRec
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
    background: #f5f5f5
    /*z-index: 50*/
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
      padding: 30px 0
      .zon-box
        flex: 1
        text-align: center
        #wawa_sum
          font-size: 0.35rem
          height: 0.65rem
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
          margin-top: 0.6rem
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
    .wx_payment
      box-sizing: border-box
      width: 95%
      line-height: 1.5rem
      text-align: center
      border: 0.05rem solid #85CF7E
      margin: 0.3rem auto
      border-radius: 0.2rem
      background: #fff
      position: relative
      padding-left: 1.5rem
      div
        width: 1.2rem
        height: 1.2rem
        position: absolute
        top: 0.25rem
        left: 1.8rem
        img
          width: 100%
      span
        font-size: 0.45rem
        color: #85CF7E

    .wx_payment_bottom
      margin-top: 16px
      ul
        li
          line-height: 1.2rem
          height: 1.2rem
          margin: 0.5rem auto
          background: #ffffff
          width: 95%
          border-radius: 0.5rem
          position: relative
          padding: 0 0.2rem 0 1.4rem
          .m_left
            float: left
            .img-box
              width: 1.2rem
              height: 1.2rem
              position: absolute
              top: 0
              left: 0
              img
                width: 100%
            .money-box
              position: absolute
              left: 1.4rem
              top: 0.3rem
              .gold
                font-size: 0.35rem
                margin-bottom: 0.1rem
                color: #686767
                font-weight: 700
              .back-gold
                font-size: 0.28rem
              p
                height: 0.3rem
                line-height: 0.3rem
          .m_right
            float: right
            display: inline-block
            background: #FF4E9E
            height: 0.7rem
            line-height: 0.7rem
            width: 1.8rem
            text-align: center
            color: #fff
            border-radius: 0.5rem
            margin-top: 0.23rem
            i
              &:last-child
                font-size: 12px
</style>
