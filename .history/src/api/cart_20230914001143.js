import request from '@/utils/requests'
export const addCart = (goodsId, goodsNum, goodsSkuId) => {
  return request.post('/cart/add', {
    query: {
      goodsId: 10043,
      goodsNum,
      goodsSkuId
    }
  })
}
