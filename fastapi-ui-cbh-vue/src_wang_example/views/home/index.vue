<template>
  <div>
    <h1>home页面</h1>
    <h1>x = {{ x }}</h1>
  </div>
</template>

<script>
import mixinX from "@/mixins/mixin-x";
export default {
  mixins: [mixinX],
  data() {
    return {
      c: 123,
    };
  },
  methods: {},
  mounted() {
    console.log("home挂载完成");
  },
};
</script>

<style>
</style>