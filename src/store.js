import data from "../data.json";

//状态管理
export default (Vuex) => {
    return new Vuex.Store({
        state: {
            totalMoney: 0, //已选购商品总价格
            productArray: [], //已选购商品数组
            data,
            food: {},
            shopCarShow: false
        },
        mutations: {
            hoverShopCar(state) {
                let boolen = !state.shopCarShow;
                state.shopCarShow = boolen;
            },
            setTotalMoney(state, num) { //设置商品总价格
                state.totalMoney = num;
            },
            mathTotalMoney(state) { //计算已选购商品总价格
                let total = 0;
                for (let i = 0; i < state.productArray.length; i++) {
                    let item = state.productArray[i];
                    total += (item.count * item.price);
                }
                state.totalMoney = total;
            },
            setProductArray(state, obj) { //商品放入或拿出购物车
                let index = -1;
                for (let i = 0; i < state.productArray.length; i++) {
                    var item = state.productArray[i];
                    if (obj.id == item.id) {
                        index = i;
                        break;
                    }
                }
                if (index >= 0) {
                    if (obj.count <= 0) {
                        state.productArray.splice(index, 1);
                    } else {
                        state.productArray[index] = obj;
                    }
                } else {
                    state.productArray.push(obj);
                }
            },
            clearProduct(state) { //清空购物车
                state.productArray = [];
            },
            selectedFood(state, f) {
                state.food = f;
            }
        },
        getters: {
            getshopCarShow(state) {
                return state.shopCarShow;
            },
            getSelectedFood(state) {
                return state.food;
            },
            getTotalMoney(state) { //获取商品总价格
                return state.totalMoney;
            },
            getProductArray(state) { //获取已选购商品
                return state.productArray;
            },
            getProductById: (state, getters) => (id) => { //根据ID获取已选商品
                for (let i = 0; i < state.productArray.length; i++) {
                    var item = state.productArray[i];
                    if (item.id == id) {
                        return item;
                    }
                }
                return false;
            },
            getAllData(state) {
                return state.data;
            },
            getGoodsData(state) {
                if (state.data) {
                    return state.data.goods;
                }
                return {};
            },
            getRatingsData(state) {
                if (state.data) {
                    return state.data.ratings;
                }
                return {};
            },
            getSellerData(state) {
                if (state.data) {
                    return state.data.seller;
                }
                return {};
            }
        }
    });
}