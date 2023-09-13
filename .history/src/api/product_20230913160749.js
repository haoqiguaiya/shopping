import requst from '@/utils/requests'
export const getProList = () => {
  return requst.get('/goods/list')
}
