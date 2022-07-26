<template>
  <div>
    <div class="top">个人中心</div>
    <div class="touxiang">
      <img src="../../assets/touxiang.webp">
      <div class="update">修改资料</div>
    </div>
    <div class="footer">
      <div>汇总</div>
      <div>存款</div>
    </div>
  </div>

</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
  .top {
    width: 375px;
    height: 80px;
    background-color: rgb(255,204,51);
    line-height: 80px;
    text-align: center;
    font-size: 20px;
  }
  .touxiang {
    width: 375px;
    height: 60px;
    position: absolute;
    img {
      width: 60px;
      height: 60px;
      border: 1px solid red;
      border-radius: 50%;
      /* left: 50%;
      top: 50%;
      translate: transition(-50%, -50%); */
      margin-left: 157px;
      margin-top: 20px;
    }
    .update {
      width: 80px;
      height: 35px;
      /* border: 1px solid red; */
      margin-left: 147px;
      margin-top: 5px;
      text-align: center;
      font-size: 14px;
      line-height: 35px;
      border-radius: 10px;
      background-color: rgb(255,225,77);
    }
  }
  .footer {
    width: 300px;
    /* hight: 500px; */
    margin: 150px auto;
  }
  .footer div{
        width: 300px;
        hight: 50px;
        margin-top: 20px;
        border-radius: 10px;
        line-height: 50px;
        text-align: center;
        background-color: rgb(200,200,205);
  }
</style>
