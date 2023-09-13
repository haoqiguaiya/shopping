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
    setCartList (state) {
      state.cartList = getCartAction()
    }
  },
  actions: {
    async getCartAction (context) {
      const { data } = await getCartList()
      context.commit('setCartList', data.list)
    }
  }

}
