import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);


export default new Vuex.Store({
  state: {
    currentR1:{
      orpOrp:{
        title:"ORP",
        max:"1400",
        min:"0",
        currentValue: "",
        upperlimit:"380",
        lowerlimit:"240",
        current: "getCurrentORP",
      },
      orpTemp:{
        title:"Temp",
        max:"35",
        min:"22",
        currentValue: "",
        upperlimit:"32",
        lowerlimit:"25",
        current: "getCurrentTemp"
      },
      orpPh:{
        title:"Ph",
        max:"14",
        min:"0",
        currentValue: "",
        upperlimit:"9.5",
        lowerlimit:"4.5",
        current: "getCurrentPh"
      },
      mppOrp:{
        title:"ORP",
        max:"1400",
        min:"0",
        currentValue: "",
        upperlimit:"380",
        lowerlimit:"240",
        current: "getCurrentORP"
      },
      mppTemp:{
        title:"Temp",
        max:"35",
        min:"22",
        currentValue: "",
        upperlimit:"32",
        lowerlimit:"25",
        current: "getCurrentORP"
      },
      mppPh:{
        title:"Ph",
        max:"14",
        min:"0",
        currentValue: "",
        upperlimit:"9.5",
        lowerlimit:"4.5",
        current: "getCurrentORP"
      },
      mppSal:{
        title:"Salinity",
        max:"32",
        min:"0",
        currentValue: "",
        upperlimit:"25",
        lowerlimit:"18",
        current: "getCurrentORP"
      },
      mppDO:{
        title:"DO",
        max:"14",
        min:"0",
        currentValue: "",
        upperlimit:"8",
        lowerlimit:"4",
        current: "getCurrentORP"
      },
    },
  },
  mutations: {
    //syncrous
    setR1(state, payload) {
      state.currentR1 = payload;
    },
    setORP(state, payload) {
      state.currentR1.orpOrp.currentValue = payload;
      state.currentR1.mppOrp.currentValue = payload;
    },
    setTemp(state, payload) {
      state.currentR1.orpTemp.currentValue = payload;
      state.currentR1.mppTemp.currentValue = payload;
    },
    setPh(state, payload) {
      state.currentR1.orpPh.currentValue = payload;
      state.currentR1.mppPh.currentValue = payload;
    },
    setSalinity(state, payload) {
      state.currentR1.mppSal.currentValue = payload;
    },
    setDo(state, payload) {
      state.currentR1.mppDO.currentValue = payload;
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
      const random = Math.floor(Math.random() * 32);
      state.commit("setSalinity", random);
    },
    async setDo(state) {
      const random = Math.floor(Math.random() * 12);
      state.commit("setDo", random);
    },
  },
  modules: {},
  getters: {
    // getCurrentORP: state => state.currentR1.orpOrp.currentValue,
    // getCurrentTemp: state => state.currentR1.orpTemp.currentValue,
    // getCurrentPh: state => state.currentR1.orpPh.currentValue,
    // getCurrentSalinity: state => state.currentSalinity,
    // getCurrentDO: state => state.currentDO,
    getCurrentR1: state => state.currentR1,
    // getPlusTen: state => state.currentR1.orpOrp.currentORP + 10,
  }
});
