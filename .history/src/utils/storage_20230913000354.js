const infoKey = 'shopping_info'
export const getInfo = () => {
  const result = localStorage.getItem(infoKey)
  return result ? JSON.parse(result) : { token: '', userId: '' }
}
export const setInfo = obj => {
  localStorage.setItem(infoKey, JSON.stringify(obj))
}
export const moveInfo = () => {
  localStorage.removeItem(infoKey)
}
