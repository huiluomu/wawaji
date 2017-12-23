<template>
  <transition name="fade">
    <div class="baby-detail" ref="a">
      <!--轮播-->
     <div class="swipe">
       <el-carousel height="300px" :interval="4000" arrow="never">
         <el-carousel-item>
           <img class="img" :src=item v-for="item in food.imageItem" alt="">
         </el-carousel-item>
       </el-carousel>
       <span class="mint-button-icon" @click="hidePanel">
          <i class="el-icon-arrow-left"></i>
        </span>
     </div>
      <div>
        <p><img src="" alt=""><i>{{food.stock}}</i></p>
        <p>{{food.name}}</p>
        <p>{{food.updateAt | date-string}}</p>
      </div>
      <div class="btn">
        <!--<router-link to="/persion/myBaby/Application">-->
          <button @click="showPanel()"  :disabled="food.stock===0" style="width:100px;height:50px">申请发货</button>
        <!--</router-link>-->
      </div>
      <Application :food="food" @clickedHidePanels=hidePanels v-show="panelShows" :panelShows="panelShows" ref="appliation"></Application>
    <!--<router-view :food="food"></router-view>-->
    </div>
  </transition>
</template>

<script>
    import Application from './babyAll/Application.vue'
    export default {
      props: {
        food: Object,
      },
      data(){
        return {
          panelShows: false,
        }
      },
      methods:{
        hidePanel() {
          this.$emit('clickedHidePanel');
        },
        showPanel() {
          this.panelShows = true;
        },
        hidePanels () {
          this.panelShows = false;
        }
      },
      components:{
        Application
      }
    }
</script>

<style lang="sass" rel="stylesheet/sass" scoped>
  .baby-detail
    position: fixed
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
    .swipe
      width: 100%
      height: 300px
      position: relative
      background: #ddd
      img
        width: 100%
      .mint-button-icon
        position: absolute
        top: 10px
        left: 10px
        color: #fff
        z-index: 3
    .btn
      text-align: center
      margin-top: 80px
      button
        width: 150px
        height: 40px
        font-size: 16px
        border: none
        border-radius: 25px
        background: #FFFF00
</style>
