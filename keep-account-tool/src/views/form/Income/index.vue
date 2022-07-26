<template>
  <div>
    <div class="title">我的收入</div>
    <div class="gongzi">工资</div>
    <div class="butie">补贴</div>
    <div class="sum">总收入</div>
    <div>
      <img src="../../../assets/souru.webp">
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
  .title {
    width: 375px;
    height: 80px;
    background-color: rgb(66, 184, 132);
    text-align: center;
    line-height: 80px;
    font-size: 24px;
  }
  .gongzi {
    widht: 375px;
    height: 80px;
    line-height: 80px;
  }
  .butie {
    widht: 375px;
    height: 80px;
    border-top: 1px solid rgb(147,110,68);
    line-height: 80px;
  }
  .sum {
    widht: 375px;
    height: 80px;
    border-top: 1px solid rgb(147,110,68);
    line-height: 80px;
    border-bottom: 1px solid rgb(147,110,68);
  }
</style>
