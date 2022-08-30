<template>
  <div class="home">
    <el-input v-model="x" />
    <h1>{{ x }}</h1>
  </div>
</template>

<script setup>
import { ref } from 'vue';
let x = ref(3);
</script>

<style lang="scss" scoped>
.home {
  color: #fff;
}
</style>
