<!--
 * @Description: 
 * @FilePath: \fastapi-ui-cbh-vue\src\views\user\index.vue
 * ******************************
 * @Author: 陈炳翰
 * @Date: 2022-07-16 00:10:53
 * @LastEditors: 陈炳翰
 * @LastEditTime: 2022-07-28 00:57:00
 * good good study 📚, day day up ✔️.
-->
<template>
  <div>
    <button @click="flag = !flag">显示/隐藏</button>
    <h1 v-cbh-if="flag">这是user页面</h1>
    <h1>啦啦啦啦啦啦</h1>
  </div>
</template>

<script>
export default {
    data() {
        return {
            flag: false
        }
    },
    mounted() {
        let a = 4;
        a = "123";
    },
};
</script>

<style>
.div {
    background-color: rgb(255, 189, 247);
}
</style>