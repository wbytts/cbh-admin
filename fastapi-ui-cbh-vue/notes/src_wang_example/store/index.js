import Vue from "vue";
import Vuex from "vuex";
import accessApi from "@/api/access";

Vue.use(Vuex);

export default new Vuex.Store({
  //全局共用data
  state: {
    x: 1,
  },
  //同计算属性
  getters: {},
  //修改state
  mutations: {
    修改X的值: function (state, val) {
      state.x = val;
    },
  },
  //发送请求
  actions: {
    三秒之后改x: function ({ commit }, val) {
      setTimeout(() => commit("修改X的值", val), 3000);
    },
  },
  //可以汇总模块化后的状态
  modules: {},
});
