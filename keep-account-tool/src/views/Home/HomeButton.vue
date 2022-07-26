<template>
  <div class="home-button" :style="{ backgroundColor: bgColor }" @click="$emit('click')">
    <div class="home-button-text">{{ text }}</div>
  </div>
</template>

<script>
export default {
  props: {
    text: String,
    bgColor: String,
  },
};
</script>

<style lang="scss" scoped>
$button-height: 70px;

.home-button {
  width: 200px;
  height: $button-height;
  margin: 20px auto;
  border-radius: 20px;
  text-align: center;
  line-height: $button-height;
  font-size: 30px;
  color: #fff;
  box-shadow: 0 0 8px 8px #ccc;
}
</style>
