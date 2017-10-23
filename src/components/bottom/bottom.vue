<template>
  <div class="bottom">
      <div class="item-1">
        <div class="shopping-car-box">
            <span class="car icon-shopping_cart"></span>
        </div>
      </div>
      <div class="item-2">
          <span class="total-prices" v-text="getTotalMoney()"></span>
          <span class="total-remark">另需配送费￥4元</span>
      </div>
      <div class="item-3">
          <button type="button" class="btn-pay">￥20起送</button>
      </div>
  </div>
</template>

<script>
export default{
    data(){
    },
    methods:{
        getTotalMoney(){
            return '￥'+this.$store.getters.getTotalMoney;
        }
    },
    created () {
    }
}    
</script>

<style>
    .bottom{
        position: fixed;
        bottom: 0px;
        width: 100%;
        left: 0px;
        background-color: #141C27;
        height: 45px;
        display: flex;
    }

    .item-1{
        flex: 0.2;
        position: relative;
        height: 100%
    }

    .item-2{
        flex: 0.5;
        height: 100%;
        line-height:45px;
    }

    .item-3{
        flex: 0.3;
        height: 100%;
    }

    .btn-pay{
        border: none;
        width: 100%;
        height: 100%;
        text-align: center;
        font-weight: 700;
        line-height: 24px;
        font-size: 12px;
        color: #919396;
        background-color: #2B333B;
    }

    .total-prices{
        color: #919396;
        font-size: 16px;
        font-weight: 700;
    }

    .total-remark{
        margin-left: 12px;
        font-size: 16px;
        color: #919396;
    }

    .shopping-car-box{
        display: inline-block;
        height: 44px;
        width: 44px;
        border-radius: 100%;
        position: absolute;
        bottom: 8px;
        left: 18px;
        text-align: center;
        background-color: #141c27;
    }

    .car{
        display: inline-block;
        height: 38px;
        width: 38px;
        border-radius: 100%;
        color: #80858A;
        background-color: #2B343C;
        line-height: 38px;
        margin: 0 auto;
        margin-top: 6px;
    }
</style>

