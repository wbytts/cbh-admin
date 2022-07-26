/*
 * @Description:
 * @FilePath: \cbh-admin-vue\src\store\mutations.js
 * ******************************
 * @Author: 陈炳翰
 * @Date: 2022-07-19 23:19:21
 * @LastEditors: 陈炳翰
 * @LastEditTime: 2022-07-20 22:30:29
 * good good study 📚, day day up ✔️.
 */
export default {
  setRoleIds(state, value) {
    state.roleIds = value;
  },
  setAccess(state, val) {
    let accessSet = new Set([...state.access, ...val]);
    state.access = [...accessSet];
  },
  setAllAccess(state, value) {
    state.allAccess = value;
  },
  setCurrentMenuKey(state, val) {
    state.currentMenuKey = val;
    localStorage.setItem("currentMenuKey", val);
  },
};
