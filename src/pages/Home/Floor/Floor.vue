<template>
  <div class="floor">
      <div class="py-container">
        <div class="title clearfix">
          <h3 class="fl">{{floorListDataObj.name}}</h3>
          <div class="fr">
            <ul class="nav-tabs clearfix">
              <li class="active" v-for="item in floorListDataObj.navList" :key="item.text">
                <a href="#tab1" data-toggle="tab">{{item.text}}</a>
              </li>
            </ul>
          </div>
        </div>
        <div class="tab-content">
          <div class="tab-pane">
            <div class="floor-1">
              <div class="blockgary">
                <ul class="jd-list">
                  <li v-for="item in floorListDataObj.keywords" :key="item">
                    {{item}}
                  </li>
                </ul>
                <!-- <img src="./images/floor-1-1.png" /> -->
                <img :src="floorListDataObj.imgUrl" alt="">
              </div>
              <div class="floorBanner">
                <!-- ref可以为标签打上特定的标识符，所以就不会产生重复的影响了 -->
                <swiper :options="woaini">
                  <!-- slides -->
                  <swiper-slide v-for="item in floorListDataObj.carouselList" :key="item.id">
                    <img :src="item.imageUrl" alt="">
                  </swiper-slide>
                  <!-- Optional controls -->
                  <div class="swiper-pagination"  slot="pagination"></div>
                  <div class="swiper-button-prev" slot="button-prev"></div>
                  <div class="swiper-button-next" slot="button-next"></div>
                  <div class="swiper-scrollbar"   slot="scrollbar"></div>
                </swiper>
              </div>
              <div class="split">
                <span class="floor-x-line"></span>
                <div class="floor-conver-pit">
                  <img :src="floorListDataObj.recommendList[1]" />
                </div>
                <div class="floor-conver-pit">
                  <img :src="floorListDataObj.recommendList[0]" />
                </div>
              </div>
              <div class="split center">
                <img :src="floorListDataObj.bigImg" />
              </div>
              <div class="split">
                <span class="floor-x-line"></span>
                <div class="floor-conver-pit">
                  <img :src="floorListDataObj.recommendList[2]" alt="">
                </div>
                <div class="floor-conver-pit">
                  <img :src="floorListDataObj.recommendList[3]" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  name: 'Floor',
  props:['floorListDataObj'],
  data(){
    return {
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
  }
}
</script>

<style  lang="less" scoped>
.floor {
      margin-top: 15px;

      .py-container {
        width: 1200px;
        margin: 0 auto;

        .title {
          .fl {
            float: left;
            color: #c81623;
            font-size: 20px;
            line-height: 30px;
            margin: 9px 0;
            font-weight: 700;
          }

          .fr {
            float: right;

            .nav-tabs {
              margin: 10px 0 0;
              display: inline-block;

              li {
                float: left;
                line-height: 18px;

                a {
                  padding-top: 1px;
                  font-weight: 400;
                  background-color: #fff;

                  &::after {
                    content: "|";
                    padding: 0 10px;
                  }
                }

                &:nth-child(7) {
                  a {
                    &::after {
                      content: "";
                    }
                  }
                }

                &.active {
                  a {
                    color: #e1251b;
                  }
                }
              }
            }
          }
        }

        .tab-content {
          border-top: 2px solid #c81623;
          border-bottom: 1px solid #e4e4e4;

          .tab-pane {
            .floor-1 {
              height: 360px;
              display: flex;

              .blockgary {
                width: 210px;
                height: 100%;
                background: #f7f7f7;

                .jd-list {
                  padding: 15px 0;
                  overflow: hidden;

                  li {
                    list-style-type: none;
                    float: left;
                    width: 40%;
                    margin: 0 10px;
                    border-bottom: 1px solid #e4e4e4;
                    text-align: center;
                    line-height: 26px;
                  }
                }

                img {
                  width: 100%;
                }
              }

              .floorBanner {
                width: 330px;
                height: 100%;
              }

              .split {
                width: 220px;
                height: 100%;
                position: relative;

                .floor-x-line {
                  position: absolute;
                  background: #e4e4e4;
                  width: 220px;
                  height: 1px;
                  top: 180px;
                }

                .floor-conver-pit {
                  width: 100%;
                  height: 50%;

                  img {
                    width: 100%;
                    height: 100%;
                    transition: all 400ms;

                    &:hover {
                      opacity: 0.8;
                    }
                  }
                }
              }

              .center {
                border: 1px solid #e4e4e4;
              }
            }
          }
        }
      }
    }
</style>
