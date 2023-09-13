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
export const getHistoryList = () => {
  const result = localStorage.getItem(HISTORY_KEY)
  if (!result || result === undefined) {
    return []
  } else {
    return JSON.parse(result)
  }
}
export const setHistoryLst = arr => {
  localStorage.setItem(HISTORY_KEY, JSON.stringify(arr))
}
