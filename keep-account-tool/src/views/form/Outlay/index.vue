<template>
  <div>
    <div class="title">我的支出记录</div>
    <div>
      <van-cell-group>
        <div class="content">
           <span>吃饭</span>
           <span>￥{{value}}</span>
        </div>
         <div class="content">
          <span>喝茶</span>
          <span>￥{{value}}</span>
         </div>
         <div  class="content">
          <span>咖啡</span>
          <span>￥{{value}}</span>
         </div>
         <div  class="content">
          <span>买衣服</span>
          <span>￥{{value}}</span>
         </div>
      </van-cell-group>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: 90
    }
  }
};
</script>

<style lang="scss" scoped>
.title {
  width: 375px;
  height: 70px;
  background-color: rgb(220, 182, 122);
  text-align: center;
  line-height: 70px;
}
.content {
   display: flex;
   justify-content: space-between ;
   margin-top: 20px;
}
</style>
