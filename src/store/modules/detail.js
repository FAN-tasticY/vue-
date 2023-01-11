import Vue from "vue";
import Vuex from 'vuex'
import {getDetailInfo} from '../../api/index.js'

Vue.use(Vuex)

const state = {
    detailInfoObj : {}
}

const mutations = {
    RECIVE_DETAILINFODATA(state,resultData){
        state.detailInfoObj = resultData
    }
}

const actions = {
    async getDetailInfoData({commit},skuId){
        const result = await getDetailInfo(skuId)
        if(result.code === 200){
            commit('RECIVE_DETAILINFODATA',result.data)
        }
    }
}

const getters = {
    //使用这个可以简化 注意数据没出来时候，需要指定数据类型，否则出现假性错误
    categoryView(){
        return state.detailInfoObj.categoryView || {}
    },
    skuInfo(){
        return state.detailInfoObj.skuInfo || {}
    },
    spuSaleAttrList(){
        return state.detailInfoObj.spuSaleAttrList || []
    }
}

export default {
    state,
    mutations,
    actions,
    getters
}