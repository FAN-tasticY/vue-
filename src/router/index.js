//import { search } from "core-js/fn/symbol";
import Vue from "vue";
import VueRouter, { isNavigationFailure } from 'vue-router'


import Home from '../pages/Home/Home.vue'
import Login from '../pages/Login/Login.vue'
import Search from '../pages/Search/Search.vue'
import Register from '../pages/Register/Register.vue'

//嘿嘿 反正我初步判断就是版本问题知道吗 反正应该就是版本问题喽真的是 嘿嘿
Vue.use(VueRouter)

//现在是内容一样 内容一样然后两次点击就会报错问题 我们进行解决一下 手动解决修改源码


//不好使 不知道为啥现在
/* const originalPush = VueRouter.prototype.push
const originalReplace = VueRouter.prototype.replace
VueRouter.prototype.push = function(location,onResolve,onReject){
    //原型链上面的方法是给构造函数用的
    if(onResolve || onReject){  
        console.log('我执行了',this);
        //什么意思 函数直接在这里执行，this就指向window吗
        //因为 可能是直接进行的函数调用 钱没没有任何的前缀 所以直接就是window了 然后使用call就可以修改this指向了
        return originalPush.call(this,location,onResolve,onReject)
    }
    return originalPush.call(this,location).catch((error)=>{
      //参数没传递的话就将错误抓住
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
            path:'/search/:keyword',
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