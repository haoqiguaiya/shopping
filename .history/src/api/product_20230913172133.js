import request from '@/utils/requests'
export const getProList = (ategoryId, goodsName, page) => {
  return request.get('/goods/list', {
    params: {
      categoryId: '',
      goodsName: '',
      page: ''
    }
  })
}
