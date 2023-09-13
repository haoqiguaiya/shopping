import request from '@/utils/requests'
export const addCart = (goodsId, goodsNum, goodsSkuId) => {
  return request.post('/cart/add', {
    query: {
      goodsId,
      goodsNum,
      goodsSkuId
    }
  })
}
