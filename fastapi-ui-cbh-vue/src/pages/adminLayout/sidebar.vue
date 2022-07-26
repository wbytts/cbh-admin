<!--
 * @Description: 
 * @FilePath: \cbh-admin-vue\src\pages\adminLayout\sidebar.vue
 * ******************************
 * @Author: 陈炳翰
 * @Date: 2022-07-15 22:40:13
 * @LastEditors: 陈炳翰
 * @LastEditTime: 2022-07-20 22:34:53
 * good good study 📚, day day up ✔️.
-->
<template>
  <div>
    <el-menu
      :default-active="$store.state.currentMenuKey"
      class="el-menu-vertical-demo"
      background-color="#140858"
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
</style>