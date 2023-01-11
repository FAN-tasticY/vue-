<template>
  <div class="trade-container">
    <h3 class="title">填写并核对订单信息</h3>
    <div class="content">
      <h5 class="receive">收件人信息</h5>
      <div class="address clearFix" v-for="(item,index) in userAddressList" :key="index" @click="changeAddress(item,userAddressList)">
        <span class="username" :class="{selected:item.isChecked === 1}">{{item.name}}</span>
        <p>
          <span class="s1">{{item.address}}</span>
          <span class="s2">{{item.phoneNum}}</span>
          <span class="s3" v-if="item.isChecked === 1">默认地址</span>
        </p>
      </div>
      <div class="line"></div>
      <h5 class="pay">支付方式</h5>
      <div class="address clearFix">
        <span class="username selected">在线支付</span>
        <span class="username" style="margin-left:5px;">货到付款</span>

      </div>
      <div class="line"></div>
      <h5 class="pay">送货清单</h5>
      <div class="way">
        <h5>配送方式</h5>
        <div class="info clearFix">
          <span class="s1">天天快递</span>
          <p>配送时间：预计8月10日（周三）09:00-15:00送达</p>
        </div>
      </div>
      <div class="detail">
        <h5>商品清单</h5>
        <ul class="list clearFix" v-for="(item,index) in getShopingCartInfoList" :key="index">
          <li>
            <img :src="item.imgUrl" style="width:100px;height:50px;" alt="">
          </li>
          <li>
            <p>{{item.skuName}}</p>
            <h4>7天无理由退货</h4>
          </li>
          <li>
            <h3>￥{{item.skuPrice}}</h3>
          </li>
          <li>X{{item.goodsNum}}</li>
          <li>有货</li>
        </ul>
      </div>
      <div class="bbs">
        <h5>买家留言：</h5>
        <textarea placeholder="建议留言前先与商家沟通确认" class="remarks-cont"></textarea>

      </div>
      <div class="line"></div>
      <div class="bill">
        <h5>发票信息：</h5>
        <div>普通发票（电子） 个人 明细</div>
        <h5>使用优惠/抵用</h5>
      </div>
    </div>
    <div class="money clearFix">
      <ul>
        <li>
          <b><i>{{getShopingCartInfoList.length}}</i>件商品，总商品金额</b>
          <span>¥{{totalAccount}}</span>
        </li>
        <li>
          <b>返现：</b>
          <span>0.00</span>
        </li>
        <li>
          <b>运费：</b>
          <span>0.00</span>
        </li>
      </ul>
    </div>
    <div class="trade">
      <div class="price">应付金额:　<span>¥{{totalAccount}}</span></div>
      <div class="receiveInfo">
        寄送至:
        <span>{{sendTo.address}}</span>
        收货人：<span>{{sendTo.name}}</span>
        <span>{{sendTo.phoneNum}}</span>
      </div>
    </div>
    <div class="sub clearFix">
      <!-- <router-link class="subBtn" to="/pay">提交订单</router-link> -->
      <a href="javascript:;" class="subBtn" @click="submitOrder">提交订单</a>
    </div>
  </div>
</template>

<script>
  import {getUserAddress} from '../../api'
  import {mapGetters} from 'vuex'
  export default {
    data(){
      return {
        userAddressList:[],
        needTotalAmount:'',
        resultData:{}
      }
    },
    name: 'Trade',
    mounted(){
      this.getShopingCartInfo()
      this.getUserAddress()
    },
    methods:{
      getShopingCartInfo(){
        this.$store.dispatch('getShopingCartInfo')
      },
      async getUserAddress(){
        const result = await getUserAddress()
        if(result.code === 200){
          this.userAddressList = result.data
        }
      },
      changeAddress(item,userAddressList){
        //排他 众多里面找一个使用find属性对劲嘛
        userAddressList.forEach((item)=>{
          item.isChecked = 0
        })
        item.isChecked = 1
      },
      async submitOrder(){
        //首先发送请求，请求回来一个订单编号，然后带上这个订单编号跳转界面 把总价也带上吧
        //我知道这里收集那些东西是什么意思了，因为我们只是前面的东西变化了，但是数据库里面并没有发生真正的变化，所以收集起来，让数据库跟着变化
        let tradeInfo = {
          consinee:this.sendTo.name,
          address:this.sendTo.address,
          phone:this.sendTo.phoneNum
        }
        try {
          //简单的收集界面数据，发送请求，返回订单编号
          const result = await this.$API.getOrder({name:this.sendTo.name,address:this.sendTo.address,phone:this.sendTo.phoneNum})
          // alert('订单创建成功，等待界面跳转')
          if(result.code === 200){
            this.$router.push('/pay?order='+result.data+'&totalAmount='+this.needTotalAmount)
          }
        } catch (error) {
          alert(error.message)
        }
      }
    },
    computed:{
      ...mapGetters(['getShopingCartInfoList']),
      totalAccount(){
        let totalAccount = this.getShopingCartInfoList.reduce((preState,current)=>{
          return preState+current.skuPrice*current.goodsNum
        },0)
        this.needTotalAmount = totalAccount
        return totalAccount
      },
      sendTo(){
        //从无到有就使用计算属性就完了 众多的属性里面寻找一个属性 然后使用find方法就完事了
        return this.userAddressList.find((item)=>{return item.isChecked === 1}) || {}
      }
    }
  }
</script>

<style lang="less" scoped>
  .trade-container {
    .title {
      width: 1200px;
      margin: 0 auto;
      font-size: 14px;
      line-height: 21px;
    }

    .content {
      width: 1200px;
      margin: 10px auto 0;
      border: 1px solid rgb(221, 221, 221);
      padding: 25px;
      box-sizing: border-box;

      .receive,
      .pay {
        line-height: 36px;
        margin: 18px 0;
      }

      .address {
        padding-left: 20px;
        margin-bottom: 15px;

        .username {
          float: left;
          width: 100px;
          height: 30px;
          line-height: 30px;
          text-align: center;
          border: 1px solid #ddd;
          position: relative;
        }

        .username::after {
          content: "";
          display: none;
          width: 13px;
          height: 13px;
          position: absolute;
          right: 0;
          bottom: 0;
          background: url(./images/choosed.png) no-repeat;
        }

        .username.selected {
          border-color: #e1251b;
        }

        .username.selected::after {
          display: block;
        }

        p {
          width: 610px;
          float: left;
          line-height: 30px;
          margin-left: 10px;
          padding-left: 5px;
          cursor: pointer;

          .s1 {
            float: left;

          }

          .s2 {
            float: left;
            margin: 0 5px;
          }

          .s3 {
            float: left;
            width: 56px;
            height: 24px;
            line-height: 24px;
            margin-left: 10px;
            background-color: #878787;
            color: #fff;
            margin-top: 3px;
            text-align: center;
          }
        }

        p:hover {
          background-color: #ddd;
        }
      }

      .line {
        height: 1px;
        background-color: #ddd;
      }

      .way {
        width: 1080px;
        height: 110px;
        background: #f4f4f4;
        padding: 15px;
        margin: 0 auto;

        h5 {
          line-height: 50px;
        }

        .info {
          margin-top: 20px;

          .s1 {
            float: left;
            border: 1px solid #ddd;
            width: 120px;
            height: 30px;
            line-height: 30px;
            text-align: center;
            margin-right: 10px;
          }

          p {
            line-height: 30px;
          }
        }
      }

      .detail {
        width: 1080px;

        background: #feedef;
        padding: 15px;
        margin: 2px auto 0;

        h5 {
          line-height: 50px;
        }

        .list {
          display: flex;
          justify-content: space-between;

          li {
            line-height: 30px;

            p {

              margin-bottom: 20px;
            }

            h4 {
              color: #c81623;
              font-weight: 400;
            }

            h3 {

              color: #e12228;
            }
          }
        }
      }

      .bbs {
        margin-bottom: 15px;

        h5 {
          line-height: 50px;
        }

        textarea {
          width: 100%;
          border-color: #e4e2e2;
          line-height: 1.8;
          outline: none;
          resize: none;
        }
      }

      .bill {
        h5 {
          line-height: 50px;
        }

        div {
          padding-left: 15px;
        }
      }
    }

    .money {
      width: 1200px;
      margin: 20px auto;

      ul {
        width: 220px;
        float: right;

        li {
          line-height: 30px;
          display: flex;
          justify-content: space-between;

          i {
            color: red;
          }
        }
      }
    }

    .trade {
      box-sizing: border-box;
      width: 1200px;
      padding: 10px;
      margin: 10px auto;
      text-align: right;
      background-color: #f4f4f4;
      border: 1px solid #ddd;

      div {
        line-height: 30px;
      }

      .price span {
        color: #e12228;
        font-weight: 700;
        font-size: 14px;
      }

      .receiveInfo {
        color: #999;
      }
    }

    .sub {
      width: 1200px;
      margin: 0 auto 10px;

      .subBtn {
        float: right;
        width: 164px;
        height: 56px;
        font: 700 18px "微软雅黑";
        line-height: 56px;
        text-align: center;
        color: #fff;
        background-color: #e1251b;

      }
    }

  }
</style>