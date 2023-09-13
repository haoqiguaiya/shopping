import request from '@/utils/requests'
export const addCart = (goodsId,goodsNum,goodsSkuld) => {
  return request.post('/cart/add',{
    params:{
        Access-Token,
        platform
    }
  })
}
