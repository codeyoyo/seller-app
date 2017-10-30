<template>
  <div class="seller">
    <div class="seller-message seller-info-style">
      <div class="message">
        <h2>粥品香坊（大运村）</h2>
        <star :score="4" /> 
        <span class="message-span">(661)</span>
        <span class="message-span">月售690单</span>
      </div>
      <div class="mind">
        <div class="mind-icon">♥</div>
        <div class="mind-descript">已收藏</div>
      </div>
    </div>
    <div class="seller-info-style">
      <div class="score-box">
        <div class="score-item">
          <span class="data-title">起送价</span>
          <div class="seller-data">20<span class="small-word">元</span></div>
        </div>
        <div class="score-item score-border">
          <span class="data-title">起送价</span>
          <div class="seller-data">20<span class="small-word">元</span></div>
        </div>
        <div class="score-item">
          <span class="data-title">起送价</span>
          <div class="seller-data">20<span class="small-word">元</span></div>
        </div>
      </div>
     </div>

    <div class="seller-deils seller-info-style">
      <h2>公告与活动</h2>
      <p>粥品香坊其烹饪粥料的秘方源于中国千年古法，在融和现代制作工艺，由世界烹饪大师屈浩先生领衔研发。坚守纯天然、0添加的良心品质深得消费者青睐，发展至今成为粥类的引领品牌。是2008年奥运会和2013年园博会指定餐饮服务商。</p>
      <div class="seller-deils-item">
        <span></span>
        <span>12313132</span>
      </div>
      <div class="seller-deils-item">
        <span></span>
        <span>12313132</span>
      </div>
      <div class="seller-deils-item">
        <span></span>
        <span>12313132</span>
      </div>
    </div>

    <div class="live-action seller-info-style">
      <h2>商家实景</h2>
      <div class="live-imgs">
        <div class="live-action-item">
          <img src="http://fuss10.elemecdn.com/8/71/c5cf5715740998d5040dda6e66abfjpeg.jpeg?imageView2/1/w/180/h/180" />
        </div>
        <div class="live-action-item">
          <img src="http://fuss10.elemecdn.com/8/71/c5cf5715740998d5040dda6e66abfjpeg.jpeg?imageView2/1/w/180/h/180" />
        </div>
        <div class="live-action-item">
          <img src="http://fuss10.elemecdn.com/8/71/c5cf5715740998d5040dda6e66abfjpeg.jpeg?imageView2/1/w/180/h/180" />
        </div>
        <div class="live-action-item">
          <img src="http://fuss10.elemecdn.com/8/71/c5cf5715740998d5040dda6e66abfjpeg.jpeg?imageView2/1/w/180/h/180" />
        </div>
        <div class="live-action-item">
          <img src="http://fuss10.elemecdn.com/8/71/c5cf5715740998d5040dda6e66abfjpeg.jpeg?imageView2/1/w/180/h/180" />
        </div>
      </div>
    </div>

    <div class="seller-info seller-info-style">
      <h2>商家信息</h2>
      <div class="info-item">该商家支持发票,请下单写好发票抬头</div>
      <div class="info-item">该商家支持发票,请下单写好发票抬头</div>
      <div class="info-item">该商家支持发票,请下单写好发票抬头</div>
      <div class="info-item">该商家支持发票,请下单写好发票抬头</div>
      <div class="info-item">该商家支持发票,请下单写好发票抬头</div>
      <div class="info-item">该商家支持发票,请下单写好发票抬头</div>
      <div class="info-item">该商家支持发票,请下单写好发票抬头</div>
      <div class="info-item">该商家支持发票,请下单写好发票抬头</div>
      <div class="info-item">该商家支持发票,请下单写好发票抬头</div>
    </div>

  </div>
</template>

<script>
import star from "../star/star";
export default {
  data() {
    return {};
  },
  methods: {},
  components: {
    star
  },
  created() {}
};
</script>

<style>
.seller{
  background-color: #F3F5F7;
  top: 170px;
  bottom: 47px;
  position: absolute;
  width: 100%;
}

.seller h2{
  font-size: 14px;
  color: rgb(7,17,27);
  margin-bottom: 8px;
  font-weight: 800;
}
.seller-info-style{
  padding: 18px 18px 0 18px;
  background-color: #fff;
}

.message .message-span{
  font-size: 10px;
  color:rgb(77,85,93);
  margin-left: 8px
}

.mind{
  text-align: center;
}

.mind-icon{
  font-size: 24px;
  color: rgb(240,20,20);
}

.mind-descript{
  margin-top: 4px;
  font-size: 10px;
  color: rgb(77,85,93);
}

.seller-message {
  display: flex;
}

.message {
  flex: .9;
}

.mind {
  flex: .1;
}

.score-box {
  flex: 1;
}

.score-box{
  border-top: 1px solid rgba(7,17,27,.1);
  margin: 18px 18px 0 18px;
  padding: 18px 0;
  border-width: 80%;
  display: flex;
}

.score-item{
  flex: .35;
  text-align: center;
}

.data-title{
  font-size: 10px;
  color:rgb(147,153,159);
}

.seller-data{
  font-size: 24px;
  margin-top: 6px;
  font-weight: 200;
}

.small-word{
  font-size: 10px;
}

.score-border{
  border-left: 1px solid rgba(7,17,27,.1);
  border-right: 1px solid rgba(7,17,27,.1);
}

.seller-deils{
  margin-top: 20px;
  padding-bottom: 16px;
}

.seller-deils>p{
  font-size: 12px;
  font-weight: 200;
  color: rgb(240,20,20);
  line-height: 24px;
}

.seller-deils-item{
  margin-top: 16px;
  padding-top: 16px;
  border-top: 1px solid rgba(7,17,27,.1);
  font-size: 12px;
  font-weight: 200;
  color:rgb(7,17,27);
  line-height: 16px;
}

.live-action {
 overflow: hidden; 
 margin-top: 20px;
 padding-bottom: 16px;
}

.live-imgs{
  overflow-y: hidden;
  overflow-x: auto;
  max-height: 200px;
  width: auto;
  white-space:nowrap;
}

.live-action-item:nth-child(1){
  margin-left: 0px;
}

.live-action-item{
  display: inline;
  margin-left: 6px;
  white-space: nowrap;
}

.seller-info{
  margin-top: 20px;
}

.info-item{
  padding:16px 12px;
  border-top: 1px solid rgba(7,17,27,.1) ;
}
</style>
