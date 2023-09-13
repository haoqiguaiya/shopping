import { getCartList } from '@/api/cart'
export default {
  namespaced: true,
  state () {
    return {
      cartList: []
    }
  },
  getters: {},
  mutations: {
    setCartList () {
      this.cartList = getCartAction
    }
  },
  actions: {
    async getCartAction () {
      return await getCartList()
    }
  }

}
