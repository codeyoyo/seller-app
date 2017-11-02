import Vue from 'vue';
import product from './index.vue';

let productComponent = Vue.extend(product);
var p = undefined;

export default (food, isShow, idx, ratings, store) => {
    if (p == undefined) {
        var box = document.createElement('div');
        document.body.appendChild(box);
        let p = new productComponent({
            el: box,
            propsData: {
                food,
                isShow,
                idx,
                ratings,
                store
            }
        });
    } else {
        p.propsData = {
            food,
            isShow,
            idx,
            ratings,
            store
        };
    }
}