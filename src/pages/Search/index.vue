<template>
  <div>
    <TypeNav />
    <div class="main">
      <div class="py-container">
        <!--bread-->
        <div class="bread">
          <ul class="fl sui-breadcrumb">
            <li>
              <a href="#">全部结果</a>
            </li>
          </ul>
          <ul class="fl sui-tag">
            <!-- 显示头部的列表 -->
            <li class="with-x" v-if="options.categoryName">
              {{this.options.categoryName}}
              <i @click="removeCategoryName" >×</i>
            </li>
            <li class="with-x" v-if="options.keyword">
              {{this.options.keyword}}
              <i @click="removeKeyword" >×</i>
            </li>
          </ul>
        </div>

        <!--selector-->
        <SearchSelector :setUpdata="setUpdata"/>

        <!--details-->
        <div class="details clearfix">
          <div class="sui-navbar">
            <div class="navbar-inner filter">
              <ul class="sui-nav">
                <li :class="{active:orderArr[0] === '1'}" @click="setOrder('1')">
                  <a href="javascript:;">
                    综合<i v-if="orderArr[0] === '1'" class="iconfont" :class="orderArr[1] === 'desc' ? 'icon-jiantou_xiangxia_o' : 'icon-jiantou_xiangshang_o' "></i>
                  </a>
                </li>
                <li>
                  <a href="javascript:;">销量</a>
                </li>
                <li>
                  <a href="javascript:;">新品</a>
                </li>
                <li>
                  <a href="javascript:;">评价</a>
                </li>
                <li :class="{active:orderArr[0] === '2'}" @click="setOrder('2')">
                  <a href="javascript:;">
                    价格<i v-if="orderArr[0] === '2'" class="iconfont" :class="orderArr[1] === 'desc' ? 'icon-jiantou_xiangxia_o' : 'icon-jiantou_xiangshang_o' "></i>
                  </a>
                </li>
                <li>
                  <a href="javacript:;">{{goodsList.length}}</a>
                </li>
              </ul>
            </div>
          </div>
          <div class="goods-list">
            <ul class="yui3-g">
              <li class="yui3-u-1-5" v-for="item in goodsList" :key="item.id">
                <div class="list-wrap">
                  <div class="p-img">
                    <router-link :to=" '/detail/' + item.id ">
                      <img :src="item.defaultImg" />
                    </router-link>
                  </div>
                  <div class="price">
                    <strong>
                      <em>¥</em>
                      <i>{{item.price}}</i>
                    </strong>
                  </div>
                  <div class="attr">
                    <router-link :to=" '/detail/'+item.id ">
                      {{item.title}}
                    </router-link>
                    <!-- <a href="javacript:">{{item.title}}</a> -->
                  </div>
                  <div class="commit">
                    <i class="command">已有<span>2000</span>人评价</i>
                  </div>
                  <div class="operate">
                    <a href="javascript:"  class="sui-btn btn-bordered btn-danger">加入购物车</a>
                    <a href="javascript:void(0);" class="sui-btn btn-bordered">收藏</a>
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <!-- 这个文件是pagition的父元素 -->
          <!-- <div class="fr page">
            <div class="sui-pagination clearfix">
              <ul>
                <li class="prev disabled">
                  <a href="javascript:;" @click="test2()">«上一页</a>
                </li>
                <li class="active">
                  <a href="#">1</a>
                </li>
                <li>
                  <a href="#">2</a>
                </li>
                <li>
                  <a href="#">3</a>
                </li>
                <li>
                  <a href="#">4</a>
                </li>
                <li>
                  <a href="#">5</a>
                </li>
                <li class="dotted"><span>...</span></li>
                <li class="next">
                  <a href="javascript:;" @click="test()"> 下一页»</a>
                </li>
              </ul>
              <div><span>共10页&nbsp;</span></div>
            </div>
          </div> -->
          
          
          <myPagination
          :currentPage = "this.options.pageNo"
          :total = "total"
          :showPages = 5
          :pageSize = "this.options.pageSize"
          @currentChange = "reqPost"
          
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import SearchSelector from './SearchSelector/SearchSelector'
  import {mapState} from 'vuex'
  import {mapGetters} from 'vuex'
  export default {
    name: 'Search',
    components: {
      SearchSelector
    },
    data(){
      return {
          options:{
            category1Id:'',
            category2Id:'',
            category3Id:'',
            categoryName:'',
            keyword:'',

            props:[],
            trademark:'1',
            order:'1:desc',
            
            pageNo:1,
            pageSize:2
          }
      }
    },
    //在created里面写效率会更高一点
    // created(){
    //   //typenavm没有发送请求 请求是在这里发的
    //   this.updataParams()
    //   this.reqPost()
    // },
    computed:{
      // ...mapState({
      //   goodsList:state => state.search.searchListData.goodsList || []
      // })
      ...mapGetters(['goodsList','total']),

      orderArr(){
        return this.options.order.split(':')
      }
    },
    methods:{
      updataParams(){
          const {keyword} = this.$route.params
          const {categoryName,category1Id,category2Id,category3Id} = this.$route.query
          //this.options.categoryName = categoryName
          this.options = {
            ...this.options,
            //keyword:keyword
            keyword,
            categoryName,
            category1Id,
            category2Id,
            category3Id
          }
      },
      reqPost(page = 1){
        //typeNav那个点击一下只是跳转路由了 请求是在这里发的
        //这里是页面更新了 然后请求就发送了 页面不更新请求就不会发送
        this.options.pageNo = page
        this.$store.dispatch('postSearchListData',this.options)
      },
      removeCategoryName(){
        //好像是不发送请求他会认为keyword没有
        this.options.categoryName = ''
        this.reqPost()
        // this.$route.query = {}    //啊只读参数不可以修改的啊 那我好像知道怎么搞了
        //为什么这里发送请求了，因为这里是进行了组件的跳转 界面重新显示之后然后重新加载，请求发送了
        //当前搜索页面跳转搜索页面的话，那么使用replace
        this.$router.replace({
          name:'YFwoaini',
          params:this.$route.params,
          query:''
        },()=>{})
      },
      removeKeyword(){
        this.options.keyword = ''
        this.reqPost()
        this.$router.replace({
          name:'YFwoaini',
          params:'',
          query:this.$route.query
        },()=>{})

        this.$bus.$emit('clearInputContent')

      },
      setUpdata(data){
        //就是data传递过来了然后就是发送请求啊 先更新数据 然后再发送请求就可以了
        if(this.options.keyword === data) return
        this.options.keyword = data
        this.reqPost()
      },
      setOrder(orderFlag){
        //数组进行解构赋值 可以随意起名字和对不一样
        let [num,type] = this.orderArr
        if(num === orderFlag){
          type = type === 'desc' ? 'asc' : 'desc'
        }else{
          num = orderFlag
          type = 'desc'
        }
        // this.options.order = num + ':' + type
        this.$set(this.options,'order',num+':'+type)  //使用这条语句 不是响应式的可以变为响应式的
        // this.updataParams()
        this.reqPost()
      }
    },
    //监视路径的变化 如果是第一次点击的话那么不算是改变
    //为什么要使用这个监视呢，因为当前的路由已经是search了所以他就是不会在进行页面的更新了，他只是会进行参数的更新
    //所以我们使用watch监视参数，参数发生改变那么就发送请求
    watch:{
      $route:{
        handler:function(newVal,oldVal){
          this.updataParams()
          this.reqPost()
        },
        immediate:true
      }
      // $route(newVal,oldVal){
      //   this.updataParams()
      //   //参数发生变化，重新发送请求，更新状态数据
      //   this.reqPost()
      // }
    }
  }
</script>

<style lang="less" scoped>
  .main {
    margin: 10px 0;

    .py-container {
      width: 1200px;
      margin: 0 auto;

      .bread {
        margin-bottom: 5px;
        overflow: hidden;

        .sui-breadcrumb {
          padding: 3px 15px;
          margin: 0;
          font-weight: 400;
          border-radius: 3px;
          float: left;

          li {
            display: inline-block;
            line-height: 18px;

            a {
              color: #666;
              text-decoration: none;

              &:hover {
                color: #4cb9fc;
              }
            }
          }
        }

        .sui-tag {
          margin-top: -5px;
          list-style: none;
          font-size: 0;
          line-height: 0;
          padding: 5px 0 0;
          margin-bottom: 18px;
          float: left;

          .with-x {
            font-size: 12px;
            margin: 0 5px 5px 0;
            display: inline-block;
            overflow: hidden;
            color: #000;
            background: #f7f7f7;
            padding: 0 7px;
            height: 20px;
            line-height: 20px;
            border: 1px solid #dedede;
            white-space: nowrap;
            transition: color 400ms;
            cursor: pointer;

            i {
              margin-left: 10px;
              cursor: pointer;
              font: 400 14px tahoma;
              display: inline-block;
              height: 100%;
              vertical-align: middle;
            }

            &:hover {
              color: #28a3ef;
            }
          }
        }
      }

      .details {
        margin-bottom: 5px;

        .sui-navbar {
          overflow: visible;
          margin-bottom: 0;

          .filter {
            min-height: 40px;
            padding-right: 20px;
            background: #fbfbfb;
            border: 1px solid #e2e2e2;
            padding-left: 0;
            border-radius: 0;
            box-shadow: 0 1px 4px rgba(0, 0, 0, 0.065);

            .sui-nav {
              position: relative;
              left: 0;
              display: block;
              float: left;
              margin: 0 10px 0 0;

              li {
                float: left;
                line-height: 18px;

                a {
                  display: block;
                  cursor: pointer;
                  padding: 11px 15px;
                  color: #777;
                  text-decoration: none;
                }

                &.active {
                  a {
                    background: #e1251b;
                    color: #fff;
                  }
                }
              }
            }
          }
        }

        .goods-list {
          margin: 20px 0;

          ul {
            display: flex;
            flex-wrap: wrap;

            li {
              height: 100%;
              width: 20%;
              margin-top: 10px;
              line-height: 28px;

              .list-wrap {
                .p-img {
                  padding-left: 15px;
                  width: 215px;
                  height: 255px;

                  a {
                    color: #666;

                    img {
                      max-width: 100%;
                      height: auto;
                      vertical-align: middle;
                    }
                  }
                }

                .price {
                  padding-left: 15px;
                  font-size: 18px;
                  color: #c81623;

                  strong {
                    font-weight: 700;

                    i {
                      margin-left: -5px;
                    }
                  }
                }

                .attr {
                  padding-left: 15px;
                  width: 85%;
                  overflow: hidden;
                  margin-bottom: 8px;
                  min-height: 38px;
                  cursor: pointer;
                  line-height: 1.8;
                  display: -webkit-box;
                  -webkit-box-orient: vertical;
                  -webkit-line-clamp: 2;

                  a {
                    color: #333;
                    text-decoration: none;
                  }
                }

                .commit {
                  padding-left: 15px;
                  height: 22px;
                  font-size: 13px;
                  color: #a7a7a7;

                  span {
                    font-weight: 700;
                    color: #646fb0;
                  }
                }

                .operate {
                  padding: 12px 15px;

                  .sui-btn {
                    display: inline-block;
                    padding: 2px 14px;
                    box-sizing: border-box;
                    margin-bottom: 0;
                    font-size: 12px;
                    line-height: 18px;
                    text-align: center;
                    vertical-align: middle;
                    cursor: pointer;
                    border-radius: 0;
                    background-color: transparent;
                    margin-right: 15px;
                  }

                  .btn-bordered {
                    min-width: 85px;
                    background-color: transparent;
                    border: 1px solid #8c8c8c;
                    color: #8c8c8c;

                    &:hover {
                      border: 1px solid #666;
                      color: #fff !important;
                      background-color: #666;
                      text-decoration: none;
                    }
                  }

                  .btn-danger {
                    border: 1px solid #e1251b;
                    color: #e1251b;

                    &:hover {
                      border: 1px solid #e1251b;
                      background-color: #e1251b;
                      color: white !important;
                      text-decoration: none;
                    }
                  }
                }
              }
            }
          }
        }

        .page {
          width: 733px;
          height: 66px;
          overflow: hidden;
          float: right;

          .sui-pagination {
            margin: 18px 0;

            ul {
              margin-left: 0;
              margin-bottom: 0;
              vertical-align: middle;
              width: 490px;
              float: left;

              li {
                line-height: 18px;
                display: inline-block;

                a {
                  position: relative;
                  float: left;
                  line-height: 18px;
                  text-decoration: none;
                  background-color: #fff;
                  border: 1px solid #e0e9ee;
                  margin-left: -1px;
                  font-size: 14px;
                  padding: 9px 18px;
                  color: #333;
                }

                &.active {
                  a {
                    background-color: #fff;
                    color: #e1251b;
                    border-color: #fff;
                    cursor: default;
                  }
                }

                &.prev {
                  a {
                    background-color: #fafafa;
                  }
                }

                &.disabled {
                  a {
                    color: #999;
                    cursor: default;
                  }
                }

                &.dotted {
                  span {
                    margin-left: -1px;
                    position: relative;
                    float: left;
                    line-height: 18px;
                    text-decoration: none;
                    background-color: #fff;
                    font-size: 14px;
                    border: 0;
                    padding: 9px 18px;
                    color: #333;
                  }
                }

                &.next {
                  a {
                    background-color: #fafafa;
                  }
                }
              }
            }

            div {
              color: #333;
              font-size: 14px;
              float: right;
              width: 241px;
            }
          }
        }
      }
    }
  }
</style>