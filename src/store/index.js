import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const localDB = {
    "page1": [
        { "id": 1, "date": "20.03.2020", "category": "Food", "value": 169 },
        { "id": 2, "date": "21.03.2020", "category": "Navigation", "value": 50 },
        { "id": 3, "date": "22.03.2020", "category": "Sport", "value": 450 }
    ],
    "page2": [
        { "id": 4, "date": "23.03.2020", "category": "Entertaiment", "value": 969 },
        { "id": 5, "date": "24.03.2020", "category": "Education", "value": 1500 },
        { "id": 6, "date": "25.03.2020", "category": "Food", "value": 200 }
    ],
    "page3": [
        { "id": 7, "date": "23.03.2020", "category": "Sport", "value": 100 },
        { "id": 8, "date": "24.03.2020", "category": "Education", "value": 500 },
        { "id": 9, "date": "25.03.2020", "category": "Food", "value": 200 }
    ],
    "page4": [
        { "id": 10, "date": "23.03.2020", "category": "Food", "value": 900 },
        { "id": 11, "date": "24.03.2020", "category": "Education", "value": 100 },
        { "id": 12, "date": "25.03.2020", "category": "Sport", "value": 100 }
    ]
}

export default new Vuex.Store({
    state: {
        paymentsList: [],
        categoryList: [],
        paymentsListIDs: []
    },
    mutations: {
        setPaymentsListData(state, payload) {
            state.paymentsList = payload
        },
        addDataToPaymentList(state, payload) {
            state.paymentsList.push(payload)
        },
        setCategories(state, payload) {
            state.categoryList = payload
        },
        addCategories(state, payload) {
            state.categoryList.push(payload)
        }
    },
    getters: {
        getCategoryList: state => state.categoryList,
        getPaymentList: state => state.paymentsList,
        getFullPaymentValue: state => {
            return state.paymentsList.reduce((res,cur) => res + cur.value, 0)
        },
    },
    actions: {
        fetchData({commit}, page){
            return new Promise((resolve) => {
                setTimeout(()=>{
                    const items = localDB[`page${page}`]
                    resolve (items)
                },1000)
            })
                .then (res => commit('setPaymentsListData', res))
        },
        // fetchData({commit}){
        //     return new Promise(resolve => {
        //         setTimeout(()=>{
        //             const items= []
        //             for (let i =1; i<100; i++){
        //                 items.push({
        //                     date: Date.now(),
        //                     category: 'Food',
        //                     id: i,
        //                     value:i
        //                 })
        //             }
        //             resolve (items)
        //         }, 1500)
        //     }).then(res => {
        //         commit('setPaymentsListData', res)
        //         })
        // },
        loadCategories ({commit}) {
            return new Promise((resolve) => {
                // имитируем работу с сетью
                setTimeout(() => {
                    resolve(['Food', 'Transport', 'Education', 'Entertainment','Sport'])
                }, 1000)
            })
                .then(res => {
                    // запускаем изменение состояния через commit
                    commit('setCategories', res)
                })
        },
    },
})

