import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
import TypeNav from './components/TypeNav.vue'
import store from './store/store.js'
import './mock/mock.js'
//引入过来就是可以建立联系 不建立联系就没法使用啦 只有建立了联系那么才可以使用的
import './plugins/swiper.js'
import './plugins/element.js'
import 'nprogress/nprogress.css'
import MyPagination from './components/pagination/myPagination.vue'
import * as API from './api/index.js'
import './plugins/validate.js'


Vue.config.productionTip = false
//全局注册组件
Vue.component(TypeNav.name,TypeNav)
Vue.component(MyPagination.name,MyPagination)



// 全局事件总线还可以这样写
// Vue.prototype.$bus = new Vue()

new Vue({
  //啊 这个是初始化之前吧
  beforeCreate(){
    Vue.prototype.$store = store
    //this代表new Vue的自身
    Vue.prototype.$bus = this
    Vue.prototype.$API = API
  },
  // store,
  render: h => h(App),
  router,
}).$mount('#app')

//哈哈 讲真的我还是真的很喜欢敲代码的 真的啊 对呀虽然我也不知道这是为什么
//Vue.prototype.$store = this/store