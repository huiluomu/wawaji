<template>
  <transition name="fade">
    <div class="index" v-show="isShow">
     <div>
       <div class="header">
          <span class="mint-button-icon">
            <a @click="show(false)" href="javascript:;">
              <i class="el-icon-arrow-left"></i>
            </a>
          </span>
         <span id="wawa">金币记录</span>
         <div class="tiao-border">
           <img src="../../../static/images/v.png" alt="">
         </div>
       </div>
       <!--记录列表-->
       <div class="currency_record_main" ref="record">
         <ul>
           <li v-for="gold in gold.goldItem">
             <span class="currency_record_main_left">
                 <p>{{map.boolean[gold.type]}}</p>
                 <p>{{gold.updateAt | date-string}}</p>
             </span>
             <span class="currency_record_main_right clearfix">
                 <p>￥</p>
                 <p>{{action.boolean[gold.action]}}{{gold.gold}}</p>
             </span>
           </li>
         </ul>
       </div>
     </div>
    </div>
  </transition>
</template>

<script>
    import BScroll from 'better-scroll'
    export default {
      props:{
        gold:Object
      },
      data(){
        return{
          isShow:false
        }
      },
      created(){
        this.action={boolean:{1:'+',2:'-'}}
        this.map={boolean: {1: '充值', 2: '签到', 3: '获赠',4: '夹娃娃',5: '赠送',6: '运费'}}
        this._initScroll()
        },
      methods:{
        show(isShow) {
          this.isShow = !this.isShow
        },
        _initScroll(){
          this.$nextTick(() => {
            this.scroll = new BScroll(this.$refs.record, {
              click: true
            })
          })
        },
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
    z-index: 100
    &.fade-enter-active, &.fade-leave-active
      transition: opacity .3s linear
    &.fade-enter,&.fade-leave-to
      opacity: 0
    .header
      position: relative
      background: #7DD5C9
      height: 40px
      margin-bottom: 20px
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
    .currency_record_main
      position: absolute
      top: 50px
      left: 0
      width: 100%
      bottom: 0
      overflow: hidden
      ul
        li
          margin-top: 7px
          border: 1px solid red
          padding: 7px 17px
          display: -webkit-flex
          .currency_record_main_left
            flex: 5
            font-size: 12px
            p
              &:first-child
                margin-top: 6px
          .currency_record_main_right
            padding-top: 12px
            font-size: 12px
            flex: 1
            p
              float: left
              &:first-child
                width: 13px
                line-height: 13px
                border: 1px solid #ff9900
                border-radius: 45%
                background-color: #ffff00
                margin-right: 9px
              &:last-child
                color: #4fd587
</style>
