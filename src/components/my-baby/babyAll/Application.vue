<template>
  <transition name="fade">
    <div class="appliation" ref="appliation">
      <div class="header">
        <span class="mint-button-icon">
          <a @click="hidePanels" href="javascript:;">
            <i class="el-icon-arrow-left"></i>
          </a>
        </span>
        <span id="wawa">配送娃娃</span>
      </div>
      <!-- 送货地址 -->
      <div class="h_location">
        <div class="h_location_left">
          <p>收件人：张学友</p>
          <p>联系电话：13800138000</p>
          <p>广东省广州市海珠区赤岗北路福瑞大厦</p>
        </div>
        <a class="h_location_right" @click="showPanels">更换</a>
      </div>
      <!-- 配送清单、 -->
      <div class="inventory ">
        <div class="inventory_one">
          <span>配送清单</span>
          <a href="">选择更多娃娃</a>
        </div>
        <ul >
          <li class="clearfix">
            <img src="" alt="">
            <div class="list-pe">
              <p>{{food.name}}</p>
              <p>{{food.updateAt | date-string}}</p>
            </div>
          </li>
        </ul>
        <!-- 配送费 -->
        <div class="fee">
          <p>配送费</p>
          <span>可选择其他支付方式</span>
          <!-- 默认微信支付 -->
        </div>
        <div class="wx_fee" @click="showPanel">
          <img src="" alt="" class="after">
          <p ref="p">微信支付</p>
          <i ref="i">6元</i>
        </div>
        <div class="overlayer"></div>
      </div>

      <button class="btn">确定发货</button>
      <pays @clickedHidePanel=hidePanel v-show="panelShow" :panelShow="panelShow" ref="pay" @listChild="fromChild"></pays>

      <addre @clickedHidePanels=hidePanelss v-show="panelShows" :panelShows="panelShows" ref="address"></addre>
    </div>
  </transition>
</template>
<script>
//  import pays from './payment.vue'
  import pays from './payment.vue'
  import addre from './address.vue'
    export default {
      props: {
        food: Object,
      },
      data(){
        return{
          panelShow: false,
          panelShows: false,
        }
      },
      methods: {
        fromChild(data){
          console.log(data[0])
          this.$refs.p.innerHTML=data[0];
          this.$refs.i.innerHTML=data[1];
          this.panelShow = false;
        },
        showPanel() {
          this.panelShow = true;
        },
        hidePanel () {
          this.panelShow = false;
        },
        hidePanels() {
          this.$emit('clickedHidePanels');
        },
        showPanels() {
          this.panelShows = true;
        },
        hidePanelss () {
          this.panelShows = false;
        },
      },
      components:{
        pays,
        addre
      }
    }
</script>

<style lang="sass" rel="stylesheet/sass" scoped>
  .appliation
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
    .mint-popup
      border-radius: 30px
      .aaa
        width: 200px
        height: 200px
    .header
      position: relative
      height: 40px
      .mint-button-icon
        color: black
        position: relative
        margin-top: 5px
        .el-icon-arrow-left
          font-size: 30px
          color: #666666
      #wawa
        position: absolute
        top: 50%
        transform: translate(0,-50%)
    .h_location
      box-sizing: content-box
      padding: 15px 20px
      overflow: hidden
      border-top: 1px solid #cccccc
      border-bottom: 1px solid #cccccc
      margin-top: 12px
      position: relative
      display: -webkit-flex
      .h_location_left
        flex: 3
        font-size: 12px
        p
          height: 18px
      .h_location_right
        display: inline-block
        width: 30px
        height: 30px
        line-height: 30px
        text-align: center
        border: 1px solid #cccccc
        border-radius: 45%
        font-size: 12px
        color: black
        position: absolute
        top: 50%
        right: 0px
        transform: translate(-50%,-50%)
    .inventory
      padding: 0 10px
      .inventory_one
        height: 30px
        border-bottom: 1px solid #ddd
        overflow: hidden
        margin-top: 20px
      ul
        li
          width: 100%
          box-sizing: content-box
          margin-top: 20px
          img
            display: inline-block
            width: 40px
            height: 40px
            background-color: #91e358
            float: left
            margin-right: 10px
          .list-pe
            width: 82%
            float: left
            height: 40px
            line-height: 14px
      .fee
        border-bottom: 1px solid red
        overflow: hidden
        height: 20px
        margin-top: 30px
        p
          float: left
          font-size: 14px
        span
          float: right
          font-size: 14px
      .wx_fee
        overflow: hidden
        margin-top: 10px
        position: relative
        img
          display: inline-block
          width: 26px
          height: 26px
          background-color: #91e358
          position: absolute
          top: 50%
          transform: translate(0,-50%)
        p
          display: inline-block
          box-sizing: content-box
          line-height: 34px
          margin-left: 50px
        i
          display: inline-block
          float: right
          margin-right: 5px
          box-sizing: content-box
          line-height: 34px
          font-weight: bold
      .overlayer
        position: fixed
        left: 0
        top: 0
        width: 100%
        height: 100%
        z-index: 10
        display: none
    .btn
      width: 166px
      line-height: 48px
      margin: 0 auto
      text-align: center
      border-radius: 45px
      background-color: #ffff00
      position: absolute
      bottom: 50px
      left: 50%
      transform: translate(-50%,-50%)
      font-weight: bold
      color: black


</style>
