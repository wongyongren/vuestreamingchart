import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);


export default new Vuex.Store({
  state: {
    currentORP: "",
    currentTemp: "",
    currentPh: "",
    currentSalinity:"",
    currentDO:"",
  },
  mutations: {
    //syncrous
    setORP(state, payload) {
      state.currentORP = payload;
    },
    setTemp(state, payload) {
      state.currentTemp = payload;
    },
    setPh(state, payload) {
      state.currentPh = payload;
    },
    setSalinity(state, payload) {
      state.currentSalinity = payload;
    },
    setDo(state, payload) {
      state.currentDO = payload;
    },
  },
  actions: {
    //asyncronous
    async setORP(state) {
      const random = Math.floor(Math.random() * 1400);
      state.commit("setORP", random);
    },
    async setTemp(state) {
      const random = Math.floor((Math.random() * (34 - 20 + 1 )) + 20);
      state.commit("setTemp", random);
    },
    async setPh(state) {
      const random = Math.floor(Math.random() * 14);
      state.commit("setPh", random);
    },
    async setSalinity(state) {
      const random = Math.floor(Math.random() * 40);
      state.commit("setSalinity", random);
    },
    async setDo(state) {
      const random = Math.floor(Math.random() * 12);
      state.commit("setDo", random);
    },
  },
  modules: {},
  getters: {
    getCurrentORP: state => state.currentORP,
    getCurrentTemp: state => state.currentTemp,
    getCurrentPh: state => state.currentPh,
    getCurrentSalinity: state => state.currentSalinity,
    getCurrentDO: state => state.currentDO,
    //getPlusTen: state => state.currentORP + 10,
  }
});
