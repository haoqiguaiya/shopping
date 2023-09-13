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

    }
  },
  actions: {
    async getCartAction () {
      return await getCartList()
    }
  }

}
