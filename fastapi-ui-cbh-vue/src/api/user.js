/*
 * @Description:
 * @FilePath: \cbh-admin-vue\src\api\user.js
 * ******************************
 * @Author: 陈炳翰
 * @Date: 2022-07-14 00:16:39
 * @LastEditors: 陈炳翰
 * @LastEditTime: 2022-07-21 22:38:08
 * good good study 📚, day day up ✔️.
 */
import { doPost } from "@/utils/xhr-util";
import service from "@/utils/axios-request";

export default {
  login(params) {
    return service.post("/admin/user/account/login", params);
  },
  getCurrentUser(params) {
    return service.get("/admin/user/info", { params });
  },
};
