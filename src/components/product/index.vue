<template>
  <div class="product">
      <div class="product-img">
          <a class="black" @click="isShow();"></a>
          <img :src="food.image" />
      </div>
      <div class="product-price">
          <div class="title" v-text="food.name"></div>
          <div class="seller-data">
              <span>月销{{food.sellCount}}份</span>
              <span>好评率{{food.rating}}%</span>
          </div>
          <div class="shop-message">
              <div class="price">
                  <span class="now-price">￥{{food.price}}</span>
                  <span class="old-price">￥{{food.price}}</span>
              </div>
              <div class="shop">
                  <button class="shop-btn" @click="addShop();">加入到购物车</button>
              </div>
          </div>
      </div>
      <div class="product-message">
          <h2>商品介绍</h2>
          <p>
              {{food.description}}
          </p>
      </div>
      <div class="product-info">
          <h2>商品评价</h2>
          <div class="choose-btns">
            <button class="choose-btn btn-blue">全部<span v-text="ratings.ratingsAll"></span></button>
            <button class="choose-btn btn-sky">满意<span v-text="ratings.ratingsYes"></span></button>
            <button class="choose-btn btn-glay">不满意<span v-text="ratings.ratingsNo"></span></button>
          </div>
          <div class="choose-descript">
            <span class="icon-cancel">&radic;</span> 只看有内容的评价
          </div>
      </div>
      <div class="product-ratings" v-if="food.ratings.length>0">
          <div class="ratings-item" v-for="(item,index) in food.ratings">
              <div class="tip-box">
                  <div class="date-time" v-text="item.rateTime"></div>
                  <div class="head-portrait">
                      <span class="nick" v-text="item.username"></span>
                      <img :src="item.avatar" />
                  </div>
              </div>
              <div class="ratings-content">
                  <span :class="item.rateType==0?'icon-thumb_up':'icon-thumb_down'"></span>{{item.text}}
              </div>
          </div>
      </div>
  </div>
</template>
<script>
export default {
  props: ["food", "isShow", "idx","ratings"],
  data() {
    return {
    };
  },
  methods: {
    addShop() {
      this.$store.commit("setProductArray", {
        id: this.idx,
        count: 1,
        price: this.food.price,
        productName: this.food.name
      });
      this.$store.commit("mathTotalMoney");
      this.$store.commit("hoverShopCar");
    }
  },
  mounted() {},
  created() {}
};
</script>
<style>
.product {
  background-color: #f3f5f7;
  position: fixed;
  top: 0px;
  width: 100%;
  left: 0;
  overflow-y: auto;
  height: 96%;
}
.product h2 {
  font-size: 14px;
  color: rgb(7, 17, 27);
  margin-bottom: 8px;
  font-weight: 800;
}

.product-img {
  margin: -18px;
  position: relative;
}

.black {
  position: absolute;
  display: inline-block;
  text-align: center;
  background-color: #000;
  color: #fff;
  opacity: 0.5;
  border-radius: 100%;
  height: 30px;
  width: 30px;
  top: 30px;
  left: 30px;
  line-height: 30px;
}

.black::after {
  content: "<";
  font-size: 20px;
  position: absolute;
  top: -3px;
  bottom: 0;
  left: 0;
  right: 0;
}

.product-img img {
  width: 100%;
}

[class^="product-"] {
  background-color: #fff;
  padding: 18px;
}

.product-price {
  margin-top: -18px;
}

.product-price .title {
  font-size: 14px;
  font-weight: 700;
  color: rgb(7, 17, 27);
  margin-top: 16px;
}

.product-price .seller-data {
  font-size: 10px;
  color: rgb(147, 153, 159);
}

.product-price .seller-data > span:nth-child(2) {
  margin-left: 12px;
}

.shop-message {
  margin-top: 18px;
  display: flex;
}
.price {
  flex: 0.8;
  text-align: left;
}
.now-price {
  font-size: 14px;
  font-weight: normal/700;
  color: rbg(240, 20, 20);
}
.old-price {
  font-size: 10px;
  font-weight: normal/700;
  color: rgb(147, 153, 159);
  text-decoration: line-through;
}
.shop {
  flex: 0.2;
  text-align: center;
}
.shop-btn {
  border: none;
  font-size: 10px;
  color: rgb(255, 255, 255);
  line-height: 24px;
  min-width: 100px;
  background-color: rgb(0, 160, 220);
  border-radius: 24px;
}

.product-message {
  margin-top: 20px;
}

.product-message p {
  font-size: 12px;
  font-weight: 200;
  color: rgb(77, 85, 93);
  line-height: 14px;
}

.product-info {
  margin-top: 20px;
}

.btn-blue {
  color: #fff;
  background-color: #00a0dc;
}

.btn-sky {
  color: #515a62;
  background-color: #ccecf8;
}

.btn-glay {
  color: #515a62;
  background-color: #e9ebec;
}

.choose-btn {
  border: none;
  height: 36px;
  padding: 5px 15px;
  font-size: 15px;
}

.choose-btn span {
  font-size: 8px;
  margin-left: 5px;
}

.choose-descript {
  color: #b7bbbf;
}

.choose-descript .icon-cancel {
  color: #fff;
  background-color: #b7bbbf;
  display: inline-block;
  width: 30px;
  height: 30px;
  text-align: center;
  line-height: 30px;
  border-radius: 100%;
}

.product-info {
  border-bottom: 1px solid #b7bbbf;
}

.ratings-item {
  border-bottom: 1px solid #b7bbbf;
  padding-top: 16px;
  padding-bottom: 16px;
}

.ratings-item:last-child {
  border: none;
}

.tip-box {
  display: flex;
}

.date-time {
  flex: .8;
  font-size: 10px;
  color: rgb(147, 153, 159);
}

.head-portrait {
  flex: .2;
  text-align: right;
}

.nick {
  margin-right: 6px;
  font-size: 10px;
  color: rgb(147, 153, 159);
}

.head-portrait img {
  width: 12px;
  height: 12px;
  border-radius: 100%;
  display: inline;
}

.ratings-content {
  margin-top: 6px;
  font-size: 12px;
  color: rgb(7, 17, 27);
  line-height: 16px;
}

.ratings-content span {
  font-size: 12px;
  margin-right: 5px;
}

.icon-thumb_up {
  color: rgb(0, 160, 220);
}

.icon-thumb_down {
  color: rgb(147, 153, 159);
}
</style>
