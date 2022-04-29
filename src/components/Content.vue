<template>
  <div style="margin-top: 8rem">
    <van-swipe class="my-swipe" :autoplay="3000" show-indicators="false">
      <van-swipe-item class="van-swipe-item" v-for="(item,index) in imgList" :key="index">
        <img :src="item.url" :alt="item.name" style="width: 100%;height: 10rem"/>
      </van-swipe-item>
    </van-swipe>
  </div>
</template>

<script>
export default {
  name: "Content",
  setup(){
    const imgList = [
      {name:'空山新雨后',url:'/src/assets/image/1.jpg'},
      {name:'万径人踪灭',url:'/src/assets/image/2.jpg'},
      {name:'古藤老树昏鸦',url:'/src/assets/image/3.jpg'},
    ]
    return {
      imgList
    }
  }
}
</script>

<style scoped>
.my-swipe .van-swipe-item {
  color: #fff;
  font-size: 20px;
  line-height: 150px;
  text-align: center;
}
</style>
