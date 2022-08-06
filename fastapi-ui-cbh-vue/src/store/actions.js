import userApi from "@/api/user.js";
import accessApi from "@/api/access.js";

export default {
  async getRoleIds({ commit, dispatch }) {
    let { data } = await userApi.getCurrentUser();
    commit("setUserInfo", data);
    commit("setRoleIds", data.role_ids);
    dispatch("getAccess");
  },
  async getAccess({ commit, state }) {
    state.roleIds.forEach(async (roleId) => {
      let result = await accessApi.queryAccess(roleId);
      // console.log(roleId, result.data.role_access);
      commit("setAccess", result.data.role_access);
      commit("setAllAccess", result.data.all_access);
    });
  },
};
