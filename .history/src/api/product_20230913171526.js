import requst from '@/utils/requests'
export const getProList = (ategoryId, goodsName, page) => {
  return requst.get('/goods/list', {
    params: {
      categoryId: '',
      goodsName: '',
      page: ''
    }
  })
}
