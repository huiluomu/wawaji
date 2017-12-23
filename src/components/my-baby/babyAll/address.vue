<template>
  <transition name="fade">
    <div class="appliation" ref="appliation">
      <div class="header">
        <span class="mint-button-icon">
          <a @click="hidePanelss" href="javascript:;">
            <i class="el-icon-arrow-left"></i>
          </a>
        </span>
        <span id="wawa">收货地址</span>
      </div>

      <div>
        <form>
          <input type="text" value="" v-model="name" placeholder="请输入用户名">
          <input type="text" value="" v-model="age" placeholder="请输入年龄">
          <button @click.stop.prevent="submitForm($event)">提交</button>
        </form>
      </div>

    </div>
  </transition>
</template>
<script>
  import axios from 'axios'
  export default {
    props: {
      food: Object,
    },
    data(){
      return{
        name: '',
        age: '',
        file: '',
        list:{}
      }
    },
    methods: {
//      fromChild(data){
//        console.log(data[0])
//        this.$refs.p.innerHTML=data[0];
//        this.$refs.i.innerHTML=data[1];
//        this.panelShow = false;
//      },
      hidePanelss() {
        this.$emit('clickedHidePanels');
      },

      submitForm(event) {
        event=event.preventDefault();
        let formData = new FormData();
        formData.append('name', this.name);
        formData.append('age', this.age);
        let me=this;
        axios.post('/api/index/address/save', formData,{
          headers: {
            'Content-Type': 'application/x-www-form-urlencoded'
          }
        }).then(function (res) {
//          let result = res.data
//          if (result.code === 0) {
//            me.list=result.data
            console.log(res)
//          }
        })
      }
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

</style>
