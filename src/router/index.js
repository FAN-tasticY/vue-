//import { search } from "core-js/fn/symbol";
import Vue from "vue";
import VueRouter, { isNavigationFailure } from 'vue-router'


import Home from '../pages/Home/Home.vue'
import Login from '../pages/Login/Login.vue'
import Search from '../pages/Search/index.vue'
import Register from '../pages/Register/Register.vue'

Vue.use(VueRouter)



/* const originalPush = VueRouter.prototype.push
const originalReplace = VueRouter.prototype.replace
VueRouter.prototype.push = function(location,onResolve,onReject){
    //原型链上面的方法是给构造函数用的
    if(onResolve || onReject){  
        console.log('我执行了',this);
        return originalPush.call(this,location,onResolve,onReject)
    }
    return originalPush.call(this,location).catch((error)=>{
      console.log('我只是想知道我执行了吗');
      if(VueRouter.isNavigationFailure(error)){
        return error
      }
      //难道说他的内部进行了链式调用是吗
      return Promise.reject(error)
    })
} */



export default new VueRouter({
    mode:'history',
    routes: [
        {
            path:'/',
            component:Home
        },
        {
            name:'YFwoaini',
            //问号代表没有或者是一个知道吗
            path:'/search/:keyword?',
            component:Search,
            props:true
        },
        {
            path:'/register',
            component:Register,
            //登录还有注册的时候不要底部栏 其余人没有这个属性 所以就是undfined了
            meta:{
                isHideFooter:true
            }
        },
        {
            path:'/login',
            component:Login,
            meta:{
                isHideFooter:true
            }

        }
    ]
})