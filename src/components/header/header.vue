<template>
  <div>
    <div class="s-header">
      <div class="s-portrait" >
        <router-link to="/persion">
          <img src="../../../static/images/game_03.png" alt="">
        </router-link>
      </div>
      <div class="logo">拇指娃娃</div>
      <div class="money">
        <div class="s-text">
          <span class="s-m-img">
            <img src="../../../static/images/game_06.png" alt="">
          </span>
          <span class="s-num">1000</span>
          <p class="s-addMoney">+</p>
        </div>
      </div>
    </div>
    <div class="tiao-border">
      <img src="../../../static/images/v.png" alt="">
    </div>
  </div>
</template>

<script>
    import BScroll from 'better-scroll'
    import persion from '../persion/persion.vue'
    export default {
      data () {
        return {
//          panelShow: false
        }
      },
      methods: {
//        showpersion () {
//          this.$refs.per.show(true)
//        },
//        hidePanel(){
//          this.panelShow = false
//        },
//        _initScroll () {
//          this.$nextTick(() => {
//            new BScroll(this.$refs.per, {
//              click: true
//            })
//          })
//        }
      },
      components:{
        persion
      }
    }
</script>

<style lang="sass" rel="stylesheet/sass" scoped>
  .s-header
    /*height: 50px*/
    padding: 15px 8px 15px 8px
    background: #7DD5C9
    display: flex
    .s-portrait,.logo,.money
      flex: 1
      -webkit-flex: 1
    .s-portrait
      a
        display: inline-block
        width: 40px
        height: 40px
        img
          width: 100%
    .logo
      font-size: 18px
      color: #fff
      font-weight: 700
      text-align: center
      padding-top: 10px
    .money
      text-align: right
      padding-top: 5px
      .s-text
        width: 95%
        height: 25px
        line-height: 24px
        z-index: 1
        border-radius: 25px
        position: relative
        background: #F8C255
        .s-num
          position: absolute
          left: 30%
        .s-m-img
          display: inline-block
          width: 24px
          height: 24px
          position: absolute
          left: 0
          img
            width: 100%
        .s-addMoney
          width: 24px
          height: 24px
          z-index: 2
          text-align: center
          font-size: 28px
          color: #686767
          border-radius: 50%
          background: #fff
          position: absolute
          right: 0
          top: 0

  .tiao-border
    margin-top: -8px
    img
      width: 100%
</style>
