import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);


export default new Vuex.Store({
  state: {
    currentR1:{
      orpOrp:{
        max:"1400",
        min:"0",
        currentValue: "",
        upperlimit:"380",
        lowerlimit:"240",
        current: "getCurrentORP",
      },
      orpTemp:{
        max:"35",
        min:"22",
        currentValue: "",
        upperlimit:"32",
        lowerlimit:"25",
        current: "getCurrentTemp"
      },
      orpPh:{
        max:"14",
        min:"0",
        currentValue: "",
        upperlimit:"9.5",
        lowerlimit:"4.5",
        current: "getCurrentPh"
      },
      mppORP:{
        upperlimit:"380",
        lowerlimit:"240",
        current: "getCurrentORP"
      },
      mppTemp:{
        upperlimit:"32",
        lowerlimit:"25",
        current: "getCurrentORP"
      },
      mppPh:{
        upperlimit:"9.5",
        lowerlimit:"4.5",
        current: "getCurrentORP"
      },
      mppSal:{
        upperlimit:"25",
        lowerlimit:"18",
        current: "getCurrentORP"
      },
      mppDO:{
        upperlimit:"8",
        lowerlimit:"4",
        current: "getCurrentORP"
      },
    },
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
      state.currentR1.orpOrp.currentValue = payload;
    },
    setTemp(state, payload) {
      state.currentR1.orpTemp.currentValue = payload;
    },
    setPh(state, payload) {
      state.currentR1.orpPh.currentValue = payload;
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
    getCurrentORP: state => state.currentR1.orpOrp.currentValue,
    getCurrentTemp: state => state.currentR1.orpTemp.currentValue,
    getCurrentPh: state => state.currentR1.orpPh.currentValue,
    getCurrentSalinity: state => state.currentSalinity,
    getCurrentDO: state => state.currentDO,
    getCurrentR1: state => state.currentR1,
    // getPlusTen: state => state.currentR1.orpOrp.currentORP + 10,
  }
});
