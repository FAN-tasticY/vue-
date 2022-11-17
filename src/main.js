import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
import TypeNav from './components/TypeNav.vue'

Vue.config.productionTip = false

//全局注册组件
Vue.component(TypeNav.name,TypeNav)

new Vue({
  render: h => h(App),
  router
}).$mount('#app')

//哈哈 讲真的我还是真的很喜欢敲代码的 真的啊 对呀虽然我也不知道这是为什么
//Vue.prototype.$store = this/store