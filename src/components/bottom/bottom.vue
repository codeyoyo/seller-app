<template>
    <div>
        <div class="details-black" v-if="hoverShopDeils()" @click='hoverShopCar()'></div>
        <div v-if="isShowDeils" :class="isShowDeils?'details-box':''">
            <div class="details-title">
                <div class="shop-title">购物车</div>
                <div class="shop-clear" @click='clearShop()'>清空</div>
            </div>
            <div class="details-list">
                <div class="detail-item" v-for="(item,index) in productArray">
                    <div class="product-name">
                        {{item.productName}}
                    </div>
                    <div class="product-price">
                        ￥{{item.price*item.count}}
                    </div>
                    <div class="product-action">
                        <a class="link-change cut" @click="cutFoods(item.id)"></a>
                        <span class="num-span">{{item.count}}</span>
                        <a class="link-change add" @click="addFoods(item.id)"></a>
                    </div>
                </div>
            </div>
        </div>
        <div class="bottom">
            <div class="item-1">
                <div class="shopping-car-box">
                    <span class="car icon-shopping_cart" :class="isShowDeils?'blue-car':'black-car'"@click="hoverShopCar()"></span>
                </div>
            </div>
            <div class="item-2">
                <span class="total-prices" v-text="getTotalMoney()"></span>
                <span class="total-remark">另需配送费￥4元</span>
            </div>
            <div class="item-3">
                <button type="button" class="btn-pay" :class="btnType" v-text="matchSend()"></button>
            </div>
        </div>
    </div>
</template>

<script>
export default{
    data(){
        return{
            isShowDeils:false,
            startMoney:20,
            btnType:'disabled',
            productArray:[]
        }
    },
    methods:{
        hoverShopCar(){
            this.isShowDeils=this.$store.commit('hoverShopCar');
        },
        matchSend(){
            let total=this.$store.getters.getTotalMoney;
            if(total>=this.startMoney){
                this.btnType='ok';
                return '结账';
            }else{
                this.btnType='disabled';
                if(total>0){
                    let balance=this.startMoney-total;
                    return `还差￥${balance}起送`;
                }
                return `￥${this.startMoney}起送`;
            }
        },
        getTotalMoney(){
            return '￥'+this.$store.getters.getTotalMoney;
        },
        hoverShopDeils(){
            this.isShowDeils=this.$store.getters.getshopCarShow;
            return this.isShowDeils;
        },
        addFoods(idx){
            let count=0;
            for(let i=0;i<this.productArray.length;i++){
                let item=this.productArray[i];
                if(item.id==idx){
                    count = item.count++;
                    this.$store.commit('setProductArray',{
                        id:idx,
                        count:item.count,
                        price:item.price,
                        productName:item.productName,
                    });
                    break;
                }
            }
            this.productArray = this.$store.getters.getProductArray;
            this.$store.commit('mathTotalMoney', this.productArray);
        },
        cutFoods(idx){
            let count=0;
            for(let i=0;i<this.productArray.length;i++){
                let item=this.productArray[i];
                if(item.id==idx){
                    count = item.count--;
                    this.$store.commit('setProductArray',{
                        id:idx,
                        count:item.count,
                        price:item.price,
                        productName:item.productName,
                    });
                    break;
                }
            }
            this.productArray = this.$store.getters.getProductArray;
            this.$store.commit('mathTotalMoney', this.productArray);
        },
        clearShop(){
            this.$store.commit('clearProduct');
            this.$store.commit('setTotalMoney',0);
            this.productArray = this.$store.getters.getProductArray;
        }
    },
    created(){
        this.productArray = this.$store.getters.getProductArray;
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
        z-index: 11;
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
    }

    .disabled{
        color: #919396;
        background-color: #2B333B;
    }

    .ok{
        color: #fff;
        background-color: rgb(0,160,220);
    }

    .total-prices{
        color: #fff;
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
        line-height: 38px;
        margin: 0 auto;
        margin-top: 6px;
    }
    .black-car{
        color: #80858A;
        background-color: #2B343C;
    }
    .blue-car{
        background-color: rgb(0,160,220);
        color:rgb(255,255,255);
    }

    .details-black{
        position: absolute;
        top: 0;
        height: 100%;
        width: 100%;
        background-color:rgba(7, 17, 27, .6);
        opacity: 1;
        z-index: 9;
        bottom: 45px;
    }

    @keyframes detailsShow {
        from {
            height: 0px;
        }
        to {
            height: 283px;
        }
    }

    .details-box{
        height: 283px;
        width: 100%;
        position: absolute;
        bottom: 46px;
        z-index: 10;
        background-color: #fff;
        animation: detailsShow .5s;
    }

    .details-title{
        display: flex;
        height: 40px;
        background-color: #f3f5f7;
    }

    .shop-title,.shop-clear{
        flex: 1;
        line-height: 40px;
        font-size: 12px;
    }

    .shop-title{
        text-align: left;
        padding-left: 18px; 
        color: rgb(7,17,27);
    }

    .shop-clear{
        text-align: right;
        padding-right: 18px;
        color: rgb(0,160,220);
    }

    .details-list{
        height: 243px;
        overflow-y: auto;
    }

    .link-change{
        display: inline-block;
        width: 24px;
        height: 24px;
        border: 2px solid rgb(0,160,220);
        border-radius: 100%;
        text-align: center;
        position: relative;
    }

    .cut::after{
        content: "-";
        font-size: 24px;
        color: rgb(0,160,220);
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;
    }

    .add{
        background-color: rgb(0,160,220);
    }

    .add::after{
        content: "+";
        font-size: 24px;
        color: #fff;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        margin: auto;
    }

    .num-span{
        display: inline-block;
        width: 24px;
        text-align: center;
        height: 24px;
        line-height: 24px;
        vertical-align: text-bottom;
    }

    .detail-item{
        display: flex;
        height: 48px;
        margin: 12px 18px;
        border-bottom: 1px solid rgba(7,17,27,.1);
    }

    .detail-item .product-name{
        flex: 0.4;
        text-align: left;
    }

    .detail-item .product-price{
        flex: 0.2;
        text-align: center;
        line-height: 48px;
        color: rgb(240,20,20);
    }

    .detail-item .product-action{
        flex: 0.4;
        text-align: right;
        padding-top: 12px;
    }
</style>

