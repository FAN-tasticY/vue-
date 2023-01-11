//import { search } from "core-js/fn/symbol";
import Vue from "vue";
import VueRouter, { isNavigationFailure } from 'vue-router'

//路由懒加载，可以缩小打包的体积 给个回调函数，该函数不是我们调用的，而是系统调用的，当系统寻找该组件的时候就会引入对应的路由就完事了
// import Home from '../pages/Home/Home.vue'
const Home = ()=>{return import('../pages/Home/Home.vue')}

const Login = ()=>{
  return import('../pages/Login/Login.vue')
}

import Search from '../pages/Search/index.vue'
import Register from '../pages/Register/Register.vue'
import Detail from '../pages/Detail/index.vue'
import AddShopingCart from '../pages/AddCartSuccess/index.vue'
import ClearAllMoney from '../pages/ShopCart/index.vue'
import store from '../store/store.js'
import Expense from '../pages/Trade/index.vue'
import Pay from '../pages/Pay/index.vue'
import Center from '../pages/Center'
import PaySuccess from '../pages/PaySuccess'
import MyOrder from '../pages/Center/myOrder'
import MyGroup from '../pages/Center/myGroup'

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



const router = new VueRouter({
    mode:'history',
    routes: [
        {
            path:'/',
            component:Home
        },
        {
            path:'/center',
            component:Center,
            children:[
                {
                    path:'myorder',
                    component:MyOrder
                },
                {
                    path:'mygroup',
                    component:MyGroup
                }

            ],
            //一上来直接就展示那个二级路由就行了
            redirect:'/center/myorder'
        },
        {
            path:'/paysuccess',
            component:PaySuccess,
            beforeEnter:(to,from,next) =>{
                if(from.path === '/pay'){
                    next()
                }else{
                    //spa单页面应用，只要是界面刷新的话，那么就是重新启动我们的界面，所以表达的就是直接访问我们限制的界面，所以被限制住了，要回到首页去。
                    alert('该界面不可直接访问')
                    next('/')
                }
            }
        },
        {
            path:'/pay',
            component:Pay,
            beforeEnter:(to,from,next) =>{
                if(from.path === '/expense' || from.path === '/paysuccess'){
                    next()
                }else{
                    alert('该界面不可直接访问')
                    next('/')
                }
            }
        },
        {
            path:'/expense',
            component:Expense,
            beforeEnter:(to,from,next) =>{
                if(from.path === '/clearAllMoney' || from.path === '/pay'){
                    next()
                }else{
                    alert('该界面不可直接访问')
                    next('/')
                }
            }
        },
        {
            path:'/clearAllMoney',
            component:ClearAllMoney
        },
        {
            path:'/addShopingCart/:skuId?',
            component:AddShopingCart,
            //路由独享守卫 to就代表着当前的路由信息
            beforeEnter:(to,from,next) =>{
                if(to.query.skuId && to.params.skuId){
                    next()
                }else{
                    alert('缺少参数')
                    next('/')
                }
            }
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
            },
            //现在我们来路由独享守卫
            beforeEnter:(to,from,next) => {
                let token = store.state.user.token
                //token存在的话，那么登录页面就不要再去了
                if(token){
                    next('/')
                }else{
                    next()
                }
            }
        },
        {
            //需要携带params参数
            path:'/detail/:skuId?',
            component:Detail
        }
    ],
    scrollBehavior(to, from, savedPosition) {
        // 滚动条始终滚动到顶部
        return { x: 0, y: 0 }
      }
})

//带上了token那么就算作是已经登录了，没有带上token那么就需要登录。
//前置导航守卫，每一次界面发生跳转的时候该函数都会执行
//该守卫是全局守卫，就是整个界面每次发生跳转的话，那么他都会执行的
router.beforeEach(async (to, from, next) => {
    let token = store.state.user.token
    if(token){
        //token存在代表已经登录了，此时用户想要再次登录我们就强制跳转到首页
        //next('/xxx')表示的是放行到哪里 不带上路径的话表示的是直接放行
        if(to.path === '/login'){
            alert('您已登录，无需重复登录')
            next('/')
        }else{
            try {
                //获取用户信息 然后将获取到的用户信息存储在state中
                await store.dispatch('getPersonInfo')
                next()
            } catch (error) {
                alert('token过期了')
                //去往之前想去但是没去成的界面
                next('/login?redirect='+to.path)
            }
        }
        // next()
    }else{
        //如果用户没登录，那么一这些路径开头的地方都去不了
        if(to.path.indexOf('/expense') === 0 || to.path.startsWith('/pay') || to.path.startsWith('/center') || to.path.startsWith('/paysuccess') || to.path.startsWith('/clearAllMoney')){
            alert('请先登录')
            next(`/login?redirect=`+to.path)
            return
        }
        next()
    }
})




export default router