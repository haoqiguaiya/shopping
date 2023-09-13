import request from '@/utils/requests'
export const getProDetail = (goodsId) => {
  return request.get('/goods/detail', {
    goodsId
  })
}
