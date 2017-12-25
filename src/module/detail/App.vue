<template>
  <div>
    <header>
      <div class="s-header">
        <div class="s-portrait">头像</div>
        <div class="logo">logo</div>
        <div class="money">
          <div class="s-text">
            <span class="s-m-img">￥</span>
            <span class="s-num">1000</span>
          </div>
          <p class="s-addMoney">+</p>
        </div>
      </div>
    </header>
    <audio id="audio" src="../../../static/media/click-voice.mp3"></audio>
    <textarea id="log-view"> </textarea>
    <button id="log-btn">日志</button>
    <button class="s-speack">平论</button>
    <div class="view-wrapper front" id="view-wrapper">
      <div class="anchor-wrapper" id="anchor-wrapper">
        <div class="anchor" id="anchor">种花人游戏中</div>
      </div>
      <div class="audience-wrapper clearfix">
        <div class="net-state" id="net-state">在线</div>
        <div id="audience">0</div>人在房间
      </div>
      <div class="switch-btn" id="switch-btn" data-switch="1"></div>
      <canvas id="frontview"></canvas>
      <canvas id="sideview"></canvas>
    </div>

    <div class="appointment-wrapper" id="appointment-wrapper">
      <div class="apply-wrapper" id="apply-wrapper">
        <div class="btn cancel" id="cancel">取消预约</div>
        <div class="btn apply" id="apply">预约抓娃娃</div>
      </div>
      <div class="line-up-wrapper">
        <div class="before-queue" id="before-queue">
          <span><em>当前排队：</em><em id="before-queueNum">0</em>人</span>
        </div>
        <div class="after-queue" id="after-queue">
          <span><em>预约成功，你排在第</em><em id="after-queueNum">0</em>位</span>
        </div>
      </div>
    </div>
    <div class="upornot-wrapper" id="upornot-wrapper">
      <div class="mask"></div>
      <div class="icon"></div>
      <div class="upornot-cancel" id="upornot-cancel">放弃</div>
      <div class="upornot-confirm" id="upornot-confirm" @click="getJon">
        开始游戏(<em id="upornot-count-down">10</em>s)
      </div>
    </div>
    <div class="operate-wrapper clearfix" id="operate-wrapper">
      <div class="action-wrapper">
        <div class="count-down-wrapper" id="count-down-wrapper">
          <em id="count-down">30</em>S
        </div>
        <div class="btn go" id="go"></div>
      </div>
      <div class="direct-wrapper front" id="direct-wrapper">
        <div class="top">
          <div class="btn-mask"></div>
          <div class="btn opr-btn" id="front-up" onmousedown="tapEvent(event, 'front-up')" ontouchstart="tapEvent(event, 'front-up')"></div>
          <div class="btn opr-btn side-btn" id="side-up" onmousedown="tapEvent(event, 'side-up')" ontouchstart="tapEvent(event, 'side-up')"></div>
        </div>
        <div class="left">
          <div class="btn-mask"></div>
          <div class="btn opr-btn" id="front-left" onmousedown="tapEvent(event, 'front-left')" ontouchstart="tapEvent(event, 'front-left')"></div>
          <div class="btn opr-btn side-btn" id="side-left" onmousedown="tapEvent(event, 'side-left')" ontouchstart="tapEvent(event, 'side-left')"></div>
        </div>
        <div class="right">
          <div class="btn-mask"></div>
          <div class="btn opr-btn" id="front-right" onmousedown="tapEvent(event, 'front-right')" ontouchstart="tapEvent(event, 'front-right')"></div>
          <div class="btn opr-btn side-btn" id="side-right" onmousedown="tapEvent(event, 'side-right')" ontouchstart="tapEvent(event, 'side-right')"></div>
        </div>
        <div class="bottom">
          <div class="btn-mask"></div>
          <div class="btn opr-btn" id="front-down" onmousedown="tapEvent(event, 'front-down')" ontouchstart="tapEvent(event, 'front-down')"></div>
          <div class="btn opr-btn side-btn" id="side-down" onmousedown="tapEvent(event, 'side-down')" ontouchstart="tapEvent(event, 'side-down')"></div>
        </div>
      </div>
    </div>
    <div class="result-wrapper" id="result-wrapper"><div class="mask"></div>
      <div class="successful"></div>
      <div class="failure"></div>
      <div class="back" id="back">返回娃娃机(<em id="back-count-down">10</em>s)</div>
    </div>
  </div>
</template>

<script>

  export default {
    data(){
      return{
                 
      }
    },
    created(){
      // this.getJon()
    },
    methods:{
      getJon(){
        let xhr = new XMLHttpRequest()
        xhr.onreadystatechange = function(){
          if(xhr.readyState===4){
            if(xhr.status===200){
             alert("相应完成")
            }
          }
        }
      }
    }
  }
</script>

<style>
</style>
