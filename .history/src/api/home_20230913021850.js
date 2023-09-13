import request from '@/utils/requests'
export const getHome = () => {
  return request.get('/page/detail')
}
