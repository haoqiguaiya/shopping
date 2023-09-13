import request from '@/utils/requests'
export const getProList = (obj) => {
  const { categoryId, goodsName, page } = obj
  return request.get('/goods/list', {
    params: {
      categoryId,
      goodsName,
      page
    }
  })
}
export const getProDetail = (goodsId) => { // 商品详情接口
  return request.get('/goods/detail', {
    params: {
      goodsId
    }

  })
}
export const getProComments = (goodsId, limit) => {
  return request.get('/comment/listRows', {
    params: {
      goodsId,
      limit
    }
  })
}
