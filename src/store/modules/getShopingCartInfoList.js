import Vue from "vue";
import Vuex from 'vuex'
import {getShopingCartInfo} from '../../api'

Vue.use(Vuex)

const state = {
    getShopingCartInfoList:''
}

const mutations = {
    RECEIVE_DATA(state,data){
        state.getShopingCartInfoList = data
    }
}

const actions = {
    async getShopingCartInfo({commit}){
        const result = await getShopingCartInfo()
        if(result.code === 200){
            commit('RECEIVE_DATA',result.data)
        }
    }
}

const getters = {
    getShopingCartInfoList(state){
        return state.getShopingCartInfoList || []
    }
}

export default {
    state,
    mutations,
    actions,
    getters
}