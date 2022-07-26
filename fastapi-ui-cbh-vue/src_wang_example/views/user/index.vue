<template>
  <div>
    <h1>这是user页面</h1>
    <h1>x = {{ x }}</h1>
    <el-button type="primary" @click="handleChangeX">改变state.x的值</el-button>
  </div>
</template>

<script>
import mixinX from "@/mixins/mixin-x";

export default {
  mixins: [mixinX], // 混入
  methods: {
    handleChangeX() {
      this.修改X的值(999);
      //   this.$store.state.x = 999;
      //   this.$store.commit("修改X的值", 999);
      // 三秒之后将x改为999
      //   this.$store.dispatch("三秒之后改x", 999);
    },
  },
};
</script>

<style>
</style>