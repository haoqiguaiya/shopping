const infoKey = 'shopping_info'
export const getInfo = info => {
  return xxx
}
export const setInfo = info => {
  localStorage.setItem(infoKey, JSON.stringify(info))
}
export const moveInfo = info => {
  localStorage.removeItem(infoKey)
}
