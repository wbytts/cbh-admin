import { doPost, doGet } from '@/utils/axios-request';
import service from '@/utils/axios-request';

export default {
  // 创建角色
  create(parmas) {
    return doPost('/admin/role', parmas);
  },
  // 查询角色列表
  queryList(params) {
    return doGet('/admin/role', params);
  },
  // 修改角色
  edit(params) {
    return service.put('/admin/role', params);
  },
  // 删除角色
  delete(params) {
    console.log('删除参数', params);
    return service.delete('/admin/role', { params });
  },
};
