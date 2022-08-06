/*
 * @Description:
 * @FilePath: \frontend-codesd:\projects\xxxxxxxx\github\wbytts\cbh-admin\fastapi-ui-cbh-vue\src\store\state.js
 * ******************************
 * @Author: 陈炳翰
 * @Date: 2022-07-19 23:18:53
 * @LastEditors: 陈炳翰
 * @LastEditTime: 2022-08-06 16:55:20
 * good good study 📚, day day up ✔️.
 */

const currentMenuKey = localStorage.getItem("currentMenuKey") || "";


export default {
  userInfo: {},
  roleIds: [],
  access: [],
  allAccess: [],
  currentMenuKey,
};
