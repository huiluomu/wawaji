<template>
  <div>
    <transition name="fade">
      <div class="persion" ref="per">
        <div>
          <div class="s-header">
            <div class="s-portrait" >
             
            </div>
            <div class="logo">
              <a @click="$router.go(-1)"  class="back">
                <img  class="back-img" src="../../../static/images/3.png" alt="">
              </a> 
              <span class="good-title">大神榜</span>
            </div>
           
            <div class="money"></div>
          </div>
          <div class="tiao-border">
            <img src="../../../static/images/v.png" alt="">
          </div>
          <div class="ranking">
            <span class="user-ranking">
              排名
            </span>
              <span class="user-wawanum" >
              抓取娃娃数
            </span>
          </div>
          <div class="user-message">
            <ul>
              <li v-for="(item,i) in items.rankingItem" :key="i">
                <p class="user-message-left">
                  <i class="user-message-left-num">{{1+i++}}</i>
                </p>
                <span class="user-message-middle">
                  <!-- <p class="user-img"> -->
                    <img :src=item.headPortrait alt="" class="user-img">
                  <!-- </p> -->
                  <p class="user-name-time clearfix">
                    <span class="user-name">{{item.nickname}}<br><i class="i">2017-12-25 12:37:41</i></span>
                    <!-- <p class="user-time">2017-12-25 12:37:41</p> -->
                  </p>
                </span>
                <i class="user-message-num">{{item.catches}}</i>
              </li>
              <!-- <li></li>
              <li></li> -->
            </ul>
          </div>
         
        </div>
        <keep-alive>
          <router-view></router-view>
        </keep-alive>
      </div>
    </transition>
  </div>
</template>

<script>
  import BScroll from 'better-scroll'
  import axios from 'axios'
  export default {
    data(){
      return {
        isShow: true,
        num:1,
        items:[
            
          

        ],
        billboarUrl:"/api/index/Ranking/ranking"
       
      }
    },
    
    created () {
      this.$nextTick(() => {
        this._initScroll()
      })
      // this.ranking()
      // this.numSort()
      this.a()
    },
    methods: {
      _initScroll () {
        new BScroll(this.$refs.per, {
          click: true
        })
      },
      // ranking(){
      //   // var a=[]
        
      //   axios.get('/api/items/').then((res=>{
          
      //   var result = res.data
      //   // console.log(result)
      //   this.items = result.data
      //      return this.items.sort(function(x,y){
      //              return y['wawanum'].localeCompare(x['wawanum']) ;                 
                   
      //                            })
                           
  
 
    
      //   }))
      
      // },
      a(){
        var m = this
        axios.post(this.billboarUrl,{

          headers:{
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        }).then(function(res){
          
          var result = res.data
           m.items = result.data
          console.log(m.items)
        }).catch(function(error){
          console.log(error)
        })
      },
     register() {
            
              this.$http.post(this.registerUrl,this.newUserInfo,{
                      headers:{
                            // 'Content-Type': 'application/x-www-form-urlencoded'
                            'Content-Type':'application/x-www-form-urlencoded'
                      }
                  }).then(function(res) {
                    console.log(res);
                  }).catch(function (error) {
                    console.log(error+"错了错了错了错了错了错了错了错了错了错了错了错了错了错了");
                  });
 
           
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
  .ranking
    height: 50px
    border-bottom: 1px solid #e9e9e9
    line-height: 50px
    padding: 0px 15px
    font-size: 18px
    color: #727171
    .user-ranking
      float: left
      font-size: 16px
    .user-wawanum
      float: right 
      font-size: 16px
   
  .logo
    height: 45px
    line-height: 45px
    background: #7dd5c9
    position: relative
    // text-align: center
    .back-img
     width: 30px
     height: 30px  
     position: absolute
     top: 50%
     transform: translate(0,-50%)
    .back
     margin-left: 10px  
    .good-title
     display: inline-block
     text-align: center
     position: absolute
     left: 42%
     transfrom:translate(-50%) 
     margin: 0 auto  
     color: #fff
     font-size: 16px
  
  .user-message
    margin-top: 20px
    ul
     li:first-child
       .user-message-left
        .user-message-left-num
         border: 1px solid #ff7ab6
         font-size: 24px
         font-weight: bold
         color: #ff7ab6
        
       .user-message-middle
         position: relative
         .user-img
           border: 4px solid #ff4e9e
           opacity: 0.8
           .user-img-all 
            width: 46px
            height: 46px
       .user-message-num 
        color: #ff77b3
        font-size: 24px 

     li
       margin-top: 10px
       margin-left: 6px
       display: -webkit-flex
       .user-message-left
        .user-message-left-num
         flex: 1
         display: inline-block
         width: 49px
         height: 49px
         line-height: 49px    
         border: 1px solid #ccc
         border-radius: 45%
         text-align: center 

       .user-message-middle
        flex: 3
        padding-left: 14px
        padding-right: 10px
        .user-img
         float: left
         width: 49px
         height: 49px
         line-height: 49px    
         border: 1px solid #ccc
         border-radius: 45%
         text-align: center
        .user-name-time
         display: inline-block       
         .user-name
          margin-left: 6px
          display: inline-block
          width: 120px
          color: #ff6daf
          font-size: 12px
          margin-top: 10%
          .i
           color: #ccc
           font-size: 10px
         
       
         
         
         

         
          
       .user-message-num
        flex: 1
        font-size: 16px
        font-weight: bold
        text-align: center
        line-height: 51px

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
        
        
         
           
 
       
       

    
              

</style>
