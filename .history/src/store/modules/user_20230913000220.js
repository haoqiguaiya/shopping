import { setInfo, getInfo } from '@/utils/storage'
export default {
  namespaced: true,
  state () {
    return {
      userInfo: {
        token: '',
        userId: ''
      }
    }
  },
  getters: {
  },
  mutations: {
    setUserInfo (state, obj) {
      state.userInfo = obj
    }
  },
  actions: {
  }
}
