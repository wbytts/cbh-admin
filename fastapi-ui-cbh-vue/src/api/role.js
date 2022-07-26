import { doPost, doGet } from "@/utils/axios-request";
import service from "@/utils/axios-request";

export default {
  create(parmas) {
    return doPost("/admin/role", parmas);
  },
  queryList(params) {
    return doGet("/admin/role", params);
  },
  edit(params) {
    return service.put("/admin/role", params);
  },
  delete(params) {
    console.log('删除参数', params)
    return service.delete("/admin/role", {params});
  }
};
