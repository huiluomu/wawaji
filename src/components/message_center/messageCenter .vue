<template>
  <transition name="fade">
    <div class="index" ref="message">
      <div>
        <div class="header">
        <span class="mint-button-icon">
          <a @click="$router.go(-1)" href="javascript:;">
            <i class="el-icon-arrow-left"></i>
          </a>
        </span>
          <span id="wawa">消息中心</span>
        </div>
        <!-- 系统通知与消息 -->
        <div class="message_center_mian">
          <span class="a">系统通知<i>10</i></span>
          <span>消息<i>99</i></span>
        </div>
        <!-- 显示数据 -->
        <div class="content">
          <ul class="clearfix">
            <li v-for="item in message">
              <div class="content_left"></div>
              <div class="content_middle">
                <p class="content_one">{{item.title}}</p>
                <p class="content_two">
                  <i>{{item.content}}</i><br>
                  <i>{{item.createdAt | date-string}}</i>
                </p>
              </div>
              <div class="content_right">
                <img src="../../../static/images/switch.png">
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </transition>
</template>

<script>
  import axios from 'axios'
  import BScroll from 'better-scroll'
  export default {
    data(){
      return{
        message:[]
      }
    },
    created(){
      let me=this;
      axios.get('/api/index/notice/index')
        .then(function (res) {
          let result = res.data
          if (result.code === 0) {
            me.message=result.data
            console.log(me.message)
          }
        })
        .catch(function (error) { //错误信息
          console.log(error);
        });
    },
    methods:{

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
    /*z-index: 50*/
    &.fade-enter-active, &.fade-leave-active
      transition: opacity .3s linear
    &.fade-enter,&.fade-leave-to
      opacity: 0
    .header
      position: relative
      background: #f2f2f2
      .mint-button-icon
        margin-top: 5px
        .el-icon-arrow-left
          font-size: 30px
      #wawa
        position: absolute
        top: 50%
        transform: translate(0,-50%)
    .message_center_mian
      display: -webkit-flex
      span
        flex: 1
        text-align: center
        font-size: 12px
        i
          display: inline-block
          width: 15px
          line-height: 15px
          background-color: red
          border-radius: 45%
          color: #fff
    .content
      box-sizing: content-box
      height: 76px
      border-bottom: 1px solid #ccc
      margin-top: 26px
      ul
        li
          float: left
          width: 100%
          display: -webkit-flex
          height: 76px
          .content_left
            width: 25px
            height: 25px
            background-color: #ccc
            flex: 1
          .content_middle
            flex: 3
            .content_two
              font-size: 12px
          .content_right
            flex: 1
            width: 25px
            height: 25px
            img
              width: 83px
              height: 70px

</style>
