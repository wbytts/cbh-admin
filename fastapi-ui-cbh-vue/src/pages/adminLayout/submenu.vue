<!--
 * @Description: 
 * @FilePath: \cbh-admin-vue\src\pages\adminLayout\submenu.vue
 * ******************************
 * @Author: 陈炳翰
 * @Date: 2022-07-15 23:12:27
 * @LastEditors: 陈炳翰
 * @LastEditTime: 2022-07-24 16:19:00
 * good good study 📚, day day up ✔️.
-->
<template>
  <div>
    <template v-if="data.children.every((x) => !x.is_menu)">
      <el-menu-item :index="data.key + ''" @click="click">
        <template slot="title">{{ data.title }}</template>
      </el-menu-item>
    </template>

    <el-submenu
      v-if="data.children && data.children.some((x) => x.is_menu)"
      :index="data.key + ''"
    >
      <template slot="title">{{ data.title }}</template>
      <submenu
        v-for="access in data.children"
        :key="access.key"
        :data="access"
      />
    </el-submenu>
  </div>
</template>

<script>
export default {
  name: "submenu",
  props: {
    // access: Object,
    data: {
      type: Object,
    },
  },
  methods: {
    click() {
    //   console.log("点击菜单", this.data.route_path);
      this.$router.push({
        path: this.data.route_path,
        // query: {
        //     live: true
        // }
      });
      this.$store.commit("setCurrentMenuKey", this.data.key);
    },
  },
};
</script>

<style>
</style>