import request from '@/utils/requests'
export const getAddressList = () => { // 获取订单页数据
  return request.post('/address/list')
}
// export const addressList = () => { // 添加地址
//   return request.post('/address/add', {
//     form: {
//       name: '小明',
//       phone: '13811112222',
//       region: [
//         { value: '217', label: '山西省' },
//         { value: '218', label: '太原市' },
//         { value: '219', label: '小店区' }
//       ],
//       detail: '100号709室'
//     }
//   })
// }
//
export const checkOrder = (mode, obj) => {
  return request.get('/checkout/order', {
    mode,
    delivery: 10,
    couponId: 0,
    isUsePoints: 0,
    remark: '',
    ...obj
  })
}
