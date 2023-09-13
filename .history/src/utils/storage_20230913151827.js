const INFO_KEY = 'shopping_info'
const HISTORY_KEY = 'history_info'
export const getInfo = () => {
  const result = localStorage.getItem(INFO_KEY)
  if (!result || result === undefined) {
    return { token: '', userId: '' }
  } else {
    return JSON.parse(result)
  }
}
export const setInfo = obj => {
  localStorage.setItem(INFO_KEY, JSON.stringify(obj))
}
export const moveInfo = () => {
  localStorage.removeItem(INFO_KEY)
}
