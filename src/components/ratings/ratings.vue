<template>
  <div class="ratings" id='ratings'>
    <div class="grade-box">
      <div class="grade-left">
        <p class="grade-num" v-text="seller.score"></p>
        <p class="grade-item grade-font">综合评分</p>
        <p class="grade-item grade-gray">高于周边商家{{seller.rankRate}}%</p>
      </div>
      <div class="grade-right">
        <div class="grade-star">
          <span class="grade-font">服务态度</span>
          <star :score='seller.serviceScore' />
          <span class="star-num" v-text="seller.serviceScore"></span>
        </div>
        <div class="grade-item grade-star">
          <span class="grade-font">食物评分</span>
          <star :score='seller.foodScore' />
          <span class="star-num" v-text="seller.foodScore"></span>
        </div>
        <div class="grade-item grade-star">
          <span class="grade-font">送达时间</span>
          <span class="grade-time">{{seller.deliveryTime}}分钟</span>
        </div>
      </div>
    </div>
    <div class="choose-box">
      <div class="choose-btns">
        <button class="choose-btn btn-blue">全部<span v-text="ratingsObj.ratingsAll"></span></button>
        <button class="choose-btn btn-sky">满意<span v-text="ratingsObj.ratingsYes"></span></button>
        <button class="choose-btn btn-glay">不满意<span v-text="ratingsObj.ratingsNo"></span></button>
      </div>
      <div class="choose-descript">
        <span class="icon-cancel">&radic;</span> 只看有内容的评价
      </div>
    </div>
    <div class="comment-list">
      <div class="comment-item" v-for="(item,index) in retings">
        <div class="head-portrait">
          <div class="portrait-pic">
            <div class="pic"></div>
          </div>
          <div class="portrait-descript">
            <p class="nickname" v-text="item.username"></p>
            <div class="portrait-time" v-if="item.deliveryTime!=''">
              <star :score='item.score==""?0:item.score' />
              <span style="margin-left:5px;">{{item.deliveryTime}}分钟送达</span>
            </div>
          </div>
        </div>
        <p class="text" v-text="item.text"></p>
        <div class="recommend" v-if='item.recommend.length>0'>
          <span class="heart">&#10084;</span>
          <span class="recommend-tab" v-for="(recommend,idx) in item.recommend" v-text="recommend"></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import star from "../star/star";
export default {
  data() {
    return {
      retings: [],
      seller: {},
      ratingsObj: {
        ratingsYes: 0,
        ratingsNo: 0,
        ratingsAll: 0
      }
    };
  },
  methods: {},
  components: {
    star
  },
  created() {
    this.retings = this.$store.getters.getRatingsData;
    this.seller = this.$store.getters.getSellerData;
    this.ratingsObj.ratingsAll = this.retings.length;
    for (let i = 0; i < this.retings.length; i++) {
      var item = this.retings[i];
      if (item.rateType == 0) {
        this.ratingsObj.ratingsYes++;
      } else {
        this.ratingsObj.ratingsNo++;
      }
    }
  }
};
</script>

<style>
.ratings {
  margin-top: 1px;
  background-color: #d4d6d9;
  overflow-y: auto;
  top: 170px;
  bottom: 47px;
  position: absolute;
  width: 100%;
}

.grade-box {
  display: flex;
  padding-top: 18px;
  padding-bottom: 18px;
  background-color: #fff;
}

.grade-left {
  flex: 0.4;
  text-align: center;
  border-right: 1px solid #d4d6d9;
}

.grade-right {
  flex: 0.6;
  text-align: left;
  padding-left: 24px;
}

.grade-item {
  margin-top: 8px;
}

.grade-num {
  font-size: 24px;
  color: rgb(255, 153, 0);
}

.grade-font {
  font-size: 12px;
  color: rgb(7, 17, 27);
  vertical-align: initial;
}

.star-num {
  font-size: 12px;
  color: rgb(255, 153, 0);
}

.grade-time {
  font-size: 12px;
  color: #d4d6d9;
}

.grade-gray {
  font-size: 10px;
  color: #d4d6d9;
}

.choose-box {
  background-color: #fff;
  margin-top: 20px;
  padding: 18px;
}

.choose-descript {
  border-top: 1px solid #d4d6d9;
  margin-top: 18px;
  padding-top: 18px;
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

.comment-list {
  margin-top: 1px;
  background: #fff;
  padding: 0 18px 20px 18px;
}

.comment-item {
  padding-bottom: 18px;
  padding-top: 18px;
  border-bottom: 1px solid #b7bbbf;
}

.comment-item .head-portrait {
  display: flex;
}

.comment-item .portrait-pic {
  flex: 0.1;
  text-align: left;
}

.pic {
  background: url(http://static.galileo.xiaojukeji.com/static/tms/default_header.png)
    no-repeat;
  background-size: 100% 100%;
  border-radius: 100%;
  height: 28px;
  width: 28px;
  margin: 0 auto;
}

.portrait-descript {
  flex: 0.9;
  padding-left: 12px;
}

.comment-item .nickname {
  font-size: 10px;
  color: rgb(7, 17, 27);
  text-align: left;
}

.comment-item .portrait-time {
  font-size: 10px;
  color: rgb(147, 153, 159);
  font-weight: 200;
  text-align: left;
}

.comment-list .text {
  margin-left: 40px;
  margin-top: 6px;
  font-size: 15px;
  color: rgb(7, 17, 27);
}

.comment-list .recommend {
  margin-left: 40px;
  margin-top: 8px;
}

.comment-list .recommend .heart {
  font-size: 25px;
  color: rgb(247, 7, 7);
  vertical-align: super;
}

.comment-list .recommend .recommend-tab {
  display: inline-block;
  border: 1px solid rgba(7, 17, 27, 0.1);
  font-size: 9px;
  padding: 6px;
  color: rgb(147, 153, 159);
  width: 65px;
  text-align: center;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
}
</style>
