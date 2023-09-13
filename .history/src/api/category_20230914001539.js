import request from '@/utils/requests'
export const getCategoryData = () => {
  return request.get('/category/list')
}
