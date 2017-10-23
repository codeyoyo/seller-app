//状态管理
export default (Vuex) => {
    return new Vuex.Store({
        state: {
            totalMoney: 0,
            productArray: []
        },
        mutations: {
            setTotalMoney(state, num) {
                state.totalMoney = num;
            },
            mathTotalMoney(state, array) {
                let total = 0;
                for (let i = 0; i < array.length; i++) {
                    let item = array[i];
                    total += (item.count * item.price);
                }
                state.totalMoney = total;
            },
            setProductArray(state, obj) {
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
            }
        },
        getters: {
            getTotalMoney(state) {
                return state.totalMoney;
            },
            getProductById: (state, getters) => (id) => {
                for (let i = 0; i < state.productArray.length; i++) {
                    var item = state.productArray[i];
                    if (item.id == id) {
                        return item;
                    }
                }
                return false;
            }
        }
    });
}