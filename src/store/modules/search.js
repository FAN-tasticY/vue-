import Vue from "vue";
import Vuex from 'vuex'
//啊啊啊 对面的那个文件是分别暴露的而不是默认暴露的所以就是需要加上大括号才是对劲的
import {getSearchSelectorListFunction, postSearchListFunction} from '../../api/index.js'
Vue.use(Vuex)


const state = {
    searchListData:{},
    searchSelectorList:''
}

const mutations = {
    RECIVE_SEARCHLISTDATA(state,resultData){
        state.searchListData = resultData
    },
    RECIVE_SEARCHSELECTORLIST(state,resultData){
        state.searchSelectorList = resultData
    }
}

const actions = {
    async postSearchListData({commit},paramsObj){
        const result = await postSearchListFunction(paramsObj)
        if(result.code === 200){
            commit('RECIVE_SEARCHLISTDATA',result.data)
        }
    },

    async getSearchSelectorList({commit},paramsObj){
        const result = await getSearchSelectorListFunction(paramsObj)
        if(result.code === 200){
            commit('RECIVE_SEARCHSELECTORLIST',result.data)
        }
    }
}

const getters = {
    //商品列表
    goodsList(state){
        return state.searchListData.goodsList || []
    },
    //品牌列表
    trademarkList(state){
        return state.searchListData.trademarkList || []
    },
    //属性列表
    attrsList(state){
        return state.searchListData.attrsList || []
    }
    //为什么要加上空数组 因为一上来有可能拿不到数据 这样写不至于报错
}

export default {
    state,
    mutations,
    actions,
    getters
}