import Vue from "vue";
import Vuex from 'vuex'
import {addUserInfo,getUserInfo,getPersonInfo} from '../../api'
import {setToken,getToken,removeToken} from '../../utools/uuidFunction.js'
Vue.use(Vuex)

const state = {
    //下一次登录的时候，如果token存在了，那么往登录界面跳转的时候就不好使，往登录界面跳转的话那么就会强制跳转到首页呀
    token:getToken(),
    personInfo:false
}

const mutations ={
    RECEIVE_TOKEN(state,token){
        state.token = token
    },
    GET_PERSON_INFO(state,data){
        state.personInfo = data
    },
    CHANGE_STATE(state){
        state.personInfo = false
        state.token = null
    }
}

const actions = {
    //添加数据
    async addUserInfo({commit},userInfo){
        const result = await addUserInfo(userInfo)
        if(result.code === 200){
            return 'ok'
        }else{
            return Promise.reject(new Error('failed'))
        }
    },
    
    //校验用户是否存在 (登录的时候需要做的事)
    async getUserInfo({commit},userInfo){
        const result = await getUserInfo(userInfo)
        if(result.code === 200){
            commit('RECEIVE_TOKEN',result.token)
            setToken(result.token)
            return 'ok'
        }else{
            return Promise.reject(new Error('failed'))
        }
    },

    //获取用户信息
    async getPersonInfo({commit}){
        const result = await getPersonInfo()
        if(result.code === 200){
            commit('GET_PERSON_INFO',result.name)
            return 'ok'
        }else{
            return Promise.reject(new Error('failed'))
        }
    },

    //将state状态变为false
    changeFalse({commit}){
        commit('CHANGE_STATE')
    }
}

const getters = {}

export default{
    state,
    mutations,
    actions,
    getters
}