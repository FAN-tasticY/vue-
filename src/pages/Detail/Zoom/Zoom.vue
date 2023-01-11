<template>
  <div class="spec-preview">
    <img :src="defaultImg.imgUrl" />
    <div class="event" @mousemove="move"></div>
    <div class="big" ref="test">
      <img :src="defaultImg.imgUrl" ref="bigImg"/>
    </div>
    <div class="mask" ref="mask"></div>
  </div>
</template>

<script>
  export default {
    name: "Zoom",
    props:['imgList'],
    data(){
      return {
        defaultIndex:0
      }
    },
    mounted(){
      this.$bus.$on('informBrother',(index)=>{
        this.defaultIndex = index
      })
    },
    methods:{
      move(event){
        //这个坐标拿到的是当前的元素的位置，左上角为（0，0）点
        let mouseX = event.offsetX
        let mouseY = event.offsetY

        //获取mask元素和bigImg元素
        let mask = this.$refs.mask
        let bigImg = this.$refs.bigImg
        let test = this.$refs.test
        let left = mouseX - mask.clientWidth/2
        let top = mouseY - mask.clientWidth/2

        //限制mask位置不要出了大框
        if(top<0){
          top = 0
        }else if(top>mask.clientHeight){
          top = mask.clientHeight
        }

        if(left<0){
          left = 0
        }else if(left>mask.clientWidth){
          left = mask.clientWidth
        }

        //修改mask位置
        mask.style.left = left + 'px'
        mask.style.top = top + 'px'
        
        //修改放大后图片的位置
        bigImg.style.left = -left*2 + 'px'
        bigImg.style.top = -top*2 + 'px'
          
        //奇怪效果
        // test.style.left = -left*2 + 'px'
        // test.style.top = -top*2 + 'px'
      }
    },
    computed:{
      defaultImg(){
        //undefined取第一个数据会报错 而空数组取第一个数据是undefined
        return this.imgList[this.defaultIndex] || {}
      }
    }
  }
</script>

<style lang="less">
  .spec-preview {
    position: relative;
    width: 400px;
    height: 400px;
    border: 1px solid #ccc;

    img {
      width: 100%;
      height: 100%;
    }

    .event {
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      z-index: 998;
    }

    .mask {
      width: 50%;
      height: 50%;
      background-color: rgba(0, 255, 0, 0.3);
      position: absolute;
      left: 0;
      top: 0;
      display: none;
    }

    .big {
      width: 100%;
      height: 100%;
      position: absolute;
      top: -1px;
      left: 100%;
      border: 1px solid #aaa;
      overflow: hidden;
      z-index: 998;
      display: none;
      background: white;

      img {
        width: 200%;
        max-width: 200%;
        height: 200%;
        position: absolute;
        left: 0;
        top: 0;
      }
    }

    .event:hover~.mask,
    .event:hover~.big {
      display: block;
    }
  }
</style>