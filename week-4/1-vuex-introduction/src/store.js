import { createStore } from 'vuex';

const store = createStore({
    state: {
        user: {
            name: "Tolga",
            lname: "Işık",
            age: "23",
            address: {},
            password: 51353131,
        },
        theme: "dark",
        fullName: "Tolga Işık",
        permissions: [1, 2, 3, 4, 5],
        userList: ['Tolga', 'İkbal'],
        itemList: [
            { id: 1, title: "Masa", type: "mobilya" },
            { id: 2, title: "TV", type: "elektronik" }
        ]
    },
    mutations: { //burası database e attığınız isteği beklemez direkt boş veri ile set eder bunu önlemek için asenkron işlemler için action kullanılır
        newItem(state, item) {
            state.itemList.push(item);

        }
    },
    actions: {
        newItem({ commit }, item) {
            setTimeout(() => {
                //context.commit("newItem", item)
                commit("newItem", item)
            }, 2000);
        }
    },
    getters: {
        _woodItems: state => state.itemList.filter(i => i.type == "mobilya"),
        _activeUser(state) {
            const user = {
                ...state.user
            };
            delete user.password;
            return user;
        }
    }
});

export default store;