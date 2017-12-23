<template>
  <div class="all-geng" ref="all">
     <ul class="s-list">
       <li class="s-l-box" v-for="(item, index) in list.roomItem">
         <a :href="'detail.html?rid='+item.roomId">
           <div class="s-imgBox">
             <div class="img-boxs">
               <img src="../../../static/images/game_13.png" alt="">
               <div class="s-text">
                 <span class="s-m-img">￥</span>
                 <span class="s-num">{{item.toll}}/次</span>
               </div>
             </div>
             <p class="s-headline">{{item.name}}</p>
             <p class="s-game" ><i></i>{{map.boolean[item.status]}}</p>
           </div>
         </a>
       </li>
     </ul>
  </div>
</template>

<script>
  import axios from 'axios'
  import BScroll from 'better-scroll'
  const OK = 0
  export default {
    data () {
      return {
        registerUrl:'/api/index/Room/index',
        list:[]
      }
    },
    created () {
      let me=this;
      this.map={boolean: {0: '初始化', 1: '维护中', 2: '空闲中',3: '游戏中'}}
      setTimeout(() => {
        axios.post(this.registerUrl,{
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
          .catch(function (error) { //错误信息
            console.log(error);
          });
      }, 1000);
      this.$nextTick(() => { //悠闲的活久见
        this._initScroll()
      })
    },
    methods: {
      _initScroll () {
        new BScroll(this.$refs.all, {
          click: true
        })

      }
    }
  }
</script>

<style lang="sass" rel="stylesheet/sass" scoped>
  .all-geng
    position: absolute
    top: 60px
    bottom: 0
    width: 100%
    overflow: hidden
    .s-list
      overflow: hidden
      padding: 0 8px
      .s-l-box
        float: left
        margin-bottom: 10px
        width: 50%
        a
          display: block
          .s-imgBox
            width: 95%
            margin: 0 auto
            background: #fff
            .img-boxs
              height: 3.5rem
              position: relative
              img
                width: 100%
                height: 100%
              .s-text
                width: 40%
                height: 20px
                line-height: 18px
                z-index: 1
                font-size: 10px
                border: 1px solid #000
                border-radius: 25px
                position: absolute
                bottom: 5px
                left: 5px
                background: #F8C255
                color: #974408
              .s-num
                margin-right: 5px
                vertical-align: middle
            .s-headline
              height: 25px
              line-height: 25px
              font-size: 14px
              padding: 0 5px
            .s-game
              display: inline-block
              padding: 4px 5px
              border-radius: 25px
              color: #FF56A2
              font-size: 12px
              i
                display: inline-block
                width: 8px
                height: 8px
                border-radius: 50%
                background: #FF56A2
                margin-right: 5px



</style>
