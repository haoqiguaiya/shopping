const infoKey = 'shopping_info'
export const getInfo = info => {
  infoKey ? JSON.parse(localStorage.getItem(info)) : { userId: '', userId: '' }
}
export const setInfo = info => {
  localStorage.setItem(infoKey, JSON.stringify(info))
}
export const moveInfo = info => {
  localStorage.removeItem(infoKey)
}
