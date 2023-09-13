import request from '@/utils/requests'
export const addCart = (goodsId, goodsNum, goodsSkuId) => {
  return request.post('/cart/add', {
    goodsId,
    goodsNum,
    goodsSkuId
  })
}
export const getCartList = () => {
  return request.get('/cart/list')
}
// 修改参数
export const updateCartList = (goodsId, goodsNum, goodsSkuId) => {
  return request.post('/cart/update',{
    goodsId,
    goodsNum,
    goodsSkuId)
}
