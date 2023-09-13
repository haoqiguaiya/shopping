const infoKey = 'shopping_info'
export const getInfo = info => {
  const result = localStorage.getItem(info)
  return result ? JSON.parse(result) : { userInfo: '', userId: '' }
}
export const setInfo = info => {
  localStorage.setItem(infoKey, JSON.stringify(info))
}
export const moveInfo = info => {
  localStorage.removeItem(infoKey)
}
