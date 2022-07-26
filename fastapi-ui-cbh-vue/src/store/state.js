/*
 * @Description:
 * @FilePath: \cbh-admin-vue\src\store\state.js
 * ******************************
 * @Author: 陈炳翰
 * @Date: 2022-07-19 23:18:53
 * @LastEditors: 陈炳翰
 * @LastEditTime: 2022-07-20 22:38:43
 * good good study 📚, day day up ✔️.
 */

const currentMenuKey = localStorage.getItem("currentMenuKey") || "";

export default {
  roleIds: [],
  access: [],
  allAccess: [],
  currentMenuKey,
};
