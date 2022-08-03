<template>
  <div>
    <el-menu
      default-active="2"
      class="el-menu-vertical-demo"
      background-color="#140858"
      text-color="#fff"
      active-text-color="#ffd04b"
    >
      <submenu />
    </el-menu>
  </div>
</template>


<script>
export default {
  components: {
    submenu: () => import("@/pages/adminLayout/submenu"),
  },
  methods: {},
};
</script>

<style>
</style>