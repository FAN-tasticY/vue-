<template>
  <header class="header">
            <!-- 头部的第一行 -->
            <div class="top">
                <div class="container">
                    <div class="loginList">
                        <p>尚品汇欢迎您！</p>
                        <p v-if="$store.state.user.personInfo">
                            <!-- <router-link to="/login">登录</router-link> -->
                            <a href="javascript:;">{{$store.state.user.personInfo}} </a>
                            <!-- <router-link to="/register" class="register">免费注册</router-link> -->
                            <a href="javascript:;"> 欢迎您！</a>
                            <a href="javascript:;" class="register" @click="logout">退出登录</a>
                        </p>
                        <p v-else>
                            <span>请</span>
                            <router-link to="/login">登录</router-link>
                            <router-link to="/register" class="register">免费注册</router-link>
                        </p>
                    </div>
                    <div class="typeList">
                        
                        <router-link to="/center/myorder">我的订单</router-link>
                        <router-link to="/clearAllMoney">我的购物车</router-link>
                        <a href="###">我的尚品汇</a>
                        <a href="###">尚品汇会员</a>
                        <a href="###">企业采购</a>
                        <a href="###">关注尚品汇</a>
                        <a href="###">合作招商</a>
                        <a href="###">商家后台</a>
                    </div>
                </div>
            </div>
            <!--头部第二行 搜索区域-->
            <div class="bottom">
                <h1 class="logoArea">
                    <router-link to='/'>
                        <img src="../images/logo.png" alt="">
                    </router-link>
                </h1>
                <div class="searchArea">
                    <form action="###" class="searchForm">
                        <input type="text" id="autocomplete" class="input-error input-xxlarge" v-model="inputContent"/>
                        <button class="sui-btn btn-xlarge btn-danger" @click.prevent="search">搜索</button>
                    </form>
                </div>
            </div>
        </header>
</template>

<script>
import {removeToken} from '../utools/uuidFunction'
export default {
    data(){
        return {
            inputContent:'',
        }
    },
    methods:{
        search(){
            //这个push执行完之后返回一个promise实例对象
            if(!this.inputContent) {
                alert('搜索内容不能为空')
                return
            }

            if(this.$route.name === 'YFwoaini'){
                this.$router.replace({
                    name:'YFwoaini',
                    params:{
                        //params参数需要匹配到路径里面然后前后的关键字一定要一一的对应上就可以了
                        keyword:this.inputContent
                    },
                    query:this.$route.query
                },()=>{})
            }else{
                this.$router.push({
                    name:'YFwoaini',
                    params:{
                        //params参数需要匹配到路径里面然后前后的关键字一定要一一的对应上就可以了
                        keyword:this.inputContent
                    },
                    query:this.$route.query
                 },()=>{})
            }

            // this.$router.push({
            //     name:'YFwoaini',
            //     params:{
            //         //params参数需要匹配到路径里面然后前后的关键字一定要一一的对应上就可以了
            //         keyword:this.inputContent
            //     },
            //     query:this.$route.query
            // },()=>{})
            
            
        },
        logout(){
            //删除token 然后将state状态改变为空
            removeToken()
            this.$store.dispatch('changeFalse')
            
        }
    },
    //好像是这种加上括号的就是一上来就执行的东西
    mounted(){
      this.$bus.$on('clearInputContent',()=>{
        //为什么使用箭头函数 因为要的就是那个this
        this.inputContent = ''
        // this ===> vueComponent
      })
        // this.$bus.$on('clearInputContent',function(){
        //     //现在的this该不会是window吧 然后编程undefined
        //     this.inputContent = ''
        //     this ===> vue
        // })
    },
    beforeDestroy(){
        //绑定事件之后 组件消亡了还需要解绑该组件
        this.$bus.off('clearInputContent')
    }
}
</script>

<style lang='less' scoped>
  .header {
        &>.top {
            background-color: #eaeaea;
            height: 30px;
            line-height: 30px;

            .container {
                width: 1200px;
                margin: 0 auto;
                overflow: hidden;

                .loginList {
                    float: left;

                    p {
                        float: left;
                        margin-right: 10px;

                        .register {
                            border-left: 1px solid #b3aeae;
                            padding: 0 5px;
                            margin-left: 5px;
                        }
                    }
                }

                .typeList {
                    float: right;

                    a {
                        padding: 0 10px;

                        &+a {
                            border-left: 1px solid #b3aeae;
                        }
                    }

                }

            }
        }

        &>.bottom {
            width: 1200px;
            margin: 0 auto;
            overflow: hidden;

            .logoArea {
                float: left;

                .logo {
                    img {
                        width: 175px;
                        margin: 25px 45px;
                    }
                }
            }

            .searchArea {
                float: right;
                margin-top: 35px;

                .searchForm {
                    overflow: hidden;

                    input {
                        box-sizing: border-box;
                        width: 490px;
                        height: 32px;
                        padding: 0px 4px;
                        border: 2px solid #ea4a36;
                        float: left;

                        &:focus {
                            outline: none;
                        }
                    }

                    button {
                        height: 32px;
                        width: 68px;
                        background-color: #ea4a36;
                        border: none;
                        color: #fff;
                        float: left;
                        cursor: pointer;

                        &:focus {
                            outline: none;
                        }
                    }
                }
            }
        }
    }
</style>