<template>
  <div class="cart">
    <h4>全部商品</h4>
    <div class="cart-main">
      <div class="cart-th">
        <div class="cart-th1">全部</div>
        <div class="cart-th2">商品</div>
        <div class="cart-th3">单价（元）</div>
        <div class="cart-th4">数量</div>
        <div class="cart-th5">小计（元）</div>
        <div class="cart-th6">操作</div>
      </div>
      <div class="cart-body">
        <ul class="cart-list" v-for="(item,index) in carList" :key="item.skuPrice">
          <li class="cart-list-con1">
            <input type="checkbox" name="chk_list" v-model="item.isChecked" @click="uptateIsChecked">
          </li>
          <li class="cart-list-con2">
            <img src="./images/goods1.png">
            <div class="item-msg">{{item.skuName}}</div>
          </li>
          <li class="cart-list-con3">
            <div class="item-txt">语音升级款</div>
          </li>
          <li class="cart-list-con4">
            <span class="price">{{item.skuPrice}}</span>
          </li>
          <li class="cart-list-con5">
            <a href="javascript:void(0)" class="mins" @click="changeSkuNum(item,-1,true,index)">-</a>
            <input autocomplete="off" type="text" :value="item.goodsNum" minnum="1" class="itxt" @change="changeSkuNum(item,$event.target.value,false,index)">
            <a href="javascript:void(0)" class="plus" @click="changeSkuNum(item,1,true,index)">+</a>
          </li>
          <li class="cart-list-con6">
            <span class="sum">{{item.skuPrice*item.goodsNum}}</span>
          </li>
          <li class="cart-list-con7">
            <a href="javascript:;" class="sindelet" @click="deleteOne(index)">删除</a>
            <br>
            <a href="#none">移到收藏</a>
          </li>
        </ul>
      </div>
    </div>
    <div class="cart-tool">
      <div class="select-all">
        <input class="chooseAll" type="checkbox" v-model="selectAll">
        <span>全选</span>
      </div>
      <div class="option">
        <a href="javascript:;" @click="deleteHasChecked_version2">删除选中的商品</a>
        <a href="#none">移到我的关注</a>
        <a href="#none">清除下柜商品</a>
      </div>
      <div class="money-box">
        <div class="chosed">已选择
          <span>{{hasChecked}}</span>件商品</div>
        <div class="sumprice">
          <em>总价（不含运费） ：</em>
          <i class="summoney">{{totalAccount}}</i>
        </div>
        <div class="sumbtn">
          <!-- <a class="sum-btn" href="###" target="_blank">结算</a> -->
          <router-link to='/expense'>结算</router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {mapState} from 'vuex'
  export default {
    name: 'ShopCart',
    data(){
      return {
        skuNum:''
      }
    },
    beforeMount(){
      this.skuNum = this.$route.query.skuNum
    },
    mounted(){
      this.getCarList(this.skuNum)
    },
    methods:{
      getCarList(skuNum,goodsNum,index){
        this.$store.dispatch('getCarList',{'num':skuNum,'goodsNum':goodsNum,'index':index})
      },
      uptateIsChecked(){
        // this.$store.dispatch
      },
      changeSkuNum(item,disNum,flag,index){
        let newDisNum = item.goodsNum*1
        if(!flag){
          if(disNum*1 > 0){
            newDisNum = disNum*1
          }else{
            newDisNum = 1
          }
        }else{
          newDisNum += disNum*1
          if(newDisNum <= 1){
            newDisNum = 1
          }
        }
        //校验完成之后 发送请求了该
        this.getCarList(this.skuNum,newDisNum,index)
      },
      deleteOne(index){
        this.carList.splice(index,1)
      },
      deleteHasChecked(){
        //为什么不可以进行赋值操作
        const delete_arr = ()=>{
          let sum = 0
          this.carList.forEach((item)=>{
            if(item.isChecked === 1 || item.isChecked === true){
              this.carList.pop(item)
              sum += item.isChecked*1
            }
          })
          if(sum != 0){
            delete_arr()
          }else{
            return
          }
        }
        delete_arr()
      },
      deleteHasChecked_version2(){
        
        //存贮过滤好的数组
        let hasHandledArr = this.carList.filter((item)=>{
          return item.isChecked*1 === 0
        })

        //将数组置为空
        this.carList.splice(0,this.carList.length)

        //将数据添加到原数组
        hasHandledArr.forEach((item)=>{
          this.carList.push(item)
        })

      }
    },
    computed:{
      //因为使用了modules，所以要用下面的这种方式取值
      ...mapState({
        carList:state=>state.getCarList.carList
      }),
      hasChecked(){
        return this.carList.reduce((preState,current)=>{
          //应该还需要发送请求才可以
          if(current.isChecked){
            preState++
          }
          return preState
        },0)
      },
      totalAccount(){
        let totalAccount = this.carList.reduce((preState,current)=>{
          return preState+current.skuPrice*current.goodsNum
        },0)
        //啊这个方法很干净，没有返回值，然后就是对数据进行遍历
        this.carList.forEach((item)=>{
          if(!item.isChecked){
            totalAccount-=item.skuPrice*item.goodsNum
          }
        })
        return totalAccount
      },
      selectAll:{
        get(){
          const result = this.carList.reduce((preState,item)=>{
            if(item.isChecked){
              preState++
            }
            return preState
          },0)
          if(result === this.carList.length) return true
          else return false
        },
        set(value){
          this.carList.forEach((item)=>{
            item.isChecked = value
          })
          //哦，原来foreach才是加工数组中每一项的方法，而map是控制数据结构的
          //然后按照他的说法就是，我们的数据不是一个类？？？
        }
      }

    }
  }
</script>

<style lang="less" scoped>
  .cart {
    width: 1200px;
    margin: 0 auto;

    h4 {
      margin: 9px 0;
      font-size: 14px;
      line-height: 21px;
    }

    .cart-main {
      .cart-th {
        background: #f5f5f5;
        border: 1px solid #ddd;
        padding: 10px;
        overflow: hidden;

        &>div {
          float: left;
        }

        .cart-th1 {
          width: 25%;

          input {
            vertical-align: middle;
          }

          span {
            vertical-align: middle;
          }
        }

        .cart-th2 {
          width: 25%;
        }

        .cart-th3,
        .cart-th4,
        .cart-th5,
        .cart-th6 {
          width: 12.5%;

        }
      }

      .cart-body {
        margin: 15px 0;
        border: 1px solid #ddd;

        .cart-list {
          padding: 10px;
          border-bottom: 1px solid #ddd;
          overflow: hidden;

          &>li {
            float: left;
          }

          .cart-list-con1 {
            width: 4.1667%;
          }

          .cart-list-con2 {
            width: 25%;

            img {
              width: 82px;
              height: 82px;
              float: left;
            }

            .item-msg {
              float: left;
              width: 150px;
              margin: 0 10px;
              line-height: 18px;
            }
          }

          .cart-list-con3 {
            width: 20.8333%;

            .item-txt {
              text-align: center;
            }
          }

          .cart-list-con4 {
            width: 12.5%;

          }

          .cart-list-con5 {
            width: 12.5%;

            .mins {
              border: 1px solid #ddd;
              border-right: 0;
              float: left;
              color: #666;
              width: 6px;
              text-align: center;
              padding: 8px;
            }

            input {
              border: 1px solid #ddd;
              width: 40px;
              height: 33px;
              float: left;
              text-align: center;
              font-size: 14px;
            }

            .plus {
              border: 1px solid #ddd;
              border-left: 0;
              float: left;
              color: #666;
              width: 6px;
              text-align: center;
              padding: 8px;
            }
          }

          .cart-list-con6 {
            width: 12.5%;

            .sum {
              font-size: 16px;
            }
          }

          .cart-list-con7 {
            width: 12.5%;

            a {
              color: #666;
            }
          }
        }
      }
    }

    .cart-tool {
      overflow: hidden;
      border: 1px solid #ddd;

      .select-all {
        padding: 10px;
        overflow: hidden;
        float: left;

        span {
          vertical-align: middle;
        }

        input {
          vertical-align: middle;
        }
      }

      .option {
        padding: 10px;
        overflow: hidden;
        float: left;

        a {
          float: left;
          padding: 0 10px;
          color: #666;
        }
      }

      .money-box {
        float: right;

        .chosed {
          line-height: 26px;
          float: left;
          padding: 0 10px;
        }

        .sumprice {
          width: 200px;
          line-height: 22px;
          float: left;
          padding: 0 10px;

          .summoney {
            color: #c81623;
            font-size: 16px;
          }
        }

        .sumbtn {
          float: right;

          a {
            display: block;
            position: relative;
            width: 96px;
            height: 52px;
            line-height: 52px;
            color: #fff;
            text-align: center;
            font-size: 18px;
            font-family: "Microsoft YaHei";
            background: #e1251b;
            overflow: hidden;
          }
        }
      }
    }
  }
</style>