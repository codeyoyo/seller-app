<template>
  <div v-if="seller" class="header">
    <div class="wapper">
      <div class="avatar">
        <img width="100%" height="100%" v-bind:src="seller.avatar">
      </div>
      <div class="content">
        <div class="title">
          <span class="ion-brand"></span>
          <span style="margin-left: 6px" v-text="seller.name"></span>
        </div>
        <div class="description">
          {{seller.description}}/{{seller.deliveryTime}}分钟送达
        </div>
        <div v-if="seller.supports" class="support">
          <span class="supportIcon" v-bind:class="classMap[seller.supports[0].type]"></span>
          <span style="margin-left: 4px" v-text="seller.supports[0].description"></span>
        </div>
      </div>
      <div v-if="seller.supports" class="seller-count">
        <span v-text="seller.supports.length+'个'"></span>
        <span class="icon-keyboard_arrow_right"></span>
      </div>
    </div>
    <div class="bulletin-wrapper" v-on:click="detailShow(true);">
      <span class="bulletin-title"></span>
      <span class="bulletin-text" v-text="seller.bulletin"></span>
      <span class="icon-keyboard_arrow_right"></span>
    </div>
    <div class="backgrounp">
      <img width="100%" height="100%" v-bind:src="seller.avatar">
    </div>
    <div v-show="showDetail" class="detail">
      <div class="detail-main">
        <div class="title" v-text="seller.name">
        </div>
        <div class="level">
          <star :score='seller.score' />
        </div>
        <div class="detail-mgs-box" v-if="seller.supports">
          <div class="title-box">
            <div class="link"></div>
            <div class="title-word">
              优惠信息
            </div>
            <div class="link"></div>
          </div>
          <div class="support-list">
            <div class="support-item" v-for="item in seller.supports">
              <i v-bind:class="classMap[item.type]"></i>
              <span v-text="item.description"></span>
            </div>
          </div>
        </div>
        <div class="detail-bulletin">
          <div class="title-box">
            <div class="link"></div>
            <div class="title-word">
              商家公告
            </div>
            <div class="link"></div>
          </div>
          <div class="bulletin-text" v-text="seller.bulletin">
          </div>
        </div>
      </div>
      <div class="detail-close">
        <i v-on:click="detailShow(false);" class="icon-close"></i>
      </div>
    </div>
  </div>
</template>

<script>
  import star from '../star/star';
  export default{
    props: {
      seller: {}
    },
    data() {
      return {
        classMap: ['decrease', 'discount', 'special', 'invoice', 'guarantee'],
        showDetail: false
      };
    },
    components:{
      star
    },
    methods: {
      detailShow(boolen) {
        this.showDetail = boolen;
      }
    }
  };
</script>

<style>
  .header {
    position: relative;
    background-color: rgba(7, 17, 27, 0.5);
    width: 100%;
    overflow: hidden;
  }

  .backgrounp {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    z-index: -1;
    filter: blur(10px);
    -webkit-filter: blur(10px);
  }

  .wapper {
    height: 100%;
    width: 100%;
    padding: 24px 12px 16px 24px;
    position: relative;
  }

  .seller-count {
    position: absolute;
    height: 15px;
    background-color: rgba(0, 0, 0, 0.2);
    border-radius: 15px;
    right: 50px;
    bottom: 10px;
    color: rgb(255, 255, 255);
    padding: 7px 8px;
    line-height: 15px;
    font-size: 10px;
    font-weight: 200;
  }

  .wapper .avatar, .content {
    display: inline-block;
  }

  .avatar {
    width: 64px;
    height: 64px;
    border-radius: 4px;
    vertical-align: top;
  }

  .content {
    vertical-align: top;
    margin-left: 16px;
  }

  .title {
    color: #ffffff;
    font-size: 16px;
  }

  .description {
    color: #ffffff;
    margin-top: 8px;
    font-size: 12px;
  }

  .support {
    color: #ffffff;
    margin-top: 10px;
    font-size: 10px;
  }

  .ion-brand {
    display: inline-block;
    width: 30px;
    height: 16px;
    background: url("./brand@2x.png") no-repeat top center;
    background-size: 100% 100%;
    vertical-align: top;
  }

  .supportIcon {
    display: inline-block;
    width: 10px;
    height: 10px;
    background-size: 100% 100%;
    vertical-align: top;
    background-repeat: no-repeat;
    margin-top: -2px;
  }

  .decrease {
    background-image: url("./decrease_1@2x.png");
  }

  .discount {
    background-image: url("./discount_1@2x.png");
  }

  .special {
    background-image: url("./special_1@2x.png");
  }

  .invoice {
    background-image: url("./invoice_1@2x.png");
  }

  .guarantee {
    background: url("./guarantee_3@2x.png") no-repeat;
  }

  .bulletin-wrapper {
    height: 28px;
    background-color: rgba(7, 17, 27, 0.2);
    line-height: 28px;
    padding: 0 22px 0 12px;
    text-overflow: ellipsis;
    white-space: nowrap;
    overflow: hidden;
    font-size: 10px;
    color: rgb(255, 255, 255);
    font-weight: 200;
    position: relative;
  }

  .bulletin-wrapper .bulletin-title {
    display: inline-block;
    width: 22px;
    height: 12px;
    background: url("./bulletin@2x.png") no-repeat;
    background-size: 100% 100%;
    vertical-align: top;
    margin-top: 7px;
  }

  .bulletin-wrapper .bulletin-text {
    margin: 0 4px;
    vertical-align: top;
  }

  .bulletin-wrapper .icon-keyboard_arrow_right {
    position: absolute;
    display: inline-block;
    width: 20px;
    height: 20px;
    color: rgb(255, 255, 255);
    font-size: 16px;
    top: 6px;
    right: 8px;
    text-align: center;
  }

  .detail {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 100;
    background-color: rgba(7, 17, 27, 1.0);
    overflow: auto;
    -webkit-backdrop-filter: blur(10px);
  }

  .detail-main {
    color: rgb(255, 255, 255);
    padding: 36px 64px;
  }

  .detail-main .title {
    text-align: center;
    font-size: 16px;
    font-weight: 700;
  }

  .detail-main .level {
    text-align: center;
    margin-top: 16px;
  }
  
  .detail .detail-close {
    position: relative;
    font-size: 32px;
    color: rgba(255, 255, 255, 0.5);
    text-align: center;
    clear: both;
  }

  .detail .detail-mgs-box {
    margin-top: 28px;
  }

  .title-box {
    position: relative;
    height: 20px;
    line-height: 20px;
    display: flex;
  }

  .title-box .link {
    height: 2px;
    background-color: rgba(255, 255, 255, 0.2);
    flex: 1;
  }

  .title-box .title-word {
    flex: 1;
    text-align: center;
    width: 80px;
    margin-top: -8px;
  }

  .support-list {
    line-height: 24px;
  }

  .support-list .support-item {
    font-size: 12px;
    font-weight: 200;
    color: rgb(255, 255, 255);
  }

  .support-list .support-item i {
    background-size: 100% 100%;
    width: 16px;
    height: 16px;
    display: inline-block;
    vertical-align: top;
    margin-top: 5px;
  }

  .support-list .support-item span {
    vertical-align: top;
    display: inline-block;
    margin-left: 6px;
  }

  .detail-bulletin {
    margin-top: 28px;
  }

  .detail-bulletin .bulletin-text {
    font-size: 12px;
    font-weight: 200;
    line-height: 24px;
  }
</style>
