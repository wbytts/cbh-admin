import service from "@/utils/axios-request";

export default {
  queryAccess(roleId) {
    // return service.get("/admin/access", {
    //   params: { role_id: roleId },
    // });
    return service({
      url: "/admin/access",
      method: "get",
      params: {
        role_id: roleId,
      },
    });
  },
  set(params) {
    return service.put("/admin/access", params);
  },
};
