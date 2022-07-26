<!--
 * @Description: 
 * @FilePath: \cbh-admin-vue\src\pages\adminLayout\index.vue
 * ******************************
 * @Author: 陈炳翰
 * @Date: 2022-07-14 21:34:53
 * @LastEditors: 陈炳翰
 * @LastEditTime: 2022-07-23 21:45:16
 * good good study 📚, day day up ✔️.
-->
<template>
  <div class="admin-page">
    <div class="header">
      <div class="title">CBH管理系统</div>
    </div>
    <div class="body">
      <div class="el-container">
        <div class="el-aside">
          <sidebar class="sidebar" />
        </div>
      </div>
      <div class="main">
        <keep-alive v-if="$route.query.live">
            <router-view></router-view>
        </keep-alive>
        <router-view v-else></router-view>
      </div>
    </div>
  </div>
</template>


<script>
//import：https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/import
// export：https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Statements/export
import accessApi from "@/api/access";
export default {
  components: {
    sidebar: () => import("@/pages/adminLayout/sidebar"),
  },
  //data必须是一个函数
  data() {
    return {};
  },
  methods: {},
  //生命周必须是一个函数
  beforeCreate() {
    this.$store.dispatch("getRoleIds");
  },
};
</script>

<style lang="scss" scoped>
.header {
  /* width: 100vw; */
  position: fixed;
  top: 0;
  /* bottom: 0; */
  left: 0;
  right: 0;
  background-color: pink;
  .title {
    display: inline-block;
    text-align: center;
    line-height: 40px;
    background: rgba(0, 0, 0, 0.76);
    width: 200px;
    height: 40px;
    color: white;
  }
}
.body {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  .el-container {
    display: inline-block;
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
      &::-webkit-scrollbar {
        display: none;
      }
    }
  }
  .main {
    display: inline-block;
    width: calc(100vw - 200px);
    height: calc(100vh - 40px);
    vertical-align: top;
  }
}

::v-deep .sidebar .el-menu {
  border-right: none !important;
}
</style>