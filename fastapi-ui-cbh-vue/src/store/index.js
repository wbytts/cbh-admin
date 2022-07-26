import Vue from "vue";
import Vuex from "vuex";
import accessApi from "@/api/access";
import actions from "./actions";
import mutations from "./mutations";
import getters from "./getters";
import state from "./state";
import modules from "./modules";

Vue.use(Vuex);

export default new Vuex.Store({
  actions,
  //修改state
  mutations,
  //可以汇总模块化后的状态
  modules,
  //同计算属
  state,
  getters,
});
