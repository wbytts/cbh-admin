<!--
 * @Description: 
 * @FilePath: \frontend-codesd:\projects\xxxxxxxx\github\wbytts\cbh-admin\fastapi-ui-cbh-vue\src\pages\adminLayout\sidebar.vue
 * ******************************
 * @Author: 陈炳翰
 * @Date: 2022-07-15 22:40:13
 * @LastEditors: 陈炳翰
 * @LastEditTime: 2022-08-11 01:58:49
 * good good study 📚, day day up ✔️.
-->
<template>
  <div>
    <el-menu
      :default-active="$store.state.currentMenuKey"
      class="el-menu-vertical-demo"
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