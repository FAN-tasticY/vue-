<template>
  <div>
    <TypeNav />
    <!--列表-->
    <ListContainer />
    <!--今日推荐-->
    <TodayRecommend />
    <!-- 商品排行 -->
    <Rank />
    <!-- 猜你喜欢 -->
    <Like />
    <!--楼层-->
    <Floor v-for="(item, index) in floorList" :key="index" :floorListDataObj="item"/>
    <!--商标-->
    <Brand />
  </div>
</template>

<script>
  import Brand from './Brand/Brand.vue'
  import Floor from './Floor/Floor.vue'
  import Like from './Like/Like.vue'
  import ListContainer from './ListContainer/ListContainer.vue'
  import Rank from './Rank/Rank.vue'
  import TodayRecommend from './TodayRecommend/TodayRecommend.vue'

  import {mapState} from 'vuex'

  export default {
    name: 'Home',
    components: {
      Brand,
      Floor,
      Like,
      ListContainer,
      Rank,
      TodayRecommend,
    },
    computed:{
      ...mapState({
        floorList:state => state.home.floorList
      })
    },
    methods:{
      test(){
        console.log('数据拿到了吗');
        console.log(this.floorList);
      }
    }
  }
</script>

<style lang="less" scoped>

</style>