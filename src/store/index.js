import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);


export default new Vuex.Store({
  state: {
    status: {
      currentR1: {
        title: "R1",
        orpOrp: {
          title: "ORP",
          max: "1400",
          min: "0",
          currentValue: "",
          upperlimit: "380",
          lowerlimit: "240",
        },
        orpTemp: {
          title: "Temp",
          max: "35",
          min: "22",
          currentValue: "",
          upperlimit: "32",
          lowerlimit: "25",
        },
        orpPh: {
          title: "Ph",
          max: "14",
          min: "0",
          currentValue: "",
          upperlimit: "9.5",
          lowerlimit: "4.5",
        },
        mppOrp: {
          title: "ORP",
          max: "1400",
          min: "0",
          currentValue: "",
          upperlimit: "380",
          lowerlimit: "240",
        },
        mppTemp: {
          title: "Temp",
          max: "35",
          min: "22",
          currentValue: "",
          upperlimit: "32",
          lowerlimit: "25",
        },
        mppPh: {
          title: "Ph",
          max: "14",
          min: "0",
          currentValue: "",
          upperlimit: "9.5",
          lowerlimit: "4.5",
        },
        mppSal: {
          title: "Salinity",
          max: "32",
          min: "0",
          currentValue: "",
          upperlimit: "25",
          lowerlimit: "18",
        },
        mppDO: {
          title: "DO",
          max: "14",
          min: "0",
          currentValue: "",
          upperlimit: "8",
          lowerlimit: "4",
        },
      },
      currentR2: {
        title: "R2",
        orpOrp: {
          title: "ORP",
          max: "1400",
          min: "0",
          currentValue: "",
          upperlimit: "380",
          lowerlimit: "240",
        },
        orpTemp: {
          title: "Temp",
          max: "35",
          min: "22",
          currentValue: "",
          upperlimit: "32",
          lowerlimit: "25",
        },
        orpPh: {
          title: "Ph",
          max: "14",
          min: "0",
          currentValue: "",
          upperlimit: "9.5",
          lowerlimit: "4.5",
        },
        mppOrp: {
          title: "ORP",
          max: "1400",
          min: "0",
          currentValue: "",
          upperlimit: "380",
          lowerlimit: "240",
        },
        mppTemp: {
          title: "Temp",
          max: "35",
          min: "22",
          currentValue: "",
          upperlimit: "32",
          lowerlimit: "25",
        },
        mppPh: {
          title: "Ph",
          max: "14",
          min: "0",
          currentValue: "",
          upperlimit: "9.5",
          lowerlimit: "4.5",
        },
        mppSal: {
          title: "Salinity",
          max: "32",
          min: "0",
          currentValue: "",
          upperlimit: "25",
          lowerlimit: "18",
        },
        mppDO: {
          title: "DO",
          max: "14",
          min: "0",
          currentValue: "",
          upperlimit: "8",
          lowerlimit: "4",
        },
      },
      currentR3: {
        title: "R3",
        orpOrp: {
          title: "ORP",
          max: "1400",
          min: "0",
          currentValue: "",
          upperlimit: "380",
          lowerlimit: "240",
        },
        orpTemp: {
          title: "Temp",
          max: "35",
          min: "22",
          currentValue: "",
          upperlimit: "32",
          lowerlimit: "25",
        },
        orpPh: {
          title: "Ph",
          max: "14",
          min: "0",
          currentValue: "",
          upperlimit: "9.5",
          lowerlimit: "4.5",
        },
        mppOrp: {
          title: "ORP",
          max: "1400",
          min: "0",
          currentValue: "",
          upperlimit: "380",
          lowerlimit: "240",
        },
        mppTemp: {
          title: "Temp",
          max: "35",
          min: "22",
          currentValue: "",
          upperlimit: "32",
          lowerlimit: "25",
        },
        mppPh: {
          title: "Ph",
          max: "14",
          min: "0",
          currentValue: "",
          upperlimit: "9.5",
          lowerlimit: "4.5",
        },
        mppSal: {
          title: "Salinity",
          max: "32",
          min: "0",
          currentValue: "",
          upperlimit: "25",
          lowerlimit: "18",
        },
        mppDO: {
          title: "DO",
          max: "14",
          min: "0",
          currentValue: "",
          upperlimit: "8",
          lowerlimit: "4",
        },
      },
    },
  },
  mutations: {
    //syncrous
    setStatus1(state, payload) {
      state.status = payload;
    },
    setStatus2(state, payload) {
      state.status = payload;
    },
    setStatus3(state, payload) {
      state.status = payload;
    },

    setORP1(state, payload) {
      state.status.currentR1.orpOrp.currentValue = payload;
      state.status.currentR1.mppOrp.currentValue = payload;
    },
    setORP2(state, payload) {
      state.status.currentR2.orpOrp.currentValue = payload;
      state.status.currentR2.mppOrp.currentValue = payload;
    },
    setORP3(state, payload) {
      state.status.currentR3.orpOrp.currentValue = payload;
      state.status.currentR3.mppOrp.currentValue = payload;
    },
    setTemp1(state, payload) {
      state.status.currentR1.orpTemp.currentValue = payload;
      state.status.currentR1.mppTemp.currentValue = payload;
    },
    setTemp2(state, payload) {
      state.status.currentR2.orpTemp.currentValue = payload;
      state.status.currentR2.mppTemp.currentValue = payload;
    },
    setTemp3(state, payload) {
      state.status.currentR3.orpTemp.currentValue = payload;
      state.status.currentR3.mppTemp.currentValue = payload;
    },
    setPh1(state, payload) {
      state.status.currentR1.orpPh.currentValue = payload;
      state.status.currentR1.mppPh.currentValue = payload;
    },
    setPh2(state, payload) {
      state.status.currentR2.orpPh.currentValue = payload;
      state.status.currentR2.mppPh.currentValue = payload;
    },
    setPh3(state, payload) {
      state.status.currentR3.orpPh.currentValue = payload;
      state.status.currentR3.mppPh.currentValue = payload;
    },
    setSalinity1(state, payload) {
      state.status.currentR1.mppSal.currentValue = payload;
    },
    setSalinity2(state, payload) {
      state.status.currentR2.mppSal.currentValue = payload;
    },
    setSalinity3(state, payload) {
      state.status.currentR3.mppSal.currentValue = payload;
    },
    setDo1(state, payload) {
      state.status.currentR1.mppDO.currentValue = payload;
    },
    setDo2(state, payload) {
      state.status.currentR2.mppDO.currentValue = payload;
    },
    setDo3(state, payload) {
      state.status.currentR3.mppDO.currentValue = payload;
    },
  },
  actions: {
    //asyncronous
    async setStatus1(state){
      const random = Math.floor(Math.random() * 1400);
      state.commit("setORP1", random);
      const random1 = Math.floor((Math.random() * (34 - 20 + 1)) + 20);
      state.commit("setTemp1", random1);
      const random2 = Math.floor(Math.random() * 14);
      state.commit("setPh1", random2);
      const random3 = Math.floor(Math.random() * 32);
      state.commit("setSalinity1", random3);
      const random4 = Math.floor(Math.random() * 12);
      state.commit("setDo1", random4);
    },


    async setStatus2(state){
      const random = Math.floor(Math.random() * 1400);
      state.commit("setORP2", random);
      const random1 = Math.floor((Math.random() * (34 - 20 + 1)) + 20);
      state.commit("setTemp2", random1);
      const random2 = Math.floor(Math.random() * 14);
      state.commit("setPh2", random2);
      const random3 = Math.floor(Math.random() * 32);
      state.commit("setSalinity2", random3);
      const random4 = Math.floor(Math.random() * 12);
      state.commit("setDo2", random4);
    },

    async setStatus3(state){
      const random = Math.floor(Math.random() * 1400);
      state.commit("setORP3", random);
      const random1 = Math.floor((Math.random() * (34 - 20 + 1)) + 20);
      state.commit("setTemp3", random1);
      const random2 = Math.floor(Math.random() * 14);
      state.commit("setPh3", random2);
      const random3 = Math.floor(Math.random() * 32);
      state.commit("setSalinity3", random3);
      const random4 = Math.floor(Math.random() * 12);
      state.commit("setDo3", random4);
    },

    // async setORP2(state) {
    //   const random = Math.floor(Math.random() * 1400);
    //   state.commit("setORP2", random);
    // },
    // async setTemp2(state) {
    //   const random = Math.floor((Math.random() * (34 - 20 + 1)) + 20);
    //   state.commit("setTemp2", random);
    // },
    // async setPh2(state) {
    //   const random = Math.floor(Math.random() * 14);
    //   state.commit("setPh2", random);
    // },
    // async setSalinity2(state) {
    //   const random = Math.floor(Math.random() * 32);
    //   state.commit("setSalinity2", random);
    // },
    // async setDo2(state) {
    //   const random = Math.floor(Math.random() * 12);
    //   state.commit("setDo2", random);
    // },

    // async setORP3(state) {
    //   const random = Math.floor(Math.random() * 1400);
    //   state.commit("setORP3", random);
    // },
    // async setTemp3(state) {
    //   const random = Math.floor((Math.random() * (34 - 20 + 1)) + 20);
    //   state.commit("setTemp3", random);
    // },
    // async setPh3(state) {
    //   const random = Math.floor(Math.random() * 14);
    //   state.commit("setPh3", random);
    // },
    // async setSalinity3(state) {
    //   const random = Math.floor(Math.random() * 32);
    //   state.commit("setSalinity3", random);
    // },
    // async setDo3(state) {
    //   const random = Math.floor(Math.random() * 12);
    //   state.commit("setDo3", random);
    // },

  },
  modules: {},
  getters: {
    getCurrentR1: state => state.status,
  }
});
