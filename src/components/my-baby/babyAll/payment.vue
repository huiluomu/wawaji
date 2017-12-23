<template>
  <transition name="fade">
    <div class="payment" ref="pay">
      <div class="header">
        <span class="mint-button-icon" @click="hidePanels">
          <i class="el-icon-arrow-left"></i>
        </span>
        <span id="wawa">支付方式</span>
      </div>

      <!-- 支付类型的种类 -->
      <div class="h_payment">
        <ul>
          <li v-for="items in lists" @click="selected(items)" :class="{active: activeName==items}">
            <label style="display:inline-block;width:100%">
              <img src="" alt="" class="after">
              <p>{{items.name}}</p>
              <i>{{items.num}}元</i>
              <input style="visibility: hidden" type="radio" v-model="gander" :value="[items.name,items.num]">
            </label>
          </li>
        </ul>
      </div>

      <!-- 确定按钮 -->
      <div class="btn" @click="seenPrent">确定</div>
    </div>
  </transition>
</template>

<script>
    export default {
      data(){
        return{
          isShow:false,
          lists:[
            {'name':'微信支付','num':'6','img':''},
            {'name':'游戏币支付','num':'3000','img':''}
          ],
          activeName:'',
          gander:''
        }
      },
      methods:{

        selected(items){
          this.activeName=items
        },
        seenPrent(){
          this.$emit('listChild',this.gander)
        },
        hidePanels() {
          this.$emit('clickedHidePanel');
        },
      }
    }
</script>

<style lang="sass" rel="stylesheet/sass" scoped>
  .payment
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
    .header
      height: 47px
      position: relative
      .mint-button-icon
        color: black
        position: relative
        .el-icon-arrow-left
          font-size: 43px
          color: #666666
      #wawa
        position: absolute
        top: 50%
        transform: translate(0,-50%)
    .h_payment
      ul
        li
          box-sizing: content-box
          margin-top: 20px
          padding-left: 34px
          padding-right: 34px
          position: relative
          img
            display: inline-block
            width: 26px
            height: 26px
            background-color: #91e358
            position: absolute
            top: 50%
            // left:50%;
            transform: translate(0,-50%)
          p
            display: inline-block
            line-height: 34px
            margin-left: 30px
          i
            display: inline-block
            float: right
            box-sizing: content-box
            line-height: 34px
            span
              display: inline-block
              width: 14px
              line-height: 14px
              text-align: center
              border: 1px solid red
              border-radius: 45%
              background-color: #ffff00
              margin-right: 6px
        .active
          background: #ddd
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


</style>
