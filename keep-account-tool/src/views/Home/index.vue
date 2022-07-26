<template>
  <div class="bcg">
    <div class="bcg-content">
      <HomeButton text="收入" bgColor="green" @click="$router.push('/form/income')" />
      <HomeButton text="支出" bgColor="red" @click="$router.push('/form/outlay')" />
    </div>
    <div class="content">
      <div class="content-top">
        <HomeConsumption text="本月预算">
          <div class="ThisBudget">￥180000</div>
          <div class="update">更新</div>
        </HomeConsumption>
      </div>
      <div class="middle">
        <HomeConsumption text="今日预消费">
          <div class="middle-content">￥1000</div>
        </HomeConsumption>
      </div>
      <div class="footer">
        <HomeConsumption text="今日消费" class="consumption-today" @click="$router.push('/form/Consumer')">
          <div class="footer-content">￥100</div>
        </HomeConsumption>
      </div>
    </div>
  </div>
</template>

<script>
import HomeButton from './HomeButton';
import HomeConsumption from './HomeConsumption';
export default {
  components: { HomeButton, HomeConsumption },
};
</script>

<style lang="scss" scoped>
::v-deep .consumption-today {
  height:40px;
  width: 70px;
  border-radius: 10px;
  background-color: rgb(236,114,89);
  line-height: 40px;
  text-align: center;
  color: rgb(249,253,241);
}

/*
  面有一个类名叫做 home-button
  我现在想要在父组件，去给这个类名添加样式
  没有问题
*/
/* .home-button {
  color: pink;
  font-size: 100px;
} */
/* 测试2：如果类名没有标在根标签上 */
.bcg-content {
  /* 样式没有生效~~~ */
  /* 加了穿透符号就好了 */
  /*
    结论：如果子组件加了scoped，则父组件无法通过类名修改子组件内部（除根标签以外）的样式
    除非使用样式穿透（会忽略scoped加的那个唯一编码）
  */
  /* ::v-deep .home-button-text {
    color: pink;
    font-size: 100px;
  } */
}

.bcg {
  position: absolute;
  margin-top: 0px;
  height: 650px;
  width: 375px;
  margin: 0 auto;
  background: url(../../assets/bcg.jpeg) no-repeat;
  /* background-repeat:   no-repeat; */
  background-size: cover;
  .bcg-content {
    opacity: 0.7;
  }
  .content {
    position: absolute;
    .content-top {
      top: 50px;
      width: 375px;
      height: 70px;
      position: absolute;
      background-color: rgb(255, 255, 255);
      border-radius: 20px;
      box-shadow: 0 0 6px 6px #ccc;
      .ThisBudget {
        position: relative;
        left: 75px;
        top: -70px;
        font-size: 28px;
      }
      .update {
        width: 80px;
        height: 38px;
        border: 1px solid rgb(235, 235, 235);
        position: relative;
        top: -122px;
        left: 260px;
        text-align: center;
        line-height: 38px;
        border-radius: 10px;
        background-color: rgb(248, 248, 248);
      }
    }
    .middle {
      width: 375px;
      height: 40px;
      position: absolute;
      top: 150px;
      .middle-content {
        position: absolute;
        left: 100px;
        top: 5px;
        font-size: 32px;
        color: rgb(0, 122, 204);
      }
    }
    .footer {
      position: absolute;
      top: 230px;
      width: 375px;
      height: 40px;
      .footer-content {
        position: absolute;
        top: 5px;
        left: 100px;
        font-size: 32px;
        color: rgb(0, 122, 204);
      }
    }
  }
}
</style>
