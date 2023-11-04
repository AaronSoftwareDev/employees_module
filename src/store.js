import { createStore } from 'vuex';

export default createStore({
  state: {
    useraccount: 0
  },
  mutations: {
    setUserAccount(state, accountType) {
      state.useraccount = accountType;
    },
    increment(state) {
      state.count++
    },
    decrement(state) {
      state.count--
    }
  }
});
