<template>
  <header class="headerBox">
    <div class="title">
      <div class="time">
        <span class="day">29日</span>
        <span class="month">4月</span>
      </div>
      <h1>知乎日报</h1>
    </div>
    <div class="pic">
<!--      <img >-->
    </div>
  </header>
</template>

<script>
export default {
  name: "Header.vue"
}
</script>

<style scoped>
  .headerBox{
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
  }
  .title{
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
  }
  span{
    display: block;
    text-align: center;
    font-size: 1.5rem;
  }
  .day{
     font-size: 2rem;
     font-weight: bold;
  }
  .time{
    display: flex;
    flex-direction: column;
    padding: 0 1rem;
    border-right: 0.2rem solid #eeee;
  }
  h1{
    margin-left: 1rem;
  }
  .pic{
    width: 3rem;
    height: 3rem;
    margin-left: 3rem;
    background: url("../assets/image/time.jpg") no-repeat;
    background-size: 100% 100%;
    border-radius: 50%;
  }
  img{
    display: block;
    width: 100%;
    height: 100%;
  }
</style>
