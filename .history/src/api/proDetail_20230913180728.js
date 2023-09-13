import request from '@/utils/requests'
export const getDetail = (goodsId) => {
  return request.get('/goods/detail', {
    goodsId
  })
}
