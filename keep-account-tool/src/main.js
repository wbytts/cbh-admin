import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './style/common.scss'
import * as echarts from 'echarts'

// import *as echarts from 'echarts'//引入echarts
// Vue.prototype.$echarts = echarts//挂载到Vue实例上，方便全局使用

import Vant from 'vant';
import 'vant/lib/index.css';

Vue.use(Vant);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
  beforeCreate() {
    Vue.prototype.$echarts = echarts
  }
}).$mount('#app')


