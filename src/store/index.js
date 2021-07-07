import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);


export default new Vuex.Store({
  state: {
    currentR1:{
      orpOrp:{
        upperlimit:"380",
        lowerlimit:"240"
      },
      orpTemp:{
        upperlimit:"32",
        lowerlimit:"25"
      },
      orpPh:{
        upperlimit:"9.5",
        lowerlimit:"4.5"
      },
      mppORP:{
        upperlimit:"380",
        lowerlimit:"240"
      },
      mppTemp:{
        upperlimit:"32",
        lowerlimit:"25"
      },
      mppPh:{
        upperlimit:"9.5",
        lowerlimit:"4.5"
      },
      mppSal:{
        upperlimit:"25",
        lowerlimit:"18"
      },
      mppDO:{
        upperlimit:"8",
        lowerlimit:"4"
      },
    },
    currentORP: "",
    currentTemp: "",
    currentPh: "",
    currentSalinity:"",
    currentDO:"",
  },
  mutations: {
    //syncrous
    setR1(state, payload) {
      state.currentR1 = payload;
    },
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
    getCurrentR1: state => state.currentR1,
    //getPlusTen: state => state.currentORP + 10,
  }
});
