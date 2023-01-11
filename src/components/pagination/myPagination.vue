<template>
  <div class="pagination">
      <button :disabled = "myCurrentPage === 1" :class="{disable : myCurrentPage === 1}" @click="changePage(myCurrentPage - 1)">上一页</button>
      <button :class="{active:myCurrentPage === 1}" :disabled = "myCurrentPage === 1" @click="changePage(1)">1</button>
      <button class="disable" v-if="myCurrentPage > 2">...</button>
      <!-- 可能是因为我们没有分开写的原因 -->
      <button 
        v-for="(item) in startEndArr" 
        :key="item" v-show="(item !== 1 && item !== totalPages)" 
        @click="changePage(item)" 
        :class="{active:myCurrentPage === item}"
      
      > {{item}} </button>
      <button class="disable" v-if="myCurrentPage < totalPages-1">...</button>
      <button :class="{active:myCurrentPage === totalPages}" :disabled = "myCurrentPage === totalPages" @click="changePage(totalPages)">{{totalPages}}</button>
      <button :class="{disable:myCurrentPage === totalPages}" @click="changePage(myCurrentPage + 1)">下一页</button>
      <button class="disable">共 {{total}} 条</button>
  </div>
</template>

<script>
export default {
    name:'myPagination',
    props:{
        currentPage:{
            type:Number,
            default:1
        },
        pageSize:{
            type:Number,
            default:10
        },
        total:{
            type:Number,
            default:8
        },
        //显示连续页数
        showPages:{
            type:Number,
            default:5,
            //验证函数 如果不是奇数的话就报错
            validator:function(value){
                return value % 2 === 1
            }
        }
    },
    data(){
        return {
            myCurrentPage : this.currentPage,
            isShow : true
        }
    },
    computed:{
        totalPages(){
            const {total,pageSize} = this
            return Math.ceil(total/pageSize)
        },
        startEndArr(){
            //该函数是用来解决多余的几次判断问题
            let arr = []
            const {start,end} = this.startEnd()
            for(let i = start;i <= end;i++){
                arr.push(i)
            }
            return arr
        }
    },
    methods:{
        startEnd(){
            let start,end
            const {myCurrentPage,showPages,totalPages} = this
            // currentPage  showPages  totalPages
            //      2           5           8               1....4567[8]
            // 从上面知道start应该是3才对，然后end是7才对
            start = myCurrentPage - Math.floor(showPages/2)
            if(start < 1){
                start = 1
            }
            end = start + showPages - 1
            //那种情况表示出来就是结束位置大于总页数
            if(end>totalPages){
                end = totalPages
                start = end - showPages + 1

                if(start < 1){
                    start = 1
                }
            }
            return {start,end}
        },
        changePage(page){
            //点击同一个 停止
            if(this.myCurrentPage === page) return
            //数据发生变化，界面重新渲染
            this.myCurrentPage = page
            //通知父组件 数据发生变化
            this.$emit('currentChange',page)
        }
    },
    watch:{
        currentPage(newVal){
            this.myCurrentPage = newVal
        }
    }

}
</script>

<style lang='less' scoped>
    .pagination{
        button{
            margin: 0 5px;
            background-color: #f4f4f5;
            color: #606266;
            outline: none;
            border-radius: 2px;
            padding: 0 4px;
            vertical-align: top;
            display: inline-block;
            font-size: 13px;
            min-width: 35.5px;
            height: 28px;
            line-height: 28px;
            cursor: pointer;
            box-sizing: border-box;
            text-align: center;
            border: 0;
            


            &.active{
                background-color: skyblue;
                color: white;
                cursor: not-allowed;
            }

            &.disable{
                cursor: not-allowed;
                color: #ccc;
            }
        }
    }




</style>