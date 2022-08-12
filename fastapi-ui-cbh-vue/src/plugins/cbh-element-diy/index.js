import ElementUI from "element-ui";
import filters from "./filters";
import cbhComponents from './components'

/*
特别注意:!!!!!!!
使用此插件要提前安装以下东西:
    element-ui
    moment
*/

export default {
  install(Vue, options) {
    require("./style/index.scss");
    require("./scss/var.scss");
    Vue.use(ElementUI);

    // 全局注册 CBH自定义组件
    Object.keys(cbhComponents).forEach(name => {
      Vue.component(name, cbhComponents[name]);
    });

    // 全局注册 CBH自定义过滤器
    Object.keys(filters).forEach((filterName) => {
      Vue.filter(filterName, filters[filterName]);
    });
  },
};
