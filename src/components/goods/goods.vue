<template>
  <div class="goods-main">
    <div class="goods-wapper">
      <ul class="type-box">
        <li class="type-item" v-for="item in goods">
            <a v-text="item.name"></a>
        </li>
      </ul>
    </div>
    <div class="goods-list">
      <div class="goods-item" v-for="goodItem in goods">
        <h3 class="goods-title" v-text="goodItem.name"></h3>
        <ul class="foods-list">
          <li v-for="foodItem in goodItem.foods">
            <div class="food-img">
              <img v-bind:src="foodItem.icon" />
            </div>
            <div class="food-context">
              <p class="food-title" v-text="foodItem.name"></p>
              <p class="food-description" v-text="foodItem.description"></p>
              <div class="food-description">
                <span>月售{{foodItem.sellCount}}</span>
                <span style="margin-left: 8px">好评率{{foodItem.rating}}%</span>
              </div>
              <div class="food-price">
                <span class="price">￥{{foodItem.price}}</span>
                <span class="old-price" v-show="foodItem.oldPrice">￥{{foodItem.oldPrice}}</span>
              </div>
            </div>
            <div class="line-box"></div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        goods: {}
      };
    },
    created() {
      this.$http.get('/api/goods').then(response => {
        var result = response.body;
        console.log(JSON.stringify(result));
        if (result.error === 0) {
          this.goods = result.data;
        }
      });
    }
  };
</script>

<style>
  .goods-main {
    display: flex;
    overflow: hidden;
    top: 170px;
    bottom: 50px;
    position: absolute;
  }

  .goods-main .goods-wapper {
    flex: 0 0 100px;
    height: 100%;
    overflow-y: scroll;
  }

  .type-box{
    list-style: none;
  }

  .type-box .type-item{
    display: block;
    background-color: #f3f5f7;
    padding: 17px 20px;
  }

  .type-box .type-item a{
    font-size: 12px;
    color: rgb(121, 124, 128);
  }

  .goods-main .goods-list{
    overflow-y: scroll ;
    flex: 1;
  }

  .goods-item h3{
    font-size: 18px;
    color: rgb(147,153,159);
    padding: 10px 0px 10px 18px;
    background-color: #f3f5f7;
    margin-bottom: 18px;
  }

  .foods-list{
    list-style: none;
  }

  .foods-list li{
    display: flex;
    margin: 0px 18px 18px 18px;
    border-bottom: 1px solid #7e8c8d;
    padding-bottom: 18px;
  }

  .foods-list li:last-child{
    border: none;
  }


  .food-img {
    flex: 0 0 80px;
  }

  .food-img img{
    width: 80px;
    height: 80px;
  }

  .food-context{
    flex: 1;
    margin-left: 10px;
  }

  .food-title{
    font-size:18px;
    color: rgb(7,17,27);
    margin-bottom: 8px;
  }

  .food-description{
    margin-bottom: 8px;
    font-size: 10px;
    color: rgb(147,153,159);
  }

  .food-price .price{
    font-size: 15px;
    color: rgb(240, 20, 20);
  }

  .food-price .old-price{
    margin-left: 6px;
    font-size: 12px;
    color: rgb(147,153,159);
    text-decoration: line-through;
  }

</style>
