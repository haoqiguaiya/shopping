import request from '@/utils/requests'
export const addCart = (goodsId, goodsNum, goodsSkuId) => {
  return request.post('/cart/add', {
    goodsId,
    goodsNum,
    goodsSkuId
  })
}
export const getCart = () => {
  return request.get('/cart/list')
}
