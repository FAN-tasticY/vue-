<template>
  <!-- 商品分类导航 -->
  <!-- 现在他是一个全局组件 -->
  <div class="type-nav">
    <div class="container">
      <div @mouseleave="onMouseLeave" @mouseenter="onMouseEnter">
        <h2 class="all">全部商品分类</h2>
        <div class="sort"  v-show="isFirst">
          <!-- 这里使用了事件委派 然后是给这个父元素绑定一个点击事件啊 给那些小的元素绑定那个data什么东西啊-->
          <div class="all-sort-list2" @click="toSearch">
            <!-- 使用了for循环肯定会自动生成很多个标签的 该标签连带着整体内部的标签都会被生成的 -->
            <div class="item bo" v-for="(c1,index) in categoryListData" :key="c1.categoryId" :class="{active:currentIndex === index}" @mouseenter="showSubList(index)" >
              <h3>
                <!-- data-xxx属性被称之为标签自定义属性 -->
                <a href="javascript:" 
                :data-categoryName='c1.categoryName'
                :data-category1Id='c1.categoryId'
                >{{c1.categoryName}}</a>
                <!-- <a href="javascript:;" @click="$router.push(`/search/${c1.categoryId}?content=${c1.categoryName}`)">{{c1.categoryName}}</a> -->
                <!-- <router-link :to="`/search/${c1.categoryName}?content=${c1.categoryId}`">{{c1.categoryName}}</router-link> -->
              </h3>
              <div class="item-list clearfix">
                <div class="subitem">
                  <dl class="fore" v-for="c2 in c1.categoryChild" :key="c2.categoryId">
                    <dt>
                      <a href="javascript:" 
                      :data-categoryName='c2.categoryName'
                      :data-category2Id='c2.categoryId'
                      >{{c2.categoryName}}</a>
                    </dt>
                    <dd>
                      <!-- 哎呀卧槽这个是访问不到的意思吗？ 现在是不是就好使了？-->
                      <em v-for="c3 in c2.categoryChild" :key="c3.categoryId">
                        <a href="javascript:"
                        :data-categoryName='c3.categoryName'
                        :data-category3Id='c3.categoryId'
                        >{{c3.categoryName}}</a>
                      </em>
                    </dd>
                  </dl>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <nav class="nav">
        <a href="###">服装城</a>
        <a href="###">美妆馆</a>
        <a href="###">尚品汇超市</a>
        <a href="###">全球购</a>
        <a href="###">闪购</a>
        <a href="###">团购</a>
        <a href="###">有趣</a>
        <a href="###">秒杀</a>
      </nav>
    </div>
  </div>
</template>
<script>
import throttle from 'lodash/throttle'
export default {
  //就从背景色入手吧
  name: 'TypeNav',
  data(){
    return {
      currentIndex:-2,
      preTime:0,
      isFirst:false
    }
  },
  computed:{
    categoryListData:{
      get(){
        return this.$store.state.home.categoryList
      }
    }
  },
  methods:{
    toSearch(event){
      const target = event.target
      //判断只有是a标签的时候才进行跳转
      const {categoryname,category1id,category2id,category3id} = target.dataset
      console.log(target.dataset);
      if(target.tagName.toUpperCase() === 'A'){
        const query = {
          categoryName:categoryname,
        }
        if(category1id){
          query.category1Id = category1id
        }else if(category2id){
          query.category2Id = category2id
        }else if(category3id){
          query.category3Id = category3id
        }
        //请求肯定是在这里进行发送的 因为这里之外访问不到这个对象的
        this.$router.push({
          name:'YFwoaini',
          query,
          //如果携带了params参数那么就带着 没携带的话那么就不带着
          params:this.$route.params
        },()=>{})
      }
    },
    //自己写的有问题 最后一次不执行
    changeState(index){
      //我说现在效果实现了 你相信吗？？？ 我们这就实现了函数的节流效果
      // this.currentIndex = index
      this.throttle(function(){
        // console.log(this);
        this.currentIndex = index
      },200).call(this)
      // result.call(this)
    },
    throttle(callback,delay){
      return function(event){
        let currentTime = Date.now()
        if(currentTime - this.preTime > delay){
          // 我知道了这里面的this指向应该是window才对 由于是在组件里面 所以禁止指向window了
          callback.call(this)
          this.preTime = currentTime
        }
      }
    },
    showSubList:throttle(function(index){
      //回调函数不可以写箭头函数 因为箭头函数指定不了this
      if(this.currentIndex !== -2){
        this.currentIndex = index
      }
    },500/* ,{
      trailing:false
      这个配置加上了最后一次事件就不执行了
    } */),
    onMouseEnter(){
      this.currentIndex = -1
      this.isFirst = true
      if(this.$route.path === '/'){
        this.isFirst = true
      }
    },
    onMouseLeave(){
      this.currentIndex = -2
      this.isFirst = false
      if(this.$route.path === '/'){
        this.isFirst = true
      }
    }

  },
  mounted(){
    if(this.$route.path === '/'){
      this.isFirst = true
    }
  }
}
</script>

<style  lang="less" scoped>
.type-nav {
  border-bottom: 2px solid #e1251b;

  .container {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    position: relative;

    .all {
      width: 210px;
      height: 45px;
      background-color: #e1251b;
      line-height: 45px;
      text-align: center;
      color: #fff;
      font-size: 14px;
      font-weight: bold;
    }

    .nav {
      a {
        height: 45px;
        margin: 0 22px;
        line-height: 45px;
        font-size: 16px;
        color: #333;
      }
    }

    .sort {
      position: absolute;
      left: 0;
      top: 45px;
      width: 210px;
      height: 461px;
      position: absolute;
      background: #fafafa;
      z-index: 999;

      .all-sort-list2 {
        .item {
          h3 {
            line-height: 30px;
            font-size: 14px;
            font-weight: 400;
            overflow: hidden;
            padding: 0 20px;
            margin: 0;

            a {
              color: #333;
            }
          }

          .item-list {
            display: none;
            position: absolute;
            width: 734px;
            min-height: 460px;
            _height: 200px;
            background: #f7f7f7;
            left: 210px;
            border: 1px solid #ddd;
            top: 0;
            z-index: 9999 !important;

            .subitem {
              float: left;
              width: 650px;
              padding: 0 4px 0 8px;

              dl {
                border-top: 1px solid #eee;
                padding: 6px 0;
                overflow: hidden;
                zoom: 1;

                &.fore {
                  border-top: 0;
                }

                dt {
                  float: left;
                  width: 54px;
                  line-height: 22px;
                  text-align: right;
                  padding: 3px 6px 0 0;
                  font-weight: 700;
                }

                dd {
                  float: left;
                  width: 415px;
                  padding: 3px 0 0;
                  overflow: hidden;

                  em {
                    float: left;
                    height: 14px;
                    line-height: 14px;
                    padding: 0 8px;
                    margin-top: 5px;
                    border-left: 1px solid #ccc;
                  }
                }
              }
            }
          }

          // 这个and符说的是父级引用  他的意思就是给父元素绑定一个hover (也就是说在这里指的就是item了啊真的是) 然后就是在决定他的子元素干什么东西吧  
          // 这里不加上这个and符 那么就是给他的子元素绑定一个hover了
         /*  &:hover {
            .item-list {
              display: block;
            }
          } */
          &.active{
              background-color: #ccc;
              .item-list{
                display: block;
              }
          }
        }
      }
    }
  }
}

</style>
