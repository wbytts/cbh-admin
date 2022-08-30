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
      commit("setAllAccess", result.data.all_access);
      // 判断是否是admin
      if(state.userInfo.user_type) {
        // 如果是admin的话，不看角色，直接给所有权限
        commit("setAccess", result.data.all_access);
      } else {
        commit("setAccess", result.data.role_access);
      }
    });
  },
};

// 

