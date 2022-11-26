<template>
  <div class="list-container">
    <div class="sortList clearfix">
      <div class="center">
        <!--banner轮播-->
        <!-- <div class="swiper-container" ref="swiper">
          <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="itemObj in bannerList" :key="itemObj.id">
              <img :src="itemObj.imgUrl" style="height:464px;width:730px"/>
            </div>
          </div>
          <div class="swiper-pagination"></div>
          <div class="swiper-button-prev"></div>
          <div class="swiper-button-next"></div>
        </div> -->

        <!-- banner轮播的另一个版本 -->
        <!-- 然后就是那个配置对象 我们将其写在data里面就可以了 -->
        <swiper :options="woaini">
          <!-- slides -->
          <swiper-slide v-for="itemObj in bannerList" :key="itemObj.id">
            <img :src="itemObj.imgUrl" alt="" style="width:730px;height:464px;">
          </swiper-slide>
          <!-- Optional controls -->
          <div class="swiper-pagination"  slot="pagination"></div>
          <div class="swiper-button-prev" slot="button-prev"></div>
          <div class="swiper-button-next" slot="button-next"></div>
          <div class="swiper-scrollbar"   slot="scrollbar"></div>
        </swiper>
      </div>
      <div class="right">
        <div class="news">
          <h4>
            <em class="fl">尚品汇快报</em>
            <span class="fr tip">更多 ></span>
          </h4>
          <div class="clearix"></div>
          <ul class="news-list unstyled">
            <li>
              <span class="bold">[特惠]</span>备战开学季 全民半价购数码
            </li>
            <li>
              <span class="bold">[公告]</span>备战开学季 全民半价购数码
            </li>
            <li>
              <span class="bold">[特惠]</span>备战开学季 全民半价购数码
            </li>
            <li>
              <span class="bold">[公告]</span>备战开学季 全民半价购数码
            </li>
            <li>
              <span class="bold">[特惠]</span>备战开学季 全民半价购数码
            </li>
          </ul>
        </div>
        <ul class="lifeservices">
          <li class=" life-item ">
            <i class="list-item"></i>
            <span class="service-intro">话费</span>
          </li>
          <li class=" life-item ">
            <i class="list-item"></i>
            <span class="service-intro">机票</span>
          </li>
          <li class=" life-item ">
            <i class="list-item"></i>
            <span class="service-intro">电影票</span>
          </li>
          <li class=" life-item ">
            <i class="list-item"></i>
            <span class="service-intro">游戏</span>
          </li>
          <li class=" life-item">
            <i class="list-item"></i>
            <span class="service-intro">彩票</span>
          </li>
          <li class=" life-item">
            <i class="list-item"></i>
            <span class="service-intro">加油站</span>
          </li>
          <li class=" life-item">
            <i class="list-item"></i>
            <span class="service-intro">酒店</span>
          </li>
          <li class=" life-item">
            <i class="list-item"></i>
            <span class="service-intro">火车票</span>
          </li>
          <li class=" life-item ">
            <i class="list-item"></i>
            <span class="service-intro">众筹</span>
          </li>
          <li class=" life-item">
            <i class="list-item"></i>
            <span class="service-intro">理财</span>
          </li>
          <li class=" life-item">
            <i class="list-item"></i>
            <span class="service-intro">礼品卡</span>
          </li>
          <li class=" life-item">
            <i class="list-item"></i>
            <span class="service-intro">白条</span>
          </li>
        </ul>
        <div class="ads">
          <img src="./images/ad1.png" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  import Swiper from 'swiper'
  //这里的swiper对象他是有要求的 这个swiper实例必须要在列表界面显示之后创建才有效果  
  export default {
    data(){
      return {
        data:'哈哈 我永远不会改变',
        woaini:{
            //direction: 'vertical', //默认就是水平的
            loop: true, // 循环模式选项
            autoplay:{
              delay:2000,
              disableOnInteraction:false
            },
            // 如果需要分页器
            pagination: {
              el: '.swiper-pagination',
            },
            
            // 如果需要前进后退按钮
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            },
            
            // 如果需要滚动条
            scrollbar: {
              el: '.swiper-scrollbar',
            },
        }
      }
    },
    name: 'ListContainer',

    
    //因为现在是静态的所以我们使用mounted，后面编程动态的了然后我们就不使用这个mounted了是吗？
    // mounted(){
    //   //状态还没有来呢，那么就是那个空的数组，如果数据回来了，这个列表就变成了那个列表了
    //   this.mockData = this.$store.state.home.bannerList        
    // },
    computed:{
      // mockData(){
      //   this.data = this.$store.state.home.bannerList
      //   return this.$store.state.home.bannerList
      // },
      ...mapState({ //映射状态的 好像就是后面的状态发生改变了然后这里的数据就会自动更新的
        bannerList:state => state.home.bannerList
      })
    },
    watch:{
      //在这之前这里监视的是bannerList
      data(){
        //该函数是保证界面加载完毕了 然后再执行这里面的代码
        this.$nextTick(()=>{
          //如果状态数据发生了变化，那么就是写那一套逻辑
            new Swiper (this.$refs.swiper, {
            //direction: 'vertical', //默认就是水平的
            loop: true, // 循环模式选项
            autoplay:{
              delay:2000,
              disableOnInteraction:false
            },
            // 如果需要分页器
            pagination: {
              el: '.swiper-pagination',
            },
            
            // 如果需要前进后退按钮
            navigation: {
              nextEl: '.swiper-button-next',
              prevEl: '.swiper-button-prev',
            },
            
            // 如果需要滚动条
            scrollbar: {
              el: '.swiper-scrollbar',
            },
          })
        })
        
      }
    },
  }
</script>




<style lang="less" scoped>
  .list-container {
    width: 1200px;
    margin: 0 auto;

    .sortList {
      height: 464px;
      padding-left: 210px;

      .center {
        box-sizing: border-box;
        width: 740px;
        height: 100%;
        padding: 5px;
        float: left;
      }

      .right {
        float: left;
        width: 250px;

        .news {
          border: 1px solid #e4e4e4;
          margin-top: 5px;

          h4 {
            border-bottom: 1px solid #e4e4e4;
            padding: 5px 10px;
            margin: 5px 5px 0;
            line-height: 22px;
            overflow: hidden;
            font-size: 14px;

            .fl {
              float: left;
            }

            .fr {
              float: right;
              font-size: 12px;
              font-weight: 400;
            }
          }

          .news-list {
            padding: 5px 15px;
            line-height: 26px;

            .bold {
              font-weight: 700;
            }
          }
        }

        .lifeservices {
          border-right: 1px solid #e4e4e4;
          overflow: hidden;
          display: flex;
          flex-wrap: wrap;

          .life-item {
            border-left: 1px solid #e4e4e4;
            border-bottom: 1px solid #e4e4e4;
            margin-right: -1px;
            height: 64px;
            text-align: center;
            position: relative;
            cursor: pointer;
            width: 25%;

            .list-item {
              background-image: url(../images/icons.png);
              width: 61px;
              height: 40px;
              display: block;
            }

            .service-intro {
              line-height: 22px;
              width: 60px;
              display: block;
            }

            &:nth-child(1) {
              .list-item {
                background-position: 0px -5px;
              }
            }

            &:nth-child(2) {
              .list-item {
                background-position: -62px -5px;
              }
            }

            &:nth-child(3) {
              .list-item {
                background-position: -126px -5px;
              }
            }

            &:nth-child(4) {
              .list-item {
                background-position: -190px -5px;
              }
            }

            &:nth-child(5) {
              .list-item {
                background-position: 0px -76px;
              }
            }

            &:nth-child(6) {
              .list-item {
                background-position: -62px -76px;
              }
            }

            &:nth-child(7) {
              .list-item {
                background-position: -126px -76px;
              }
            }

            &:nth-child(8) {
              .list-item {
                background-position: -190px -76px;
              }
            }

            &:nth-child(9) {
              .list-item {
                background-position: 0px -146px;
              }
            }

            &:nth-child(10) {
              .list-item {
                background-position: -62px -146px;
              }
            }

            &:nth-child(11) {
              .list-item {
                background-position: -126px -146px;
              }
            }

            &:nth-child(12) {
              .list-item {
                background-position: -190px -146px;
              }
            }
          }
        }

        .ads {
          margin-top: 5px;

          img {
            opacity: 0.8;
            transition: all 400ms;

            &:hover {
              opacity: 1;
            }
          }
        }
      }
    }
  }
</style>