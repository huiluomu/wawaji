<template>
  <div>
    <!--签到弹出层-->
    <transition name="fade">
      <div class="s-sign-wrapper" v-show="detailShow">
        <div class="s-bigWrapper">
          <ul class="s-sign-box" >
            <li class="s-sign-list" v-for="(item,$index) in signIma" @click="sign(item,$index)" :class="{'active':item.active,'unactive':!item.active}">
              <div class="s-sign">
                <img :src=item.name alt="">
              </div>
              <p class="s-moneyP" v-show="!item.active">{{item.num}}</p>
              <!-- <p class="s-moneyP"></p> -->
              <P class="s-moneyA" v-show="item.active">{{item.num}}</P>
            </li>
          </ul>
          <input @click="showSign(false)" class="s-sign-close" type="button" value="X">
        </div>
      </div>
    </transition>
    <div class="s-btn-box">
      <button class="s-sign-btn" @click="showSign(true)">签到</button>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import Vue from "vue"
  export default {

    data () {
      return {
        detailShow: false, // 签到弹出参数
        signUrl:"/api/index/user/sign",
        signallUrl:"/api/index/user/signContinuity",
        active: false,
       signIma:[
              {'num': '+10金币',"name":"../../../static/images/1.jpg"},
              {'num': '+10金币',"name":"../../../static/images/2.jpg"},
              {'num': '+10金币',"name":"../../../static/images/3.jpg"},
              {'num': '+10金币',"name":"../../../static/images/4.jpg"},
              {'num': '+10金币',"name":"../../../static/images/5.jpg"},
              {'num': '+10金币',"name":"../../../static/images/6.jpg"},
              {'num': '+10金币',"name":"../../../static/images/7.jpg"}
        ],
        items:{},

        itemNum:{},
        // 自己定义一个数据，没签到一次就产生一个数据发送给后台，给后台记录签到的次数
        num:1


      }
    },
    created(){
      // this.sign()
      this._btnAll()
    },
    methods: {
      showSign (isShow) { // 签到
        this.detailShow = isShow

      },
      sign(item,index){
        var me = this
        axios.get(this.signUrl,{
          headers:{
            'Content-Type':'application/x-www-form-urlencoded'
          }
        }).then(function(res){
          console.log(res)
          var  result = res.data
      me.items = result
      console.log(me.items,123)
      // console.log()
      // console.log(items)
   if(me.items.code===1){
     alert("亲，今天已经签到了噢")
   }else if(me.items.code === 0){
      //  axios({
me.items.gold = res.data.data.gold


      //  })


   }
      console.log(me.items.code)
        }).catch(function (error) { //错误信息
    console.log(error+"错了");
  });
  this.$nextTick(function () {
　　　　　　　　this.signIma.forEach(function (item) {
　　　　　　　　　　Vue.set(item,'active',false);
　　　　　　　　});
　　　　　　　　Vue.set(item,'active',true);
　　　　　　});
      },


// 获取点击的次数
   _btnAll(){
      var d = this
      axios.post(d.signallUrl,{
          headers:{
            'Content-Type':'application/x-www-form-urlencoded'
          }
        }).then(function(res){
          var num = res.data
          console.log(num)
        }).catch(function(error){
           console.log(error+"你是不是傻");
        })
   },
    }
  }
</script>

<style lang="sass" rel="stylesheet/sass" scoped>
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
            .s-moneyA
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
      .s-sign-btn
        width: 40px
        height: 40px
        text-align: center
        border-radius: 50%
        border: none
        background: rgba(0,0,0,0.5)
        color: #fff
        font-size: 10px



</style>
