import request from '@/utils/requests'
export const addCart = () => {
  return request.post('/cart/add',{
    params:{
        Access-Token,
        platform
    }
  })
}
