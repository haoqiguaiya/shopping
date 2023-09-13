import request from '@/utils/requests'
export const getPicCode = () => {
  return request.get('/captcha/image')
}
