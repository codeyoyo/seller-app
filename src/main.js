import Vue from 'vue';
import App from './App';
import router from './router';
import VueResource from 'vue-resource';
import Vuex from 'vuex';
import vuex_store from './store';

Vue.use(VueResource);
Vue.use(Vuex);

new Vue({
    el: '#app',
    router,
    template: '<App/>',
    components: { App },
    store: vuex_store(Vuex)
});