import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "./style/common.scss";
import "./style/global.scss";
import "font-awesome/css/font-awesome.min.css";
import moment from "moment";
import CbhElementDiy from "@/plugins/cbh-element-diy";

Vue.use(CbhElementDiy);
Vue.config.productionTip = false;



new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount("#app");
