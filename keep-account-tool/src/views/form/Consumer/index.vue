<template>
  <div>
    <van-nav-bar
      title="标题"
      left-text="返回"
      right-text="关于"
      left-arrow
      @click-left="onClickLeft"
      @click-right="onClickRight"
    />
    <div class="content">
      <div>
        买菜￥{{value}}
      </div>
      <div>
        买零食￥{{eat}}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: "50",
      eat: "50"
    }
  },
  methods: {
    onClickLeft() {
      this.$router.push('/home');
      //this.$router.go(-1); // 返回上一个路由（正数表示前进，负数表示后退）
      // Toast('返回');
    },
    onClickRight() {
      // Toast('按钮');
      alert("欢迎使用！")
    },
  },
};
</script>

<style lang="scss" scoped>
  .content {
    width: 375px;
    height: 80px;
  }
  .content div {
    width: 300px;
    height: 30px;
  }
  .content div:first-child {
    margin-top: 20px;
  }
   .content div:first-child:before {
    border: 1px solid red;
    /* position: absolute; */
    width: 300px;
    height: 4px;
  }
  .content div:last-child {
    margin-top: 20px;
  }
</style>
