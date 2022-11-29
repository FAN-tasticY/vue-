import Vue from "vue";
import Vuex from 'vuex'
import home from './modules/home'
import search from "./modules/search";
import {getCategoryListFunction} from '../api/index.js'
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
        search
    }
})
