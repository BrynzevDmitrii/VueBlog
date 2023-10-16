import Vuex from 'vuex';


const store = new Vuex.Store({
  state: {
    count: 0
  },
  getters: {},
  mutations: {
    increment (state) {
        state.count++
      }
  },
  actions: {},
});


export default store;