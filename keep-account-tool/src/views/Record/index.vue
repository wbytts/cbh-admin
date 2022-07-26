<template>
  <div>
    <div class="title">我的消费记录</div>
    <div class="top-content">
      <div class="one">
        <div>本月结算</div>
        <!-- <span :style="{ color: profitResult > 0 ? 'green' : 'red' }">
          ￥
          {{ profitResult > 0 ? '+' : '' }}
        </span> -->
        <span v-if="profitResult >= 0" style="color: green">￥ +{{ profitResult }}</span>
        <span v-else style="color: red">￥{{ profitResult }}</span>
      </div>
      <div class="xian"></div>
      <div class="two">
        <div>本月收入</div>
        ￥{{ income }}
      </div>
      <div class="three">
        <div>本月支出</div>
        ￥{{ outlay }}
      </div>
      <div class="xian1"></div>
    </div>
    <div>
      <div ref="pieChart" style="width: 375px; height: 400px"></div>
    </div>
  </div>
</template>

<script>
import createPieChartOption from './pie-chart-option.js';
import accountService from '@/api/account.js';

export default {
  data() {
    return {
      show: false,
      chart: null,
      income: '',
      outlay: '',
    };
  },
  methods: {
    async queryAccountByMonth() {
      let { income, outlay } = await accountService.listByCurrentMonth();
      this.income = income;
      this.outlay = outlay;
    },
    updatePieChart() {
      this.chart.setOption(
        createPieChartOption({
          title: '收入支出比例图',
          data: this.chartData,
        }),
      );
    },
  },
  computed: {
    chartData() {
      return [
        { name: '收入', value: this.income },
        { name: '支出', value: this.outlay },
      ];
    },
    profitResult() {
      return this.income - this.outlay;
    },
  },
  async mounted() {
    await this.queryAccountByMonth();
    this.chart = this.$echarts.init(this.$refs.pieChart);
    this.updatePieChart();
  },
};
</script>

<style lang="scss" scoped>
.title {
  width: 375px;
  height: 50px;
  line-height: 50px;
  text-align: center;
  background-color: rgb(66, 184, 132);
  border-radius: 10px;
}
.top-content {
  color: rgb(0, 122, 204);
  font-size: 20px;
  .three {
    margin-top: -60px;
    margin-left: 280px;
  }
  .two {
    margin-top: 10px;
    margin-left: 10px;
  }
  .xian {
    width: 300px;
    /* border: solid rgb(226,226,226); */
    border-top: 1px solid rgb(226, 226, 226);
    margin: 0 auto;
    margin-top: 10px;
  }
  .xian1 {
    width: 300px;
    /* border: solid rgb(226,226,226); */
    border-top: 1px solid rgb(226, 226, 226);
    margin: 0 auto;
    margin-top: 10px;
  }
  .one {
    width: 375px;
    height: 60px;
    text-align: center;
    /* line-height: 60px; */
    margin-top: 10px;
  }
}
</style>
