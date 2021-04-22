import Vue from 'vue'
import Vuex from 'vuex'


import productsStore from './productsStore';
import userStore from './userStore';
import cartStore from './cartStore';

Vue.use(Vuex)

export default new Vuex.Store({
    strict: true,
    state: {
    },
    mutations: {
    },
    actions: {
    },
    modules: {
        productsStore,
        userStore,
        cartStore
    }
})
