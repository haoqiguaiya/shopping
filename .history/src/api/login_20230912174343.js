export const getPicCode = () => {
  request.get('/captcha/image')
}
