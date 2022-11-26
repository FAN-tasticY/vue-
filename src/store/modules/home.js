import Vue from "vue";
import Vuex from 'vuex'
import {getCategoryListFunction,getBannerListFunction,getFloorListFunction,getTodayRecommendFunction} from '../../api/index'

Vue.use(Vuex)

const state = {
    categoryList:[],
    bannerList:[],
    floorList:[],
    todayRecommend:''
}

const mutations = {
    //state就是上面的那个对象 具体怎么拿到的我也不知道
    RECIVE_CATEGORYLIST_DATA(state,resultData){
        state.categoryList = resultData
    },
    RECIVE_BANNERLIST_DATA(state,resultData){
        state.bannerList = resultData
    },
    //这里应该就是底层将state这个对象传递给我们了 应该就是这么回事
    RECIVE_FLOORLIST(woaini,resultData){
        woaini.floorList = resultData
    },
    RECIVE_TODAYRECOMMEND(state,resultData){
        state.todayRecommend = resultData
    }
}

const actions = {
    async getCategoryList({commit}){
        console.log('我执行了吗');
        const result = await getCategoryListFunction()
        if(result.code === 200) {
            commit('RECIVE_CATEGORYLIST_DATA',result.data)
        }
    },


    async getBannerList({commit}){
        const result = await getBannerListFunction()
        if(result.code === 200){
            commit('RECIVE_BANNERLIST_DATA',result.data)
        }
    },

    async getFloorList({commit}){
        const result = await getFloorListFunction()
        if(result.code === 200){
            commit('RECIVE_FLOORLIST',result.data)
        }
    },

    async getTodayRecommend({commit}){
        const result = await getTodayRecommendFunction()
        if(result.code === 200){
            //应该是一个对象吧
            console.log(result.data);
            commit('RECIVE_TODAYRECOMMEND',result.data)
        }
    }
}

const getters = {

}

//卧槽卧槽 这里没有进行new这个操作 直接暴露的？？？ 我是真的醉了啊 呜呜呜呜
export default {
    state,
    mutations,
    actions,
    getters
}