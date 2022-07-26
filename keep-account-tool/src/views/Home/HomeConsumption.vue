<template>
  <div class="content" @click="$emit('click')">
  <div>{{ text }}</div>
  <slot></slot>
  </div>
</template>

<script>
  export default {
    props: {
      text: String,
    }
  }
</script>

<style lang="scss" scoped>
.content {
  line-height: 70px;
  margin-left: 20px;
}
</style>