<template>
  <div class="baby" ref="babyall">
    <ul class="clearfix">
      <li v-for="food in list.objectItem" v-show="food.stock===0" @click="showPanel(food,$event)" >
        <p class="imgBox"><img :src="food.cover" alt=""><i>{{food.stock}}</i></p>
        <p class="text">{{food.name}}</p>
        <p class="time">{{food.updateAt | date-string}}</p>
      </li>
    </ul>
    <a-live :food="selectFood" ref="a" @clickedHidePanel=hidePanel v-show="panelShow" :panelShow="panelShow"></a-live>
  </div>
</template>

<script>
  import a from '../a.vue'
  import BScroll from 'better-scroll'
  export default {
    props:{
      list:Object
    },
    data(){
      return {
//          isShow: false,
        selectFood: {},
        panelShow: false,
      }
    },
    created(){
      this._initScroll()
    },
    methods:{
      clickFood (food, event) {
        // 更新food
        this.selectFood = food
        //显示food组件
        this.$refs.a.show(true)
      },
      _initScroll(){
        this.$nextTick(() => {
          this.scroll = new BScroll(this.$refs.babyall, {
            click: true
          })
        })
      },
      showPanel(food,event) {
        if(!event._constructed) {
          return
        }
        this.selectFood = food
        this.panelShow = true;
      },
      hidePanel () {
        this.panelShow = false;
      }
    },
    components:{
      'a-live':a
    }

  }
</script>

<style lang="sass" rel="stylesheet/sass" scoped>
  .baby
    position: absolute
    top: 4.7rem
    width: 100%
    bottom: 0
    overflow: hidden
    .clearfix
      padding: 0 10px 10px 10px
      li
        float: left
        width: 50%
        position: relative
        margin-bottom: 10px
        .imgBox
          font-size: 12px
          width: 95%
          margin: 0 auto
          &:first-child
            img
              display: inline-block
              width: 100%
              height: 150px
              background-color: #ccc
            i
              position: absolute
              top: 20px
              right: 20px
              display: inline-block
              border: 1px solid black
              border-radius: 45px
              padding: 3px 5px
              z-index: 3
        .text
          line-height: 18px
          font-size: 12px
        .time
          font-size: 12px



</style>

