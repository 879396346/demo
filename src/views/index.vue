<template>
  <div class="Home">
    <zhihu-header></zhihu-header>
    <Content></Content>
  </div>
</template>

<script>
import {computed, reactive, onMounted, toRefs} from "vue";
import zhihuHeader from '../components/Header.vue'
import Content from '../components/Content.vue'
import {getBannerList} from "../api/index";

export default {
  name: "index",
  components:{
    zhihuHeader,
    Content
  },
  setup(){
    const state = reactive({
      date: new Date(),
      bannerData: []
    })
    // let day = computed(()=> utils.formatTiem(state.date[2]))
    // let month = computed(()=>utils.formatTiem(state.date[1]))
    //
    // // 获取banner数据
    // const getBannerList = async() =>{
    //   const res = await getBannerList()
    //   state.bannerData = res.data.data
    //   console.log(state.bannerData)
    // }

    onMounted(()=>{
      getBannerList()
    })
    return {
      ...toRefs(state),
    }
  }
}
</script>

<style scoped>
.Home{
  width: 100%;
  height: 100%;
}
</style>
