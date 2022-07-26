<template>
  <div>
    <div>
      <router-view></router-view>
    </div>
    <div class="footer"><Footer /></div>
  </div>
</template>

<script>
import Footer from './Footer';
export default {
  components: { Footer },
};
</script>

<style lang="scss" scoped></style>
