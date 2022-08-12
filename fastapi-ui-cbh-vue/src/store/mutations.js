/*
 * @Description:
 * @FilePath: \frontend-codesd:\projects\xxxxxxxx\github\wbytts\cbh-admin\fastapi-ui-cbh-vue\src\store\mutations.js
 * ******************************
 * @Author: 陈炳翰
 * @Date: 2022-07-19 23:19:21
 * @LastEditors: 陈炳翰
 * @LastEditTime: 2022-08-06 16:55:33
 * good good study 📚, day day up ✔️.
 */
export default {
  setUserInfo(state, val) {
    state.userInfo = val
  },
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
