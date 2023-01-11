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
        //非空校验
        function verify_of_empty(){
            paramsObj = {...paramsObj}
            Object.keys(paramsObj).forEach((key)=>{
                if(paramsObj[key] === '' || (Array.isArray(paramsObj[key]) && paramsObj[key].length === 0 ) ){
                    delete paramsObj[key]
                }
            })
        }
        verify_of_empty()

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
    //可能有人一上来就访问，但是此时数据还没有准备好呢，所以就给他指定的数据

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
    },
    total(state){
        return state.searchListData.total || 0
    }
}

export default {
    state,
    mutations,
    actions,
    getters
}