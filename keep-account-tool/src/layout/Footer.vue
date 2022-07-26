<template>
  <div>
    <van-tabbar v-model="active">
      <van-tabbar-item icon="wap-home-o" @click="$router.push('/home')">主页</van-tabbar-item>
      <van-tabbar-item icon="chart-trending-o" @click="$router.push('/record')">记录</van-tabbar-item>
      <van-tabbar-item icon="user-o" @click="$router.push('/mine')">我的</van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      active: 0,
    };
  },
};
</script>

<style lang="scss" scoped></style>
