import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import ElementUI from "element-ui";
import "element-ui/lib/theme-chalk/index.css";
import "./style/common.scss";
import "./style/global.scss";

// 引入 Font Awesome 字体图标库 4.7.0
// https://fontawesome.dashgame.com/
import "font-awesome/css/font-awesome.min.css";
import VueCompositionAPI from '@vue/composition-api'
import moment from 'moment'
// import './style/reset.scss'

import _ from 'lodash'

// _.cloneDeep(obj)


// Vue插件
// ElementUI.Input.props.size.default = 'mini';
Vue.use(ElementUI);
Vue.use(VueCompositionAPI)

Vue.config.productionTip = false;


Vue.filter('dateFormat', val => {
  return moment(val).format("YYYY年MM月DD日 HH时mm分ss秒")
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");



