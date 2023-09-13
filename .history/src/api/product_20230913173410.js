import request from '@/utils/requests'
export const getProList = (categoryId, goodsName, page) => {
  return request.get('/goods/list', {
    params: {
      categoryId,
      goodsName,
      page
    }
  })
}
