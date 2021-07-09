import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);


export default new Vuex.Store({
  state: {
    status:{
      currentR1:{
        orpOrp:{
          title:"ORP",
          max:"1400",
          min:"0",
          currentValue: "",
          upperlimit:"380",
          lowerlimit:"240",
        },
        orpTemp:{
          title:"Temp",
          max:"35",
          min:"22",
          currentValue: "",
          upperlimit:"32",
          lowerlimit:"25",
        },
        orpPh:{
          title:"Ph",
          max:"14",
          min:"0",
          currentValue: "",
          upperlimit:"9.5",
          lowerlimit:"4.5",
        },
        mppOrp:{
          title:"ORP",
          max:"1400",
          min:"0",
          currentValue: "",
          upperlimit:"380",
          lowerlimit:"240",
        },
        mppTemp:{
          title:"Temp",
          max:"35",
          min:"22",
          currentValue: "",
          upperlimit:"32",
          lowerlimit:"25",
        },
        mppPh:{
          title:"Ph",
          max:"14",
          min:"0",
          currentValue: "",
          upperlimit:"9.5",
          lowerlimit:"4.5",
        },
        mppSal:{
          title:"Salinity",
          max:"32",
          min:"0",
          currentValue: "",
          upperlimit:"25",
          lowerlimit:"18",
        },
        mppDO:{
          title:"DO",
          max:"14",
          min:"0",
          currentValue: "",
          upperlimit:"8",
          lowerlimit:"4",
        },
      },
      currentR2:{
        orpOrp:{
          title:"ORP",
          max:"1400",
          min:"0",
          currentValue: "",
          upperlimit:"380",
          lowerlimit:"240",
        },
        orpTemp:{
          title:"Temp",
          max:"35",
          min:"22",
          currentValue: "",
          upperlimit:"32",
          lowerlimit:"25",
        },
        orpPh:{
          title:"Ph",
          max:"14",
          min:"0",
          currentValue: "",
          upperlimit:"9.5",
          lowerlimit:"4.5",
        },
        mppOrp:{
          title:"ORP",
          max:"1400",
          min:"0",
          currentValue: "",
          upperlimit:"380",
          lowerlimit:"240",
        },
        mppTemp:{
          title:"Temp",
          max:"35",
          min:"22",
          currentValue: "",
          upperlimit:"32",
          lowerlimit:"25",
        },
        mppPh:{
          title:"Ph",
          max:"14",
          min:"0",
          currentValue: "",
          upperlimit:"9.5",
          lowerlimit:"4.5",
        },
        mppSal:{
          title:"Salinity",
          max:"32",
          min:"0",
          currentValue: "",
          upperlimit:"25",
          lowerlimit:"18",
        },
        mppDO:{
          title:"DO",
          max:"14",
          min:"0",
          currentValue: "",
          upperlimit:"8",
          lowerlimit:"4",
        },
      },
      currentR3:{
        orpOrp:{
          title:"ORP",
          max:"1400",
          min:"0",
          currentValue: "",
          upperlimit:"380",
          lowerlimit:"240",
        },
        orpTemp:{
          title:"Temp",
          max:"35",
          min:"22",
          currentValue: "",
          upperlimit:"32",
          lowerlimit:"25",
        },
        orpPh:{
          title:"Ph",
          max:"14",
          min:"0",
          currentValue: "",
          upperlimit:"9.5",
          lowerlimit:"4.5",
        },
        mppOrp:{
          title:"ORP",
          max:"1400",
          min:"0",
          currentValue: "",
          upperlimit:"380",
          lowerlimit:"240",
        },
        mppTemp:{
          title:"Temp",
          max:"35",
          min:"22",
          currentValue: "",
          upperlimit:"32",
          lowerlimit:"25",
        },
        mppPh:{
          title:"Ph",
          max:"14",
          min:"0",
          currentValue: "",
          upperlimit:"9.5",
          lowerlimit:"4.5",
        },
        mppSal:{
          title:"Salinity",
          max:"32",
          min:"0",
          currentValue: "",
          upperlimit:"25",
          lowerlimit:"18",
        },
        mppDO:{
          title:"DO",
          max:"14",
          min:"0",
          currentValue: "",
          upperlimit:"8",
          lowerlimit:"4",
        },
      },
    },
  },
  mutations: {
    //syncrous
    setStatus(state, payload) {
      state.status = payload;
    },
    setORP(state, payload) {
      state.status.currentR1.orpOrp.currentValue = payload;
      state.status.currentR1.mppOrp.currentValue = payload;
      state.status.currentR2.orpOrp.currentValue = payload;
      state.status.currentR2.mppOrp.currentValue = payload;
      state.status.currentR3.orpOrp.currentValue = payload;
      state.status.currentR3.mppOrp.currentValue = payload;
    },
    setTemp(state, payload) {
      state.status.currentR1.orpTemp.currentValue = payload;
      state.status.currentR1.mppTemp.currentValue = payload;
      state.status.currentR2.orpTemp.currentValue = payload;
      state.status.currentR2.mppTemp.currentValue = payload;
      state.status.currentR3.orpTemp.currentValue = payload;
      state.status.currentR3.mppTemp.currentValue = payload;
    },
    setPh(state, payload) {
      state.status.currentR1.orpPh.currentValue = payload;
      state.status.currentR1.mppPh.currentValue = payload;
      state.status.currentR2.orpPh.currentValue = payload;
      state.status.currentR2.mppPh.currentValue = payload;
      state.status.currentR3.orpPh.currentValue = payload;
      state.status.currentR3.mppPh.currentValue = payload;
    },
    setSalinity(state, payload) {
      state.status.currentR1.mppSal.currentValue = payload;
      state.status.currentR2.mppSal.currentValue = payload;
      state.status.currentR3.mppSal.currentValue = payload;
    },
    setDo(state, payload) {
      state.status.currentR1.mppDO.currentValue = payload;
      state.status.currentR2.mppDO.currentValue = payload;
      state.status.currentR3.mppDO.currentValue = payload;
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
    getCurrentR1: state => state.status,
    // getPlusTen: state => state.currentR1.orpOrp.currentORP + 10,
  }
});
