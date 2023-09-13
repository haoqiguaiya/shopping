import request from '@/utils/requests'
export const addCart = (Access-Token,platform) => {
  return request.post('/cart/add',{
    params:{
        Access-Token,
        platform
    }
  })
}
