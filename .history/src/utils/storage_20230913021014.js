const infoKey = 'shopping_info'
export const getInfo = () => {
  const result = localStorage.getItem(infoKey)
  if(!result || result === undefined){
   return { token: '', userId: '' }}else{
      JSON.parse(result)
    }
  return result ?  : 
}
export const setInfo = obj => {
  localStorage.setItem(infoKey, JSON.stringify(obj))
}
export const moveInfo = () => {
  localStorage.removeItem(infoKey)
}
