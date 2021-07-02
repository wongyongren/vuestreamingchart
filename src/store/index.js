import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);


export default new Vuex.Store({
  state: {
    currentORP: "",
    checked: '',
    postId: null,
    lastStatus: '',
    loading: false
  },
  mutations: {
    //syncrous
    setORP(state, payload) {
      state.currentORP = payload;
    },
    getLastStatus(state, payload) {
      state.lastStatus = payload;
    },
    updateSwitch(state, payload) {
      state.loading = payload;
    },
    postCurrentId(state, payload) {
      state.checked = payload;
      if (state.checked === true) {
        state.checked = false;
        this.commit("setORP", state.checked);
      } else {
        state.checked = true;
        this.commit("setORP", state.checked);
      }
    }
  },
  actions: {
    //asyncronous
    async setORP(state) {
      const random = Math.floor(Math.random() * 35);
      //const joke = await fetch(`http://localhost:3000/modes/?id=${random}`);
      //const j = await joke.json();
      //this.totalVuePackages = j[0].id;
      state.commit("setORP", random);
      console.log(this.totalVuePackages);
    },
  },
  modules: {},
  getters: {
    getCurrentORP: state => state.currentORP,
    getOnOffStatus: state => state.lastStatus,
    getSwitchStatus: state => state.loading,
    getPlusTen: state => state.currentORP + 10,
  }
});
