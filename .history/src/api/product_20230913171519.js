import requst from '@/utils/requests'
export const getProList = (ategoryId, goodsNameage) => {
  return requst.get('/goods/list', {
    params: {
      categoryId: '',
      goodsName: '',
      page: ''
    }
  })
}
