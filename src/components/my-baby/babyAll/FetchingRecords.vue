<template>
  <transition name="fade">
    <div class="index" ref="FetchingRecords">
      <div class="header">
        <span class="mint-button-icon">
          <a @click="$router.go(-1)" href="javascript:;">
            <i class="el-icon-arrow-left"></i>
          </a>
        </span>
        <span id="wawa">抓取记录</span>
      </div>
      <!--记录列表-->
      <ul class="rec_list">
        <li v-for="item in list.catchItem">
          <img :src="item.cover" alt="">
          <div class="wawa_xinxi">
            <p>{{item.name}}</p>
            <p>{{item.createAt | date-string}}</p>
          </div>
          <div class="success">
            <p>{{map.boolean[item.status]}}</p>
            <a href="">></a>
          </div>
        </li>
      </ul>
    </div>
  </transition>
</template>

<script>
    import axios from 'axios'
    import BScroll from 'better-scroll'
    const OK = 0
    export default {
      data(){
        return {
          list:[]
        }
      },
      created () {
        let me=this;
        this.map={boolean: {0: '抓取中', 1: '失败', 2: '成功'}}
        setTimeout(() => {
          axios.get('/api/index/catchRecords/index')
            .then(function (res) {
              let result = res.data
              if (result.code === OK) {
                me.list=result.data
                console.log(me.list)
              }
            })
            .catch(function (error) { //错误信息
              console.log(error);
            });
        }, 100);
        this.$nextTick(() => {
          this._initScroll()
        })
      },
      methods: {
        _initScroll () {
          new BScroll(this.$refs.FetchingRecords, {
            click: true
          })

        }
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
    background: rgb(255,255,255)
    z-index: 100
    &.fade-enter-active, &.fade-leave-active
      transition: opacity .3s linear
    &.fade-enter,&.fade-leave-to
      opacity: 0
    .header
      position: relative
      background: #f2f2f2
      .mint-button-icon
        .el-icon-arrow-left
          font-size: 40px
      #wawa
        position: absolute
        top: 50%
        transform: translate(0,-50%)
    .rec_list
      li
        display: -webkit-flex
        box-sizing: content-box
        margin-top: 14px
        img
          display: inline-block
          flex: 1
          border: 1px solid red
        .wawa_xinxi
          flex: 2
          font-size: 12px
          margin-left: 5px
        .success
          flex: 1
          font-size: 12px
          line-height: 48px
          p
            text-align: center
            color: #cccccc
            float: left
          a
            width: 100%
            text-align: center

</style>
