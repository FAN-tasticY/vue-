import Vue from "vue";
import Vuex from "vuex"
import {postAddShopingCart} from '../../api/index.js'

Vue.use(Vuex)

const state = {}
const mutations = {}

const actions = {
    //现在好像就是说，只要是函数加上了async的话，那么返回的实例就一定是promise实例
    async judge({commit},{skuId,skuNum}){
        const result = await postAddShopingCart(skuId,skuNum)
        if(result.code === 200){
            return 'ok'
        }else{
            return Promise.reject(new Error('实例失败了'))
        }
    },



    change({commit}){
        return "我就是返回值你造吗"
    }
}

const getters = {}

export default {
    state,
    mutations,
    actions,
    getters
}