import { doPost } from "@/utils/xhr-util";
import service from "@/utils/axios-request";

export default {
  login(params) {
    return service.post("/admin/user/account/login", params);
  },
};
