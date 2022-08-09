<!--
 * @Description: 
 * @FilePath: \frontend-codesd:\projects\xxxxxxxx\github\wbytts\cbh-admin\fastapi-ui-cbh-vue\src\pages\adminLayout\sidebar.vue
 * ******************************
 * @Author: 陈炳翰
 * @Date: 2022-07-15 22:40:13
 * @LastEditors: 陈炳翰
 * @LastEditTime: 2022-08-10 01:13:18
 * good good study 📚, day day up ✔️.
-->
<template>
  <div>
    <el-menu
      :default-active="$store.state.currentMenuKey"
      class="el-menu-vertical-demo"
      background-color="rgb(3, 35, 86)"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <submenu v-for="access in allAccess" :key="access.key" :data="access" />
    </el-menu>
  </div>
</template>


<script>
import { mapState } from "vuex";
export default {
  components: {
    submenu: () => import("@/pages/adminLayout/submenu"),
  },
  computed: {
    ...mapState(["allAccess"]),
  },
};
</script>

<style lang="scss" scoped>
::v-deep .el-menu-item.is-active {
    color: rgb(254, 254, 254) !important;
    background-color: rgb(4, 45, 111) !important
}
</style>