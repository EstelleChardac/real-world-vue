import { createStore } from "vuex";

export default createStore({
  state: {
    //creating a new user state
    user: "Estelle",
    events: [],
  },
  getters: {},
  mutations: {
    ADD_EVENT(state, event) {
      state.events.push(event);
    },
  },
  actions: {},
  modules: {},
});
