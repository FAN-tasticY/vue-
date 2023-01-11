import Vue from "vue";
import Vuex from 'vuex'
import home from './modules/home'
import search from "./modules/search";
import detail from './modules/detail'
import addCart from './modules/addCart'
import getCarList from './modules/carList'
import user from './modules/user.js'
import getShopingCartInfoList from './modules/getShopingCartInfoList.js'
Vue.use(Vuex)

const state = {
    name:'nihao'
}

const mutations = {

}

const actions = {

}

const getters = {
    nihao(state){
        return 'woaini'
    }
}


export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters,
    modules:{
        home,
        search,
        detail,
        addCart,
        getCarList,
        user,
        getShopingCartInfoList
    }
})
