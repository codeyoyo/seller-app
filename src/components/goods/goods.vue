<template>
  <div class="goods-main">
    <div class="goods-wapper">
      <ul class="type-box">
        <li class="type-item" v-for="(item,index) in goodClassList" :class="item.selected?'selected':''" @click="selectedMethod(index)">
            <a v-text="item.name"></a>
        </li>
      </ul>
    </div>
    <div class="goods-list" id='goods' @scroll="goodsScroll();">
      <div class="goods-item" v-for="(goodItem,idx) in goods" :id='"goodItem"+idx'>
        <h3 class="goods-title" v-text="goodItem.name"></h3>
        <ul class="foods-list">
          <li v-for="(foodItem,index) in goodItem.foods">
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
              <div class="change-goods-number">
                <a class="link-change cut" v-show="getFoodNum(idx+'-'+index)>0" @click="cutFoods(idx+'-'+index)"></a>

                <span class="num-span" v-show="getFoodNum(idx+'-'+index)>0" v-text="getFoodNum(idx+'-'+index)"></span>

                <a class="link-change add" @click="addFoods(idx+'-'+index,foodItem)"></a>
              </div>
            </div>
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
        goods: {},
        goodDocumentList:[],
        goodClassList:[],
      };
    },
    methods: {
      selectedMethod(idx){
        this.goodClassList.forEach(item=>{
          item.selected=false;
        });
        this.goodClassList[idx].selected=true;
        let item = document.getElementById('goodItem'+idx);
        let goods = document.getElementById('goods');
        goods.scrollTop=item.offsetTop;
      },
      goodsScroll(){
        this.goodClassList.forEach(item=>{
          item.selected=false;
        });
        let goods = document.getElementById('goods');
        let scrollTop = goods.scrollTop;
        let goodLength=this.goodDocumentList.length;
        let selectedIndex=0;
        for(let i=0;i<goodLength;i++){
          let startItem=this.goodDocumentList[i];
          if(goodLength-1===i && scrollTop>=startItem){
            selectedIndex=i;
            break;
          }else{
            let endItem=this.goodDocumentList[i+1];
            if(startItem<=scrollTop && scrollTop <endItem){
              selectedIndex=i;
              break;
            }
          }
        }
        this.goodClassList[selectedIndex].selected=true;
      },
      getFoodNum(idx){
        let product=this.$store.getters.getProductById(idx);
        if(product){
          return product.count;
        }
        return 0;
      },
      addFoods(idx,item){
        let product=this.$store.getters.getProductById(idx);
        if(product){
            product.count++;
            this.$store.commit('setProductArray',product);
        }else{
          this.$store.commit('setProductArray',{
                id:idx,
                count:1,
                price:item.price,
                productName:item.name,
          });
        }
        this.$store.commit('mathTotalMoney');
      },
      cutFoods(idx){
        let product=this.$store.getters.getProductById(idx);
        if(product){
            product.count--;
            this.$store.commit('setProductArray',product);
            this.$store.commit('mathTotalMoney');
        }
      }
    },
    created() {
      this.goods=this.$store.getters.getGoodsData;
      this.goods.forEach((item) => {
          this.goodClassList.push({
            name:item.name,
            selected:false
          });
      });      
      this.goodClassList[0].selected=true;
    },
    mounted(){
      for(let i=0;i<this.goods.length;i++){
          let item = document.getElementById('goodItem'+i),
              offsetTop=item.offsetTop;
          this.goodDocumentList.push(offsetTop);
      }
      console.log(this.goodDocumentList);
    }
  };
</script>

<style>
  .goods-main {
    display: flex;
    overflow: hidden;
    top: 170px;
    bottom: 47px;
    position: absolute;
  }

  .goods-main .goods-wapper {
    flex: 0 0 100px;
    height: 100%;
    overflow-y: scroll;
    background-color: #f3f5f7;
  }

  .type-box{
    list-style: none;
  }

  .type-box .type-item{
    display: block;
    background-color: #f3f5f7;
    padding: 17px 20px;
  }

  .type-box .selected {
    background-color: #ffffff;
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
    position: relative;
  }

  .food-context .change-goods-number{
    position: absolute;
    right: 5px;
    bottom: -10px;
  }

  .change-goods-number .num-span{
    display: inline-block;
    width: 24px;
    text-align: center;
    height: 24px;
    line-height: 24px;
    vertical-align: text-bottom;
  }

  .change-goods-number .link-change{
    display: inline-block;
    width: 24px;
    height: 24px;
    border: 2px solid rgb(0,160,220);
    border-radius: 100%;
    text-align: center;
    position: relative;
  }

  .change-goods-number .cut::after{
    content: "-";
    font-size: 24px;
    color: rgb(0,160,220);
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
  }

  .change-goods-number .add{
    background-color: rgb(0,160,220);
  }
  .change-goods-number .add::after{
    content: "+";
    font-size: 24px;
    color: #fff;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
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
