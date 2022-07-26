<template>
  <div>
    <router-view></router-view>
    <!-- <div class="title">CBH管理系统</div>
    <el-container class="el-container">
      <el-aside class="el-aside">
        <sidebar />
      </el-aside>
    </el-container> -->
  </div>
</template>



<script>
export default {
  components: {
    sidebar: () => import("@/pages/adminLayout/sidebar"),
  },
};
</script>

<style lang="scss" scoped>
.title {
  text-align: center;
  line-height: 40px;
  background-color: #140858;
  width: 200px;
  height: 40px;
  color: white;
}
.el-container {
  background-color: #140858;
  width: 200px;
  height: calc(100vh - 40px);
  .el-aside {
    width: 200px !important;
    height: calc(100vh - 40px);
    overflow-x: hidden;
    .el-menu-vertical-demo {
      width: 200px;
    }
  }
}
</style>