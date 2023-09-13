import request from '@/utils/requests'
export const getPicCode = () => {
  return request.get('/captcha/image')
}
// 获取短信验证码
export const getMsgCode = () => {
  return request.post('/captcha/sendSmsCaptcha')
}
