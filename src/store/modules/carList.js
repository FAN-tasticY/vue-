import Vue from "vue";
import Vuex from 'vuex'
import {getCarList} from '../../api/index.js'

Vue.use(Vuex)

const state = {
    carList:[]
}
const mutations = {
    RECEIVE_DATA(state,data){
        state.carList = data

    }
}
const actions = {
    async getCarList({commit},{num,goodsNum,index}){
        const result = await getCarList(num,goodsNum,index)
        if(result.code === 200){
            commit('RECEIVE_DATA',result.data)
        }

    }
}
const getters = {}

export default {
    state,
    mutations,
    actions,
    getters
}