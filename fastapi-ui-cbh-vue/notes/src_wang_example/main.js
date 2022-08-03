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

Vue.use(ElementUI);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
