webpackJsonp([0],[
/* 0 */,
/* 1 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(19)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(16),
  /* template */
  __webpack_require__(34),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 2 */,
/* 3 */,
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_router__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_goods_goods__ = __webpack_require__(29);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_goods_goods___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__components_goods_goods__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_ratings_ratings__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_ratings_ratings___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__components_ratings_ratings__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_seller_seller__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_seller_seller___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__components_seller_seller__);






__WEBPACK_IMPORTED_MODULE_0_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]);

/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_1_vue_router__["a" /* default */]({
  routes: [{
    path: '/',
    component: __WEBPACK_IMPORTED_MODULE_2__components_goods_goods___default.a
  }, {
    path: '/goods',
    name: 'goods',
    component: __WEBPACK_IMPORTED_MODULE_2__components_goods_goods___default.a
  }, {
    path: '/ratings',
    name: 'ratings',
    component: __WEBPACK_IMPORTED_MODULE_3__components_ratings_ratings___default.a
  }, {
    path: '/seller',
    name: 'seller',
    component: __WEBPACK_IMPORTED_MODULE_4__components_seller_seller___default.a
  }],
  linkActiveClass: 'active'
}));

/***/ }),
/* 5 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__data_json__ = __webpack_require__(9);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__data_json___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__data_json__);


//状态管理
/* harmony default export */ __webpack_exports__["a"] = (Vuex => {
    return new Vuex.Store({
        state: {
            totalMoney: 0, //已选购商品总价格
            productArray: [], //已选购商品数组
            data: __WEBPACK_IMPORTED_MODULE_0__data_json___default.a
        },
        mutations: {
            setTotalMoney(state, num) {
                //设置商品总价格
                state.totalMoney = num;
            },
            mathTotalMoney(state) {
                //计算已选购商品总价格
                let total = 0;
                for (let i = 0; i < state.productArray.length; i++) {
                    let item = state.productArray[i];
                    total += item.count * item.price;
                }
                state.totalMoney = total;
            },
            setProductArray(state, obj) {
                //商品放入或拿出购物车
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
            clearProduct(state) {
                //清空购物车
                state.productArray = [];
            }
        },
        getters: {
            getTotalMoney(state) {
                //获取商品总价格
                return state.totalMoney;
            },
            getProductArray(state) {
                //获取已选购商品
                return state.productArray;
            },
            getProductById: (state, getters) => id => {
                //根据ID获取已选商品
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
});

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(18)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(10),
  /* template */
  __webpack_require__(33),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 7 */,
/* 8 */,
/* 9 */
/***/ (function(module, exports) {

module.exports = {"seller":{"name":"粥品香坊（回龙观）","description":"蜂鸟专送","deliveryTime":38,"score":4.2,"serviceScore":4.1,"foodScore":4.3,"rankRate":69.2,"minPrice":20,"deliveryPrice":4,"ratingCount":24,"sellCount":90,"bulletin":"粥品香坊其烹饪粥料的秘方源于中国千年古法，在融和现代制作工艺，由世界烹饪大师屈浩先生领衔研发。坚守纯天然、0添加的良心品质深得消费者青睐，发展至今成为粥类的引领品牌。是2008年奥运会和2013年园博会指定餐饮服务商。","supports":[{"type":0,"description":"在线支付满28减5"},{"type":1,"description":"VC无限橙果汁全场8折"},{"type":2,"description":"单人精彩套餐"},{"type":3,"description":"该商家支持发票,请下单写好发票抬头"},{"type":4,"description":"已加入“外卖保”计划,食品安全保障"}],"avatar":"http://static.galileo.xiaojukeji.com/static/tms/seller_avatar_256px.jpg","pics":["http://fuss10.elemecdn.com/8/71/c5cf5715740998d5040dda6e66abfjpeg.jpeg?imageView2/1/w/180/h/180","http://fuss10.elemecdn.com/b/6c/75bd250e5ba69868f3b1178afbda3jpeg.jpeg?imageView2/1/w/180/h/180","http://fuss10.elemecdn.com/f/96/3d608c5811bc2d902fc9ab9a5baa7jpeg.jpeg?imageView2/1/w/180/h/180","http://fuss10.elemecdn.com/6/ad/779f8620ff49f701cd4c58f6448b6jpeg.jpeg?imageView2/1/w/180/h/180"],"infos":["该商家支持发票,请下单写好发票抬头","品类:其他菜系,包子粥店","北京市昌平区回龙观西大街龙观置业大厦底商B座102单元1340","营业时间:10:00-20:30"]},"goods":[{"name":"热销榜","type":-1,"foods":[{"name":"皮蛋瘦肉粥","price":10,"oldPrice":"","description":"咸粥","sellCount":229,"rating":100,"info":"一碗皮蛋瘦肉粥，总是我到粥店时的不二之选。香浓软滑，饱腹暖心，皮蛋的Q弹与瘦肉的滑嫩伴着粥香溢于满口，让人喝这样的一碗粥也觉得心满意足","ratings":[{"username":"3******c","rateTime":1469281964000,"rateType":0,"text":"很喜欢的粥","avatar":"http://static.galileo.xiaojukeji.com/static/tms/default_header.png"},{"username":"2******3","rateTime":1469271264000,"rateType":0,"text":"","avatar":"http://static.galileo.xiaojukeji.com/static/tms/default_header.png"},{"username":"3******b","rateTime":1469261964000,"rateType":1,"text":"","avatar":"http://static.galileo.xiaojukeji.com/static/tms/default_header.png"}],"icon":"http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114","image":"http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/750/h/750"},{"name":"扁豆焖面","price":14,"oldPrice":"","description":"","sellCount":188,"rating":96,"ratings":[{"username":"3******c","rateTime":1469281964000,"rateType":0,"text":"","avatar":"http://static.galileo.xiaojukeji.com/static/tms/default_header.png"},{"username":"2******3","rateTime":1469271264000,"rateType":0,"text":"","avatar":"http://static.galileo.xiaojukeji.com/static/tms/default_header.png"},{"username":"3******b","rateTime":1469261964000,"rateType":1,"text":"","avatar":"http://static.galileo.xiaojukeji.com/static/tms/default_header.png"}],"info":"","icon":"http://fuss10.elemecdn.com/c/6b/29e3d29b0db63d36f7c500bca31d8jpeg.jpeg?imageView2/1/w/114/h/114","image":"http://fuss10.elemecdn.com/c/6b/29e3d29b0db63d36f7c500bca31d8jpeg.jpeg?imageView2/1/w/750/h/750"},{"name":"葱花饼","price":10,"oldPrice":"","description":"","sellCount":124,"rating":85,"info":"","ratings":[{"username":"3******c","rateTime":1469281964000,"rateType":1,"text":"没啥味道","avatar":"http://static.galileo.xiaojukeji.com/static/tms/default_header.png"},{"username":"2******3","rateTime":1469271264000,"rateType":1,"text":"很一般啊","avatar":"http://static.galileo.xiaojukeji.com/static/tms/default_header.png"},{"username":"3******b","rateTime":1469261964000,"rateType":0,"text":"","avatar":"http://static.galileo.xiaojukeji.com/static/tms/default_header.png"}],"icon":"http://fuss10.elemecdn.com/f/28/a51e7b18751bcdf871648a23fd3b4jpeg.jpeg?imageView2/1/w/114/h/114","image":"http://fuss10.elemecdn.com/f/28/a51e7b18751bcdf871648a23fd3b4jpeg.jpeg?imageView2/1/w/750/h/750"},{"name":"牛肉馅饼","price":14,"oldPrice":"","description":"","sellCount":114,"rating":91,"info":"","ratings":[{"username":"3******c","rateTime":1469281964000,"rateType":1,"text":"难吃不推荐","avatar":"http://static.galileo.xiaojukeji.com/static/tms/default_header.png"},{"username":"2******3","rateTime":1469271264000,"rateType":0,"text":"","avatar":"http://static.galileo.xiaojukeji.com/static/tms/default_header.png"},{"username":"3******b","rateTime":1469261964000,"rateType":0,"text":"","avatar":"http://static.galileo.xiaojukeji.com/static/tms/default_header.png"}],"icon":"http://fuss10.elemecdn.com/d/b9/bcab0e8ad97758e65ae5a62b2664ejpeg.jpeg?imageView2/1/w/114/h/114","image":"http://fuss10.elemecdn.com/d/b9/bcab0e8ad97758e65ae5a62b2664ejpeg.jpeg?imageView2/1/w/750/h/750"},{"name":"招牌猪肉白菜锅贴/10个","price":17,"oldPrice":"","description":"","sellCount":101,"rating":78,"info":"","ratings":[{"username":"3******c","rateTime":1469281964000,"rateType":1,"text":"不脆,不好吃","avatar":"http://static.galileo.xiaojukeji.com/static/tms/default_header.png"},{"username":"2******3","rateTime":1469271264000,"rateType":0,"text":"","avatar":"http://static.galileo.xiaojukeji.com/static/tms/default_header.png"},{"username":"3******b","rateTime":1469261964000,"rateType":0,"text":"","avatar":"http://static.galileo.xiaojukeji.com/static/tms/default_header.png"}],"icon":"http://fuss10.elemecdn.com/7/72/9a580c1462ca1e4d3c07e112bc035jpeg.jpeg?imageView2/1/w/114/h/114","image":"http://fuss10.elemecdn.com/7/72/9a580c1462ca1e4d3c07e112bc035jpeg.jpeg?imageView2/1/w/750/h/750"},{"name":"南瓜粥","price":9,"oldPrice":"","description":"甜粥","sellCount":91,"rating":100,"ratings":[{"username":"3******c","rateTime":1469281964000,"rateType":0,"text":"","avatar":"http://static.galileo.xiaojukeji.com/static/tms/default_header.png"},{"username":"2******3","rateTime":1469271264000,"rateType":0,"text":"","avatar":"http://static.galileo.xiaojukeji.com/static/tms/default_header.png"},{"username":"3******b","rateTime":1469261964000,"rateType":0,"text":"","avatar":"http://static.galileo.xiaojukeji.com/static/tms/default_header.png"}],"icon":"http://fuss10.elemecdn.com/8/a6/453f65f16b1391942af11511b7a90jpeg.jpeg?imageView2/1/w/114/h/114","image":"http://fuss10.elemecdn.com/8/a6/453f65f16b1391942af11511b7a90jpeg.jpeg?imageView2/1/w/750/h/750"},{"name":"红豆薏米美肤粥","price":12,"oldPrice":"","description":"甜粥","sellCount":86,"rating":100,"info":"","ratings":[{"username":"3******c","rateTime":1469281964000,"rateType":0,"text":"","avatar":"http://static.galileo.xiaojukeji.com/static/tms/default_header.png"},{"username":"2******3","rateTime":1469271264000,"rateType":0,"text":"","avatar":"http://static.galileo.xiaojukeji.com/static/tms/default_header.png"},{"username":"3******b","rateTime":1469261964000,"rateType":0,"text":"","avatar":"http://static.galileo.xiaojukeji.com/static/tms/default_header.png"}],"icon":"http://fuss10.elemecdn.com/d/22/260bd78ee6ac6051136c5447fe307jpeg.jpeg?imageView2/1/w/114/h/114","image":"http://fuss10.elemecdn.com/d/22/260bd78ee6ac6051136c5447fe307jpeg.jpeg?imageView2/1/w/750/h/750"},{"name":"八宝酱菜","price":4,"oldPrice":"","description":"","sellCount":84,"rating":100,"info":"","ratings":[{"username":"3******c","rateTime":1469281964000,"rateType":0,"text":"","avatar":"http://static.galileo.xiaojukeji.com/static/tms/default_header.png"},{"username":"2******3","rateTime":1469271264000,"rateType":0,"text":"","avatar":"http://static.galileo.xiaojukeji.com/static/tms/default_header.png"},{"username":"3******b","rateTime":1469261964000,"rateType":0,"text":"","avatar":"http://static.galileo.xiaojukeji.com/static/tms/default_header.png"}],"icon":"http://fuss10.elemecdn.com/9/b5/469d8854f9a3a03797933fd01398bjpeg.jpeg?imageView2/1/w/114/h/114","image":"http://fuss10.elemecdn.com/9/b5/469d8854f9a3a03797933fd01398bjpeg.jpeg?imageView2/1/w/750/h/750"},{"name":"红枣山药糙米粥","price":10,"oldPrice":"","description":"","sellCount":81,"rating":91,"info":"","ratings":[{"username":"3******c","rateTime":1469281964000,"rateType":0,"text":"","avatar":"http://static.galileo.xiaojukeji.com/static/tms/default_header.png"},{"username":"2******3","rateTime":1469271264000,"rateType":0,"text":"","avatar":"http://static.galileo.xiaojukeji.com/static/tms/default_header.png"},{"username":"3******b","rateTime":1469261964000,"rateType":0,"text":"","avatar":"http://static.galileo.xiaojukeji.com/static/tms/default_header.png"}],"icon":"http://fuss10.elemecdn.com/9/b5/469d8854f9a3a03797933fd01398bjpeg.jpeg?imageView2/1/w/114/h/114","image":"http://fuss10.elemecdn.com/9/b5/469d8854f9a3a03797933fd01398bjpeg.jpeg?imageView2/1/w/750/h/750"},{"name":"糊塌子","price":10,"oldPrice":"","description":"","sellCount":80,"rating":93,"info":"","ratings":[{"username":"3******c","rateTime":1469281964000,"rateType":0,"text":"","avatar":"http://static.galileo.xiaojukeji.com/static/tms/default_header.png"},{"username":"2******3","rateTime":1469271264000,"rateType":0,"text":"","avatar":"http://static.galileo.xiaojukeji.com/static/tms/default_header.png"},{"username":"3******b","rateTime":1469261964000,"rateType":0,"text":"","avatar":"http://static.galileo.xiaojukeji.com/static/tms/default_header.png"}],"icon":"http://fuss10.elemecdn.com/0/05/097a2a59fd2a2292d08067e16380cjpeg.jpeg?imageView2/1/w/114/h/114","image":"http://fuss10.elemecdn.com/0/05/097a2a59fd2a2292d08067e16380cjpeg.jpeg?imageView2/1/w/750/h/750"}]},{"name":"单人精彩套餐","type":2,"foods":[{"name":"红枣山药粥套餐","price":29,"oldPrice":36,"description":"红枣山药糙米粥,素材包,爽口莴笋丝,四川泡菜或八宝酱菜,配菜可备注","sellCount":17,"rating":100,"info":"","ratings":[{"username":"2******3","rateTime":1469271264000,"rateType":0,"text":"","avatar":"http://static.galileo.xiaojukeji.com/static/tms/default_header.png"}],"icon":"http://fuss10.elemecdn.com/6/72/cb844f0bb60c502c6d5c05e0bddf5jpeg.jpeg?imageView2/1/w/114/h/114","image":"http://fuss10.elemecdn.com/6/72/cb844f0bb60c502c6d5c05e0bddf5jpeg.jpeg?imageView2/1/w/750/h/750"}]},{"name":"冰爽饮品限时特惠","type":1,"foods":[{"name":"VC无限橙果汁","price":8,"oldPrice":10,"description":"","sellCount":15,"rating":100,"info":"","ratings":[{"username":"3******c","rateTime":1469281964000,"rateType":0,"text":"还可以","avatar":"http://static.galileo.xiaojukeji.com/static/tms/default_header.png"},{"username":"2******3","rateTime":1469271264000,"rateType":0,"text":"","avatar":"http://static.galileo.xiaojukeji.com/static/tms/default_header.png"}],"icon":"http://fuss10.elemecdn.com/e/c6/f348e811772016ae24e968238bcbfjpeg.jpeg?imageView2/1/w/114/h/114","image":"http://fuss10.elemecdn.com/e/c6/f348e811772016ae24e968238bcbfjpeg.jpeg?imageView2/1/w/750/h/750"}]},{"name":"精选热菜","type":-1,"foods":[{"name":"娃娃菜炖豆腐","price":17,"oldPrice":"","description":"","sellCount":43,"rating":92,"info":"","ratings":[{"username":"3******c","rateTime":1469281964000,"rateType":0,"text":"菜量还可以,味道还可以","avatar":"http://static.galileo.xiaojukeji.com/static/tms/default_header.png"},{"username":"2******3","rateTime":1469271264000,"rateType":0,"text":"","avatar":"http://static.galileo.xiaojukeji.com/static/tms/default_header.png"}],"icon":"http://fuss10.elemecdn.com/d/2d/b1eb45b305635d9dd04ddf157165fjpeg.jpeg?imageView2/1/w/114/h/114","image":"http://fuss10.elemecdn.com/d/2d/b1eb45b305635d9dd04ddf157165fjpeg.jpeg?imageView2/1/w/750/h/750"},{"name":"手撕包菜","price":16,"oldPrice":"","description":"","sellCount":29,"rating":100,"info":"","ratings":[{"username":"3******c","rateTime":1469281964000,"rateType":0,"text":"","avatar":"http://static.galileo.xiaojukeji.com/static/tms/default_header.png"},{"username":"2******3","rateTime":1469271264000,"rateType":0,"text":"","avatar":"http://static.galileo.xiaojukeji.com/static/tms/default_header.png"}],"icon":"http://fuss10.elemecdn.com/9/c6/f3bc84468820121112e79583c24efjpeg.jpeg?imageView2/1/w/114/h/114","image":"http://fuss10.elemecdn.com/9/c6/f3bc84468820121112e79583c24efjpeg.jpeg?imageView2/1/w/750/h/750"},{"name":"香酥黄金鱼/3条","price":11,"oldPrice":"","description":"","sellCount":15,"rating":100,"info":"","ratings":[{"username":"3******c","rateTime":1469281964000,"rateType":0,"text":"","avatar":"http://static.galileo.xiaojukeji.com/static/tms/default_header.png"},{"username":"2******3","rateTime":1469271264000,"rateType":0,"text":"","avatar":"http://static.galileo.xiaojukeji.com/static/tms/default_header.png"}],"icon":"http://fuss10.elemecdn.com/4/e7/8277a6a2ea0a2e97710290499fc41jpeg.jpeg?imageView2/1/w/114/h/114","image":"http://fuss10.elemecdn.com/4/e7/8277a6a2ea0a2e97710290499fc41jpeg.jpeg?imageView2/1/w/750/h/750"}]},{"name":"爽口凉菜","type":-1,"foods":[{"name":"八宝酱菜","price":4,"oldPrice":"","description":"","sellCount":84,"rating":100,"info":"","ratings":[{"username":"3******c","rateTime":1469281964000,"rateType":0,"text":"","avatar":"http://static.galileo.xiaojukeji.com/static/tms/default_header.png"},{"username":"2******3","rateTime":1469271264000,"rateType":0,"text":"","avatar":"http://static.galileo.xiaojukeji.com/static/tms/default_header.png"},{"username":"3******b","rateTime":1469261964000,"rateType":0,"text":"","avatar":"http://static.galileo.xiaojukeji.com/static/tms/default_header.png"}],"icon":"http://fuss10.elemecdn.com/9/b5/469d8854f9a3a03797933fd01398bjpeg.jpeg?imageView2/1/w/114/h/114","image":"http://fuss10.elemecdn.com/9/b5/469d8854f9a3a03797933fd01398bjpeg.jpeg?imageView2/1/w/750/h/750"},{"name":"拍黄瓜","price":9,"oldPrice":"","description":"","sellCount":28,"rating":100,"info":"","ratings":[{"username":"3******c","rateTime":1469281964000,"rateType":0,"text":"","avatar":"http://static.galileo.xiaojukeji.com/static/tms/default_header.png"},{"username":"2******3","rateTime":1469271264000,"rateType":0,"text":"","avatar":"http://static.galileo.xiaojukeji.com/static/tms/default_header.png"},{"username":"3******b","rateTime":1469261964000,"rateType":0,"text":"","avatar":"http://static.galileo.xiaojukeji.com/static/tms/default_header.png"}],"icon":"http://fuss10.elemecdn.com/6/54/f654985b4e185f06eb07f8fa2b2e8jpeg.jpeg?imageView2/1/w/114/h/114","image":"http://fuss10.elemecdn.com/6/54/f654985b4e185f06eb07f8fa2b2e8jpeg.jpeg?imageView2/1/w/750/h/750"}]},{"name":"精选套餐","type":-1,"foods":[{"name":"红豆薏米粥套餐","price":37,"oldPrice":"","description":"红豆薏米粥,三鲜干蒸烧卖,拍黄瓜","sellCount":3,"rating":100,"info":"","ratings":[{"username":"2******3","rateTime":1469271264000,"rateType":0,"text":"","avatar":"http://static.galileo.xiaojukeji.com/static/tms/default_header.png"}],"icon":"http://fuss10.elemecdn.com/f/49/27f26ed00c025b2200a9ccbb7e67ejpeg.jpeg?imageView2/1/w/114/h/114","image":"http://fuss10.elemecdn.com/f/49/27f26ed00c025b2200a9ccbb7e67ejpeg.jpeg?imageView2/1/w/750/h/750"},{"name":"皮蛋瘦肉粥套餐","price":31,"oldPrice":"","description":"","sellCount":12,"rating":100,"info":"","ratings":[{"username":"2******3","rateTime":1469271264000,"rateType":0,"text":"","avatar":"http://static.galileo.xiaojukeji.com/static/tms/default_header.png"}],"icon":"http://fuss10.elemecdn.com/8/96/f444a8087f0e940ef264617f9d98ajpeg.jpeg?imageView2/1/w/114/h/114","image":"http://fuss10.elemecdn.com/8/96/f444a8087f0e940ef264617f9d98ajpeg.jpeg?imageView2/1/w/750/h/750"}]},{"name":"果拼果汁","type":-1,"foods":[{"name":"蜜瓜圣女萝莉杯","price":6,"oldPrice":"","description":"","sellCount":1,"rating":"","info":"","ratings":[],"icon":"http://fuss10.elemecdn.com/b/5f/b3b04c259d5ec9fa52e1856ee50dajpeg.jpeg?imageView2/1/w/114/h/114","image":"http://fuss10.elemecdn.com/b/5f/b3b04c259d5ec9fa52e1856ee50dajpeg.jpeg?imageView2/1/w/750/h/750"},{"name":"加多宝","price":6,"oldPrice":"","description":"","sellCount":7,"rating":100,"info":"","ratings":[{"username":"3******c","rateTime":1469281964000,"rateType":0,"text":"","avatar":"http://static.galileo.xiaojukeji.com/static/tms/default_header.png"},{"username":"2******3","rateTime":1469271264000,"rateType":0,"text":"","avatar":"http://static.galileo.xiaojukeji.com/static/tms/default_header.png"},{"username":"3******b","rateTime":1469261964000,"rateType":0,"text":"","avatar":"http://static.galileo.xiaojukeji.com/static/tms/default_header.png"}],"icon":"http://fuss10.elemecdn.com/b/9f/5e6c99c593cf65229225c5661bcdejpeg.jpeg?imageView2/1/w/114/h/114","image":"http://fuss10.elemecdn.com/b/9f/5e6c99c593cf65229225c5661bcdejpeg.jpeg?imageView2/1/w/750/h/750"},{"name":"VC无限橙果汁","price":8,"oldPrice":10,"description":"","sellCount":15,"rating":100,"info":"","ratings":[{"username":"3******c","rateTime":1469281964000,"rateType":0,"text":"还可以","avatar":"http://static.galileo.xiaojukeji.com/static/tms/default_header.png"},{"username":"2******3","rateTime":1469271264000,"rateType":0,"text":"","avatar":"http://static.galileo.xiaojukeji.com/static/tms/default_header.png"}],"icon":"http://fuss10.elemecdn.com/e/c6/f348e811772016ae24e968238bcbfjpeg.jpeg?imageView2/1/w/114/h/114","image":"http://fuss10.elemecdn.com/e/c6/f348e811772016ae24e968238bcbfjpeg.jpeg?imageView2/1/w/750/h/750"}]},{"name":"小吃主食","type":-1,"foods":[{"name":"扁豆焖面","price":14,"oldPrice":"","description":"","sellCount":188,"rating":96,"info":"","ratings":[{"username":"3******c","rateTime":1469281964000,"rateType":0,"text":"","avatar":"http://static.galileo.xiaojukeji.com/static/tms/default_header.png"},{"username":"2******3","rateTime":1469271264000,"rateType":0,"text":"","avatar":"http://static.galileo.xiaojukeji.com/static/tms/default_header.png"},{"username":"3******b","rateTime":1469261964000,"rateType":1,"text":"","avatar":"http://static.galileo.xiaojukeji.com/static/tms/default_header.png"}],"icon":"http://fuss10.elemecdn.com/c/6b/29e3d29b0db63d36f7c500bca31d8jpeg.jpeg?imageView2/1/w/114/h/114","image":"http://fuss10.elemecdn.com/c/6b/29e3d29b0db63d36f7c500bca31d8jpeg.jpeg?imageView2/1/w/750/h/750"},{"name":"葱花饼","price":10,"oldPrice":"","description":"","sellCount":124,"rating":85,"info":"","ratings":[{"username":"3******c","rateTime":1469281964000,"rateType":1,"text":"没啥味道","avatar":"http://static.galileo.xiaojukeji.com/static/tms/default_header.png"},{"username":"2******3","rateTime":1469271264000,"rateType":1,"text":"很一般啊","avatar":"http://static.galileo.xiaojukeji.com/static/tms/default_header.png"},{"username":"3******b","rateTime":1469261964000,"rateType":0,"text":"","avatar":"http://static.galileo.xiaojukeji.com/static/tms/default_header.png"}],"icon":"http://fuss10.elemecdn.com/f/28/a51e7b18751bcdf871648a23fd3b4jpeg.jpeg?imageView2/1/w/114/h/114","image":"http://fuss10.elemecdn.com/f/28/a51e7b18751bcdf871648a23fd3b4jpeg.jpeg?imageView2/1/w/750/h/750"},{"name":"牛肉馅饼","price":14,"oldPrice":"","description":"","sellCount":114,"rating":91,"info":"","ratings":[{"username":"3******c","rateTime":1469281964000,"rateType":1,"text":"难吃不推荐","avatar":"http://static.galileo.xiaojukeji.com/static/tms/default_header.png"},{"username":"2******3","rateTime":1469271264000,"rateType":0,"text":"","avatar":"http://static.galileo.xiaojukeji.com/static/tms/default_header.png"},{"username":"3******b","rateTime":1469261964000,"rateType":0,"text":"","avatar":"http://static.galileo.xiaojukeji.com/static/tms/default_header.png"}],"icon":"http://fuss10.elemecdn.com/d/b9/bcab0e8ad97758e65ae5a62b2664ejpeg.jpeg?imageView2/1/w/114/h/114","image":"http://fuss10.elemecdn.com/d/b9/bcab0e8ad97758e65ae5a62b2664ejpeg.jpeg?imageView2/1/w/750/h/750"},{"name":"招牌猪肉白菜锅贴/10个","price":17,"oldPrice":"","description":"","sellCount":101,"rating":78,"info":"","ratings":[{"username":"3******c","rateTime":1469281964000,"rateType":1,"text":"不脆,不好吃","avatar":"http://static.galileo.xiaojukeji.com/static/tms/default_header.png"},{"username":"2******3","rateTime":1469271264000,"rateType":0,"text":"","avatar":"http://static.galileo.xiaojukeji.com/static/tms/default_header.png"},{"username":"3******b","rateTime":1469261964000,"rateType":0,"text":"","avatar":"http://static.galileo.xiaojukeji.com/static/tms/default_header.png"}],"icon":"http://fuss10.elemecdn.com/7/72/9a580c1462ca1e4d3c07e112bc035jpeg.jpeg?imageView2/1/w/114/h/114","image":"http://fuss10.elemecdn.com/7/72/9a580c1462ca1e4d3c07e112bc035jpeg.jpeg?imageView2/1/w/750/h/750"},{"name":"糊塌子","price":10,"oldPrice":"","description":"","sellCount":80,"rating":93,"info":"","ratings":[{"username":"3******c","rateTime":1469281964000,"rateType":0,"text":"","avatar":"http://static.galileo.xiaojukeji.com/static/tms/default_header.png"},{"username":"2******3","rateTime":1469271264000,"rateType":0,"text":"","avatar":"http://static.galileo.xiaojukeji.com/static/tms/default_header.png"},{"username":"3******b","rateTime":1469261964000,"rateType":0,"text":"","avatar":"http://static.galileo.xiaojukeji.com/static/tms/default_header.png"}],"icon":"http://fuss10.elemecdn.com/0/05/097a2a59fd2a2292d08067e16380cjpeg.jpeg?imageView2/1/w/114/h/114","image":"http://fuss10.elemecdn.com/0/05/097a2a59fd2a2292d08067e16380cjpeg.jpeg?imageView2/1/w/750/h/750"}]},{"name":"特色粥品","type":-1,"foods":[{"name":"皮蛋瘦肉粥","price":10,"oldPrice":"","description":"咸粥","sellCount":229,"rating":100,"ratings":[{"username":"3******c","rateTime":1469281964000,"rateType":0,"text":"很喜欢的粥","avatar":"http://static.galileo.xiaojukeji.com/static/tms/default_header.png"},{"username":"2******3","rateTime":1469271264000,"rateType":0,"text":"","avatar":"http://static.galileo.xiaojukeji.com/static/tms/default_header.png"},{"username":"3******b","rateTime":1469261964000,"rateType":1,"text":"","avatar":"http://static.galileo.xiaojukeji.com/static/tms/default_header.png"}],"icon":"http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/114/h/114","image":"http://fuss10.elemecdn.com/c/cd/c12745ed8a5171e13b427dbc39401jpeg.jpeg?imageView2/1/w/750/h/750"},{"name":"南瓜粥","price":9,"oldPrice":"","description":"甜粥","sellCount":91,"rating":100,"info":"","ratings":[{"username":"3******c","rateTime":1469281964000,"rateType":0,"text":"","avatar":"http://static.galileo.xiaojukeji.com/static/tms/default_header.png"},{"username":"2******3","rateTime":1469271264000,"rateType":0,"text":"","avatar":"http://static.galileo.xiaojukeji.com/static/tms/default_header.png"},{"username":"3******b","rateTime":1469261964000,"rateType":0,"text":"","avatar":"http://static.galileo.xiaojukeji.com/static/tms/default_header.png"}],"icon":"http://fuss10.elemecdn.com/8/a6/453f65f16b1391942af11511b7a90jpeg.jpeg?imageView2/1/w/114/h/114","image":"http://fuss10.elemecdn.com/8/a6/453f65f16b1391942af11511b7a90jpeg.jpeg?imageView2/1/w/750/h/750"},{"name":"红豆薏米美肤粥","price":12,"oldPrice":"","description":"甜粥","sellCount":86,"rating":100,"info":"","ratings":[{"username":"3******c","rateTime":1469281964000,"rateType":0,"text":"","avatar":"http://static.galileo.xiaojukeji.com/static/tms/default_header.png"},{"username":"2******3","rateTime":1469271264000,"rateType":0,"text":"","avatar":"http://static.galileo.xiaojukeji.com/static/tms/default_header.png"},{"username":"3******b","rateTime":1469261964000,"rateType":0,"text":"","avatar":"http://static.galileo.xiaojukeji.com/static/tms/default_header.png"}],"icon":"http://fuss10.elemecdn.com/d/22/260bd78ee6ac6051136c5447fe307jpeg.jpeg?imageView2/1/w/114/h/114","image":"http://fuss10.elemecdn.com/d/22/260bd78ee6ac6051136c5447fe307jpeg.jpeg?imageView2/1/w/750/h/750"},{"name":"红枣山药糙米粥","price":10,"oldPrice":"","description":"","sellCount":81,"rating":91,"info":"","ratings":[{"username":"3******c","rateTime":1469281964000,"rateType":0,"text":"","avatar":"http://static.galileo.xiaojukeji.com/static/tms/default_header.png"},{"username":"2******3","rateTime":1469271264000,"rateType":0,"text":"","avatar":"http://static.galileo.xiaojukeji.com/static/tms/default_header.png"},{"username":"3******b","rateTime":1469261964000,"rateType":0,"text":"","avatar":"http://static.galileo.xiaojukeji.com/static/tms/default_header.png"}],"icon":"http://fuss10.elemecdn.com/9/b5/469d8854f9a3a03797933fd01398bjpeg.jpeg?imageView2/1/w/114/h/114","image":"http://fuss10.elemecdn.com/9/b5/469d8854f9a3a03797933fd01398bjpeg.jpeg?imageView2/1/w/750/h/750"},{"name":"鲜蔬菌菇粥","price":11,"oldPrice":"","description":"咸粥","sellCount":56,"rating":100,"info":"","ratings":[{"username":"3******c","rateTime":1469281964000,"rateType":0,"text":"","avatar":"http://static.galileo.xiaojukeji.com/static/tms/default_header.png"},{"username":"2******3","rateTime":1469271264000,"rateType":0,"text":""},{"username":"3******b","rateTime":1469261964000,"rateType":0,"text":"","avatar":"http://static.galileo.xiaojukeji.com/static/tms/default_header.png"}],"icon":"http://fuss10.elemecdn.com/e/a3/5317c68dd618929b6ac05804e429ajpeg.jpeg?imageView2/1/w/114/h/114","image":"http://fuss10.elemecdn.com/e/a3/5317c68dd618929b6ac05804e429ajpeg.jpeg?imageView2/1/w/750/h/750"},{"name":"田园蔬菜粥","price":10,"oldPrice":"","description":"咸粥","sellCount":33,"rating":100,"info":"","ratings":[{"username":"3******c","rateTime":1469281964000,"rateType":0,"text":"","avatar":"http://static.galileo.xiaojukeji.com/static/tms/default_header.png"},{"username":"2******3","rateTime":1469271264000,"rateType":0,"text":"","avatar":"http://static.galileo.xiaojukeji.com/static/tms/default_header.png"},{"username":"3******b","rateTime":1469261964000,"rateType":0,"text":"","avatar":"http://static.galileo.xiaojukeji.com/static/tms/default_header.png"}],"icon":"http://fuss10.elemecdn.com/a/94/7371083792c19df00e546b29e344cjpeg.jpeg?imageView2/1/w/114/h/114","image":"http://fuss10.elemecdn.com/a/94/7371083792c19df00e546b29e344cjpeg.jpeg?imageView2/1/w/750/h/750"}]}],"ratings":[{"username":"3******c","rateTime":1469281964000,"deliveryTime":30,"score":5,"rateType":0,"text":"不错,粥很好喝,我经常吃这一家,非常赞,以后也会常来吃,强烈推荐.","avatar":"http://static.galileo.xiaojukeji.com/static/tms/default_header.png","recommend":["南瓜粥","皮蛋瘦肉粥","扁豆焖面","娃娃菜炖豆腐","牛肉馅饼"]},{"username":"2******3","rateTime":1469271264000,"deliveryTime":"","score":4,"rateType":0,"text":"服务态度不错","avatar":"http://static.galileo.xiaojukeji.com/static/tms/default_header.png","recommend":["扁豆焖面"]},{"username":"3******b","rateTime":1469261964000,"score":3,"rateType":1,"text":"","avatar":"http://static.galileo.xiaojukeji.com/static/tms/default_header.png","recommend":[]},{"username":"1******c","rateTime":1469261864000,"deliveryTime":20,"score":5,"rateType":0,"text":"良心店铺","avatar":"http://static.galileo.xiaojukeji.com/static/tms/default_header.png","recommend":[]},{"username":"2******d","rateTime":1469251264000,"deliveryTime":10,"score":4,"rateType":0,"text":"","avatar":"http://static.galileo.xiaojukeji.com/static/tms/default_header.png","recommend":[]},{"username":"9******0","rateTime":1469241964000,"deliveryTime":70,"score":1,"rateType":1,"text":"送货速度蜗牛一样","avatar":"http://static.galileo.xiaojukeji.com/static/tms/default_header.png","recommend":[]},{"username":"d******c","rateTime":1469231964000,"deliveryTime":30,"score":5,"rateType":0,"text":"很喜欢的粥店","avatar":"http://static.galileo.xiaojukeji.com/static/tms/default_header.png","recommend":[]},{"username":"2******3","rateTime":1469221264000,"deliveryTime":"","score":4,"rateType":0,"text":"量给的还可以","avatar":"http://static.galileo.xiaojukeji.com/static/tms/default_header.png","recommend":[]},{"username":"3******8","rateTime":1469211964000,"deliveryTime":"","score":3,"rateType":1,"text":"","avatar":"http://static.galileo.xiaojukeji.com/static/tms/default_header.png","recommend":[]},{"username":"a******a","rateTime":1469201964000,"deliveryTime":"","score":4,"rateType":0,"text":"孩子喜欢吃这家","avatar":"http://static.galileo.xiaojukeji.com/static/tms/default_header.png","recommend":["南瓜粥"]},{"username":"3******3","rateTime":1469191264000,"deliveryTime":"","score":4,"rateType":0,"text":"粥挺好吃的","avatar":"http://static.galileo.xiaojukeji.com/static/tms/default_header.png","recommend":[]},{"username":"t******b","rateTime":1469181964000,"deliveryTime":"","score":3,"rateType":1,"text":"","avatar":"http://static.galileo.xiaojukeji.com/static/tms/default_header.png","recommend":[]},{"username":"f******c","rateTime":1469171964000,"deliveryTime":15,"score":5,"rateType":0,"text":"送货速度很快","avatar":"http://static.galileo.xiaojukeji.com/static/tms/default_header.png","recommend":[]},{"username":"k******3","rateTime":1469161264000,"deliveryTime":"","score":4,"rateType":0,"text":"","avatar":"http://static.galileo.xiaojukeji.com/static/tms/default_header.png","recommend":[]},{"username":"u******b","rateTime":1469151964000,"deliveryTime":"","score":4,"rateType":0,"text":"下雨天给快递小哥点个赞","avatar":"http://static.galileo.xiaojukeji.com/static/tms/default_header.png","recommend":[]},{"username":"s******c","rateTime":1469141964000,"deliveryTime":"","score":4,"rateType":0,"text":"好","avatar":"http://static.galileo.xiaojukeji.com/static/tms/default_header.png","recommend":[]},{"username":"z******3","rateTime":1469131264000,"deliveryTime":"","score":5,"rateType":0,"text":"吃了还想再吃","avatar":"http://static.galileo.xiaojukeji.com/static/tms/default_header.png","recommend":[]},{"username":"n******b","rateTime":1469121964000,"deliveryTime":"","score":3,"rateType":1,"text":"发票开的不对","avatar":"http://static.galileo.xiaojukeji.com/static/tms/default_header.png","recommend":[]},{"username":"m******c","rateTime":1469111964000,"deliveryTime":30,"score":5,"rateType":0,"text":"好吃","avatar":"http://static.galileo.xiaojukeji.com/static/tms/default_header.png","recommend":[]},{"username":"l******3","rateTime":1469101264000,"deliveryTime":40,"score":5,"rateType":0,"text":"还不错吧","avatar":"http://static.galileo.xiaojukeji.com/static/tms/default_header.png","recommend":[]},{"username":"3******o","rateTime":1469091964000,"deliveryTime":"","score":2,"rateType":1,"text":"","avatar":"http://static.galileo.xiaojukeji.com/static/tms/default_header.png","recommend":[]},{"username":"3******p","rateTime":1469081964000,"deliveryTime":"","score":4,"rateType":0,"text":"很喜欢的粥","avatar":"http://static.galileo.xiaojukeji.com/static/tms/default_header.png","recommend":[]},{"username":"o******k","rateTime":1469071264000,"deliveryTime":"","score":5,"rateType":0,"text":"","avatar":"http://static.galileo.xiaojukeji.com/static/tms/default_header.png","recommend":[]},{"username":"k******b","rateTime":1469061964000,"deliveryTime":"","score":4,"rateType":0,"text":"","avatar":"http://static.galileo.xiaojukeji.com/static/tms/default_header.png","recommend":[]}]}

/***/ }),
/* 10 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_components_header_header_vue__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_components_header_header_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_components_header_header_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_components_bottom_bottom_vue__ = __webpack_require__(28);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_components_bottom_bottom_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_components_bottom_bottom_vue__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//



const ERR_OK = 0;
/* harmony default export */ __webpack_exports__["default"] = ({
  data() {
    return {
      seller: {}
    };
  },
  components: {
    'v-header': __WEBPACK_IMPORTED_MODULE_0_components_header_header_vue___default.a,
    'v-bottom': __WEBPACK_IMPORTED_MODULE_1_components_bottom_bottom_vue___default.a
  },
  created() {
    this.seller = this.$store.getters.getSellerData;
  }
});

/***/ }),
/* 11 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    data() {
        return {
            isShowDeils: false,
            startMoney: 20,
            btnType: 'disabled',
            productArray: []
        };
    },
    methods: {
        matchSend() {
            let total = this.$store.getters.getTotalMoney;
            if (total >= this.startMoney) {
                this.btnType = 'ok';
                return '结账';
            } else {
                this.btnType = 'disabled';
                if (total > 0) {
                    let balance = this.startMoney - total;
                    return `还差￥${balance}起送`;
                }
                return `￥${this.startMoney}起送`;
            }
        },
        getTotalMoney() {
            return '￥' + this.$store.getters.getTotalMoney;
        },
        hoverShopDeils() {
            this.isShowDeils = !this.isShowDeils;
        },
        addFoods(idx) {
            let count = 0;
            for (let i = 0; i < this.productArray.length; i++) {
                let item = this.productArray[i];
                if (item.id == idx) {
                    count = item.count++;
                    this.$store.commit('setProductArray', {
                        id: idx,
                        count: item.count,
                        price: item.price,
                        productName: item.productName
                    });
                    break;
                }
            }
            this.productArray = this.$store.getters.getProductArray;
            this.$store.commit('mathTotalMoney', this.productArray);
        },
        cutFoods(idx) {
            let count = 0;
            for (let i = 0; i < this.productArray.length; i++) {
                let item = this.productArray[i];
                if (item.id == idx) {
                    count = item.count--;
                    this.$store.commit('setProductArray', {
                        id: idx,
                        count: item.count,
                        price: item.price,
                        productName: item.productName
                    });
                    break;
                }
            }
            this.productArray = this.$store.getters.getProductArray;
            this.$store.commit('mathTotalMoney', this.productArray);
        },
        clearShop() {
            this.$store.commit('clearProduct');
            this.$store.commit('setTotalMoney', 0);
            this.productArray = this.$store.getters.getProductArray;
        }
    },
    created() {
        this.productArray = this.$store.getters.getProductArray;
    }
});

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
  data() {
    return {
      goods: {},
      selected: 0
    };
  },
  methods: {
    selectedMethod(idx) {
      this.selected = idx;
      let item = document.getElementById('goodItem' + idx);
      let goods = document.getElementById('goods');
      goods.scrollTop = item.offsetTop;
    },
    getFoodNum(idx) {
      let product = this.$store.getters.getProductById(idx);
      if (product) {
        return product.count;
      }
      return 0;
    },
    addFoods(idx, item) {
      let product = this.$store.getters.getProductById(idx);
      if (product) {
        product.count++;
        this.$store.commit('setProductArray', product);
      } else {
        this.$store.commit('setProductArray', {
          id: idx,
          count: 1,
          price: item.price,
          productName: item.name
        });
      }
      this.$store.commit('mathTotalMoney');
    },
    cutFoods(idx) {
      let product = this.$store.getters.getProductById(idx);
      if (product) {
        product.count--;
        this.$store.commit('setProductArray', product);
        this.$store.commit('mathTotalMoney');
      }
    }
  },
  created() {
    this.goods = this.$store.getters.getGoodsData;
  }
});

/***/ }),
/* 13 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__star_star__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__star_star___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__star_star__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    seller: {}
  },
  data() {
    return {
      classMap: ['decrease', 'discount', 'special', 'invoice', 'guarantee'],
      showDetail: false
    };
  },
  components: {
    star: __WEBPACK_IMPORTED_MODULE_0__star_star___default.a
  },
  methods: {
    detailShow(boolen) {
      this.showDetail = boolen;
    }
  }
});

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__star_star__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__star_star___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__star_star__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  data() {
    return {
      retings: [],
      seller: {}
    };
  },
  methods: {},
  components: {
    star: __WEBPACK_IMPORTED_MODULE_0__star_star___default.a
  },
  created() {
    this.retings = this.$store.getters.getRatingsData;
    this.seller = this.$store.getters.getSellerData;
  }
});

/***/ }),
/* 15 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__star_star__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__star_star___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__star_star__);
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
  data() {
    return {
      seller: {}
    };
  },
  methods: {},
  components: {
    star: __WEBPACK_IMPORTED_MODULE_0__star_star___default.a
  },
  created() {
    this.seller = this.$store.getters.getSellerData;
  }
});

/***/ }),
/* 16 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//

function matchScore(score) {
  let len = parseInt(score),
      floor = parseFloat(score) - len,
      countStar = 5,
      group = [];
  for (var i = 0; i < len; i++) {
    group.push("on");
  }
  if (floor > 0) {
    group.push("half");
  }
  let residue = countStar - group.length;
  if (residue > 0) {
    for (var j = 0; j < residue; j++) {
      group.push("off");
    }
  }
  return group;
}

/* harmony default export */ __webpack_exports__["default"] = ({
  props: {
    score: 0
  },
  data() {
    return {
      starGroup: []
    };
  },
  methods: {},
  watch: {
    score: function (newScore) {
      this.starGroup = matchScore(newScore);
    }
  },
  created() {
    this.starGroup = matchScore(this.score);
  }
});

/***/ }),
/* 17 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(2);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App__ = __webpack_require__(6);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__App___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__App__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__router__ = __webpack_require__(4);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_vue_resource__ = __webpack_require__(7);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_vuex__ = __webpack_require__(8);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__store__ = __webpack_require__(5);







__WEBPACK_IMPORTED_MODULE_0_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_3_vue_resource__["a" /* default */]);
__WEBPACK_IMPORTED_MODULE_0_vue___default.a.use(__WEBPACK_IMPORTED_MODULE_4_vuex__["a" /* default */]);

new __WEBPACK_IMPORTED_MODULE_0_vue___default.a({
    el: '#app',
    router: __WEBPACK_IMPORTED_MODULE_2__router__["a" /* default */],
    template: '<App/>',
    components: { App: __WEBPACK_IMPORTED_MODULE_1__App___default.a },
    store: __webpack_require__.i(__WEBPACK_IMPORTED_MODULE_5__store__["a" /* default */])(__WEBPACK_IMPORTED_MODULE_4_vuex__["a" /* default */])
});

/***/ }),
/* 18 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 19 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 20 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 21 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 22 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 23 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 24 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(21)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(11),
  /* template */
  __webpack_require__(36),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(24)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(12),
  /* template */
  __webpack_require__(39),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 30 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(22)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(13),
  /* template */
  __webpack_require__(37),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(20)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(14),
  /* template */
  __webpack_require__(35),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(23)

var Component = __webpack_require__(0)(
  /* script */
  __webpack_require__(15),
  /* template */
  __webpack_require__(38),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 33 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [_c('v-header', {
    attrs: {
      "seller": _vm.seller,
      "id": "header"
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "tab",
    attrs: {
      "id": "tab"
    }
  }, [_c('div', {
    staticClass: "tab-item"
  }, [_c('router-link', {
    attrs: {
      "to": "/goods"
    }
  }, [_vm._v("\n        商品\n      ")])], 1), _vm._v(" "), _c('div', {
    staticClass: "tab-item"
  }, [_c('router-link', {
    attrs: {
      "to": "/ratings"
    }
  }, [_vm._v("\n        评论\n      ")])], 1), _vm._v(" "), _c('div', {
    staticClass: "tab-item"
  }, [_c('router-link', {
    attrs: {
      "to": "/seller"
    }
  }, [_vm._v("\n        商家\n      ")])], 1)]), _vm._v(" "), _c('transition', {
    attrs: {
      "name": "slide"
    }
  }, [_c('router-view')], 1), _vm._v(" "), _c('v-bottom', {
    attrs: {
      "id": "bottom"
    }
  })], 1)
},staticRenderFns: []}

/***/ }),
/* 34 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "star-box"
  }, _vm._l((_vm.starGroup), function(item, index) {
    return _c('span', {
      staticClass: "star",
      class: item
    })
  }))
},staticRenderFns: []}

/***/ }),
/* 35 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "ratings",
    attrs: {
      "id": "ratings"
    }
  }, [_c('div', {
    staticClass: "grade-box"
  }, [_c('div', {
    staticClass: "grade-left"
  }, [_c('p', {
    staticClass: "grade-num",
    domProps: {
      "textContent": _vm._s(_vm.seller.score)
    }
  }), _vm._v(" "), _c('p', {
    staticClass: "grade-item grade-font"
  }, [_vm._v("综合评分")]), _vm._v(" "), _c('p', {
    staticClass: "grade-item grade-gray"
  }, [_vm._v("高于周边商家" + _vm._s(_vm.seller.rankRate) + "%")])]), _vm._v(" "), _c('div', {
    staticClass: "grade-right"
  }, [_c('div', {
    staticClass: "grade-star"
  }, [_c('span', {
    staticClass: "grade-font"
  }, [_vm._v("服务态度")]), _vm._v(" "), _c('star', {
    attrs: {
      "score": _vm.seller.serviceScore
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "star-num",
    domProps: {
      "textContent": _vm._s(_vm.seller.serviceScore)
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "grade-item grade-star"
  }, [_c('span', {
    staticClass: "grade-font"
  }, [_vm._v("食物评分")]), _vm._v(" "), _c('star', {
    attrs: {
      "score": _vm.seller.foodScore
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "star-num",
    domProps: {
      "textContent": _vm._s(_vm.seller.foodScore)
    }
  })], 1), _vm._v(" "), _c('div', {
    staticClass: "grade-item grade-star"
  }, [_c('span', {
    staticClass: "grade-font"
  }, [_vm._v("送达时间")]), _vm._v(" "), _c('span', {
    staticClass: "grade-time"
  }, [_vm._v(_vm._s(_vm.seller.deliveryTime) + "分钟")])])])]), _vm._v(" "), _vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "comment-list"
  }, _vm._l((_vm.retings), function(item, index) {
    return _c('div', {
      staticClass: "comment-item"
    }, [_c('div', {
      staticClass: "head-portrait"
    }, [_vm._m(1, true), _vm._v(" "), _c('div', {
      staticClass: "portrait-descript"
    }, [_c('p', {
      staticClass: "nick",
      domProps: {
        "textContent": _vm._s(item.username)
      }
    }), _vm._v(" "), _c('div', {
      staticClass: "star-descript"
    }, [_vm._v(_vm._s(item.deliveryTime) + "分钟送达")])])]), _vm._v(" "), _c('p', {
      staticClass: "text",
      domProps: {
        "textContent": _vm._s(item.text)
      }
    }), _vm._v(" "), (item.recommend.length > 0) ? _c('div', {
      staticClass: "recommend"
    }, [_c('span', {
      staticClass: "heart"
    }, [_vm._v("❤")]), _vm._v(" "), _vm._l((item.recommend), function(recommend, idx) {
      return _c('span', {
        staticClass: "recommend-tab",
        domProps: {
          "textContent": _vm._s(recommend)
        }
      })
    })], 2) : _vm._e()])
  }))])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "choose-box"
  }, [_c('div', {
    staticClass: "choose-btns"
  }, [_c('button', {
    staticClass: "choose-btn btn-blue"
  }, [_vm._v("全部"), _c('span', [_vm._v("57")])]), _vm._v(" "), _c('button', {
    staticClass: "choose-btn btn-sky"
  }, [_vm._v("满意"), _c('span', [_vm._v("47")])]), _vm._v(" "), _c('button', {
    staticClass: "choose-btn btn-glay"
  }, [_vm._v("不满意"), _c('span', [_vm._v("10")])])]), _vm._v(" "), _c('div', {
    staticClass: "choose-descript"
  }, [_c('span', {
    staticClass: "icon-cancel"
  }, [_vm._v("√")]), _vm._v(" 只看有内容的评价\n    ")])])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "portrait-pic"
  }, [_c('div', {
    staticClass: "pic"
  })])
}]}

/***/ }),
/* 36 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', [(_vm.isShowDeils) ? _c('div', {
    staticClass: "details-black",
    on: {
      "click": function($event) {
        _vm.hoverShopDeils()
      }
    }
  }) : _vm._e(), _vm._v(" "), (_vm.isShowDeils) ? _c('div', {
    class: _vm.isShowDeils ? 'details-box' : ''
  }, [_c('div', {
    staticClass: "details-title"
  }, [_c('div', {
    staticClass: "shop-title"
  }, [_vm._v("购物车")]), _vm._v(" "), _c('div', {
    staticClass: "shop-clear",
    on: {
      "click": function($event) {
        _vm.clearShop()
      }
    }
  }, [_vm._v("清空")])]), _vm._v(" "), _c('div', {
    staticClass: "details-list"
  }, _vm._l((_vm.productArray), function(item, index) {
    return _c('div', {
      staticClass: "detail-item"
    }, [_c('div', {
      staticClass: "product-name"
    }, [_vm._v("\n                    " + _vm._s(item.productName) + "\n                ")]), _vm._v(" "), _c('div', {
      staticClass: "product-price"
    }, [_vm._v("\n                    ￥" + _vm._s(item.price * item.count) + "\n                ")]), _vm._v(" "), _c('div', {
      staticClass: "product-action"
    }, [_c('a', {
      staticClass: "link-change cut",
      on: {
        "click": function($event) {
          _vm.cutFoods(item.id)
        }
      }
    }), _vm._v(" "), _c('span', {
      staticClass: "num-span"
    }, [_vm._v(_vm._s(item.count))]), _vm._v(" "), _c('a', {
      staticClass: "link-change add",
      on: {
        "click": function($event) {
          _vm.addFoods(item.id)
        }
      }
    })])])
  }))]) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "bottom"
  }, [_c('div', {
    staticClass: "item-1"
  }, [_c('div', {
    staticClass: "shopping-car-box"
  }, [_c('span', {
    staticClass: "car icon-shopping_cart",
    class: _vm.isShowDeils ? 'blue-car' : 'black-car',
    on: {
      "click": function($event) {
        _vm.hoverShopDeils()
      }
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "item-2"
  }, [_c('span', {
    staticClass: "total-prices",
    domProps: {
      "textContent": _vm._s(_vm.getTotalMoney())
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "total-remark"
  }, [_vm._v("另需配送费￥4元")])]), _vm._v(" "), _c('div', {
    staticClass: "item-3"
  }, [_c('button', {
    staticClass: "btn-pay",
    class: _vm.btnType,
    attrs: {
      "type": "button"
    },
    domProps: {
      "textContent": _vm._s(_vm.matchSend())
    }
  })])])])
},staticRenderFns: []}

/***/ }),
/* 37 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return (_vm.seller) ? _c('div', {
    staticClass: "header"
  }, [_c('div', {
    staticClass: "wapper"
  }, [_c('div', {
    staticClass: "avatar"
  }, [_c('img', {
    attrs: {
      "width": "100%",
      "height": "100%",
      "src": _vm.seller.avatar
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "content"
  }, [_c('div', {
    staticClass: "title"
  }, [_c('span', {
    staticClass: "ion-brand"
  }), _vm._v(" "), _c('span', {
    staticStyle: {
      "margin-left": "6px"
    },
    domProps: {
      "textContent": _vm._s(_vm.seller.name)
    }
  })]), _vm._v(" "), _c('div', {
    staticClass: "description"
  }, [_vm._v("\n        " + _vm._s(_vm.seller.description) + "/" + _vm._s(_vm.seller.deliveryTime) + "分钟送达\n      ")]), _vm._v(" "), (_vm.seller.supports) ? _c('div', {
    staticClass: "support"
  }, [_c('span', {
    staticClass: "supportIcon",
    class: _vm.classMap[_vm.seller.supports[0].type]
  }), _vm._v(" "), _c('span', {
    staticStyle: {
      "margin-left": "4px"
    },
    domProps: {
      "textContent": _vm._s(_vm.seller.supports[0].description)
    }
  })]) : _vm._e()]), _vm._v(" "), (_vm.seller.supports) ? _c('div', {
    staticClass: "seller-count"
  }, [_c('span', {
    domProps: {
      "textContent": _vm._s(_vm.seller.supports.length + '个')
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "icon-keyboard_arrow_right"
  })]) : _vm._e()]), _vm._v(" "), _c('div', {
    staticClass: "bulletin-wrapper",
    on: {
      "click": function($event) {
        _vm.detailShow(true);
      }
    }
  }, [_c('span', {
    staticClass: "bulletin-title"
  }), _vm._v(" "), _c('span', {
    staticClass: "bulletin-text",
    domProps: {
      "textContent": _vm._s(_vm.seller.bulletin)
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "icon-keyboard_arrow_right"
  })]), _vm._v(" "), _c('div', {
    staticClass: "backgrounp"
  }, [_c('img', {
    attrs: {
      "width": "100%",
      "height": "100%",
      "src": _vm.seller.avatar
    }
  })]), _vm._v(" "), _c('div', {
    directives: [{
      name: "show",
      rawName: "v-show",
      value: (_vm.showDetail),
      expression: "showDetail"
    }],
    staticClass: "detail"
  }, [_c('div', {
    staticClass: "detail-main"
  }, [_c('div', {
    staticClass: "title",
    domProps: {
      "textContent": _vm._s(_vm.seller.name)
    }
  }), _vm._v(" "), _c('div', {
    staticClass: "level"
  }, [_c('star', {
    attrs: {
      "score": _vm.seller.score
    }
  })], 1), _vm._v(" "), (_vm.seller.supports) ? _c('div', {
    staticClass: "detail-mgs-box"
  }, [_vm._m(0), _vm._v(" "), _c('div', {
    staticClass: "support-list"
  }, _vm._l((_vm.seller.supports), function(item) {
    return _c('div', {
      staticClass: "support-item"
    }, [_c('i', {
      class: _vm.classMap[item.type]
    }), _vm._v(" "), _c('span', {
      domProps: {
        "textContent": _vm._s(item.description)
      }
    })])
  }))]) : _vm._e(), _vm._v(" "), _c('div', {
    staticClass: "detail-bulletin"
  }, [_vm._m(1), _vm._v(" "), _c('div', {
    staticClass: "bulletin-text",
    domProps: {
      "textContent": _vm._s(_vm.seller.bulletin)
    }
  })])]), _vm._v(" "), _c('div', {
    staticClass: "detail-close"
  }, [_c('i', {
    staticClass: "icon-close",
    on: {
      "click": function($event) {
        _vm.detailShow(false);
      }
    }
  })])])]) : _vm._e()
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "title-box"
  }, [_c('div', {
    staticClass: "link"
  }), _vm._v(" "), _c('div', {
    staticClass: "title-word"
  }, [_vm._v("\n            优惠信息\n          ")]), _vm._v(" "), _c('div', {
    staticClass: "link"
  })])
},function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "title-box"
  }, [_c('div', {
    staticClass: "link"
  }), _vm._v(" "), _c('div', {
    staticClass: "title-word"
  }, [_vm._v("\n            商家公告\n          ")]), _vm._v(" "), _c('div', {
    staticClass: "link"
  })])
}]}

/***/ }),
/* 38 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "seller"
  }, [_c('div', {
    staticClass: "seller-message seller-info-style"
  }, [_c('div', {
    staticClass: "message"
  }, [_c('h2', {
    domProps: {
      "textContent": _vm._s(_vm.seller.name)
    }
  }), _vm._v(" "), _c('star', {
    attrs: {
      "score": 4
    }
  }), _vm._v(" "), _c('span', {
    staticClass: "message-span"
  }, [_vm._v("(" + _vm._s(_vm.seller.ratingCount) + ")")]), _vm._v(" "), _c('span', {
    staticClass: "message-span"
  }, [_vm._v("月售" + _vm._s(_vm.seller.sellCount) + "单")])], 1), _vm._v(" "), _vm._m(0)]), _vm._v(" "), _c('div', {
    staticClass: "seller-info-style"
  }, [_c('div', {
    staticClass: "score-box"
  }, [_c('div', {
    staticClass: "score-item"
  }, [_c('span', {
    staticClass: "data-title"
  }, [_vm._v("起送价")]), _vm._v(" "), _c('div', {
    staticClass: "seller-data"
  }, [_vm._v(_vm._s(_vm.seller.minPrice)), _c('span', {
    staticClass: "small-word"
  }, [_vm._v("元")])])]), _vm._v(" "), _c('div', {
    staticClass: "score-item score-border"
  }, [_c('span', {
    staticClass: "data-title"
  }, [_vm._v("商家配送")]), _vm._v(" "), _c('div', {
    staticClass: "seller-data"
  }, [_vm._v(_vm._s(_vm.seller.deliveryPrice)), _c('span', {
    staticClass: "small-word"
  }, [_vm._v("元")])])]), _vm._v(" "), _c('div', {
    staticClass: "score-item"
  }, [_c('span', {
    staticClass: "data-title"
  }, [_vm._v("平均配送时间")]), _vm._v(" "), _c('div', {
    staticClass: "seller-data"
  }, [_vm._v(_vm._s(_vm.seller.deliveryTime)), _c('span', {
    staticClass: "small-word"
  }, [_vm._v("分钟")])])])])]), _vm._v(" "), _c('div', {
    staticClass: "seller-deils seller-info-style"
  }, [_c('h2', [_vm._v("公告与活动")]), _vm._v(" "), _c('p', {
    domProps: {
      "textContent": _vm._s(_vm.seller.bulletin)
    }
  }), _vm._v(" "), _vm._l((_vm.seller.supports), function(item, index) {
    return _c('div', {
      staticClass: "seller-deils-item"
    }, [_c('i', {
      staticClass: "type",
      class: "type" + item.type
    }), _vm._v(" "), _c('span', {
      domProps: {
        "textContent": _vm._s(item.description)
      }
    })])
  })], 2), _vm._v(" "), _c('div', {
    staticClass: "live-action seller-info-style"
  }, [_c('h2', [_vm._v("商家实景")]), _vm._v(" "), _c('div', {
    staticClass: "live-imgs"
  }, _vm._l((_vm.seller.pics), function(item, index) {
    return _c('div', {
      staticClass: "live-action-item"
    }, [_c('img', {
      attrs: {
        "src": item
      }
    })])
  }))]), _vm._v(" "), _c('div', {
    staticClass: "seller-info seller-info-style"
  }, [_c('h2', [_vm._v("商家信息")]), _vm._v(" "), _vm._l((_vm.seller.infos), function(item, index) {
    return _c('div', {
      staticClass: "info-item",
      domProps: {
        "textContent": _vm._s(item)
      }
    })
  })], 2)])
},staticRenderFns: [function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "mind"
  }, [_c('div', {
    staticClass: "mind-icon"
  }, [_vm._v("♥")]), _vm._v(" "), _c('div', {
    staticClass: "mind-descript"
  }, [_vm._v("已收藏")])])
}]}

/***/ }),
/* 39 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "goods-main"
  }, [_c('div', {
    staticClass: "goods-wapper"
  }, [_c('ul', {
    staticClass: "type-box"
  }, _vm._l((_vm.goods), function(item, index) {
    return _c('li', {
      staticClass: "type-item",
      class: _vm.selected == index ? 'selected' : '',
      on: {
        "click": function($event) {
          _vm.selectedMethod(index)
        }
      }
    }, [_c('a', {
      domProps: {
        "textContent": _vm._s(item.name)
      }
    })])
  }))]), _vm._v(" "), _c('div', {
    staticClass: "goods-list",
    attrs: {
      "id": "goods"
    }
  }, _vm._l((_vm.goods), function(goodItem, idx) {
    return _c('div', {
      staticClass: "goods-item",
      attrs: {
        "id": "goodItem" + idx
      }
    }, [_c('h3', {
      staticClass: "goods-title",
      domProps: {
        "textContent": _vm._s(goodItem.name)
      }
    }), _vm._v(" "), _c('ul', {
      staticClass: "foods-list"
    }, _vm._l((goodItem.foods), function(foodItem, index) {
      return _c('li', [_c('div', {
        staticClass: "food-img"
      }, [_c('img', {
        attrs: {
          "src": foodItem.icon
        }
      })]), _vm._v(" "), _c('div', {
        staticClass: "food-context"
      }, [_c('p', {
        staticClass: "food-title",
        domProps: {
          "textContent": _vm._s(foodItem.name)
        }
      }), _vm._v(" "), _c('p', {
        staticClass: "food-description",
        domProps: {
          "textContent": _vm._s(foodItem.description)
        }
      }), _vm._v(" "), _c('div', {
        staticClass: "food-description"
      }, [_c('span', [_vm._v("月售" + _vm._s(foodItem.sellCount))]), _vm._v(" "), _c('span', {
        staticStyle: {
          "margin-left": "8px"
        }
      }, [_vm._v("好评率" + _vm._s(foodItem.rating) + "%")])]), _vm._v(" "), _c('div', {
        staticClass: "food-price"
      }, [_c('span', {
        staticClass: "price"
      }, [_vm._v("￥" + _vm._s(foodItem.price))]), _vm._v(" "), _c('span', {
        directives: [{
          name: "show",
          rawName: "v-show",
          value: (foodItem.oldPrice),
          expression: "foodItem.oldPrice"
        }],
        staticClass: "old-price"
      }, [_vm._v("￥" + _vm._s(foodItem.oldPrice))])]), _vm._v(" "), _c('div', {
        staticClass: "change-goods-number"
      }, [_c('a', {
        directives: [{
          name: "show",
          rawName: "v-show",
          value: (_vm.getFoodNum(idx + '-' + index) > 0),
          expression: "getFoodNum(idx+'-'+index)>0"
        }],
        staticClass: "link-change cut",
        on: {
          "click": function($event) {
            _vm.cutFoods(idx + '-' + index)
          }
        }
      }), _vm._v(" "), _c('span', {
        directives: [{
          name: "show",
          rawName: "v-show",
          value: (_vm.getFoodNum(idx + '-' + index) > 0),
          expression: "getFoodNum(idx+'-'+index)>0"
        }],
        staticClass: "num-span",
        domProps: {
          "textContent": _vm._s(_vm.getFoodNum(idx + '-' + index))
        }
      }), _vm._v(" "), _c('a', {
        staticClass: "link-change add",
        on: {
          "click": function($event) {
            _vm.addFoods(idx + '-' + index, foodItem)
          }
        }
      })])])])
    }))])
  }))])
},staticRenderFns: []}

/***/ }),
/* 40 */,
/* 41 */,
/* 42 */
/***/ (function(module, exports) {

/* (ignored) */

/***/ })
],[17]);
//# sourceMappingURL=app.dc837c66344cbc408fa1.js.map