import request from '@/utils/requests'
export const getPicCode = () => {
  return request.get('/captcha/image')
}
// 获取短信验证码
export const getMsgCode = (captchaCode, captchaKey, mobile) => {
  return request.post('/captcha/sendSmsCaptcha', {
    form: {
      captchaCode,
      captchaKey,
      mobile
    }
  })
}
// 验证登录
export const login = () => {
  return request.post('/passport/login', {
    form: {
      isParty,
      mobile,
      partyData,
      smsCode
    }
  })
}
