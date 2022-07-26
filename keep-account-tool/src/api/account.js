import service from '@/utils/request'

export default {
  listByCurrentMonth(params = {}) {
    return service.post('/account/list_by_current_month', params)
  }
}