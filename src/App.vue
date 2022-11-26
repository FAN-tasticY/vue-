<template>
  <div>
    <Header></Header>
    <router-view></router-view>
    <Footer v-show="!$route.meta.isHideFooter"></Footer>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
export default {
    components:{
        Header,
        Footer
    },
    mounted(){
      //使用dispatch调用vuex里面的函数
      //组件就是相当于Vue的实例对象，就先当作是vm吧 然后自身找不到的属性就去Vue身上的prototype寻找去
      this.$store.dispatch('getCategoryList')
      this.$store.dispatch('getBannerList')
      this.$store.dispatch('getFloorList')
      this.$store.dispatch('getTodayRecommend')
    },
    methods:{

    }
    
    
}
</script>

<style>
  
</style>