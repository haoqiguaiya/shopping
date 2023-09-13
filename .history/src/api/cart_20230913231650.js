import request from '@/utils/requests'
export const addCart = (goodsId, goodsNum, goodsSkuId) => {
  return request.post('/cart/add', {
    params: {
      goodsId,
      goodsNum,
      goodsSkuId
    }
  })
}
