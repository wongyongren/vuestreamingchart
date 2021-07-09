<template>
  <div id="app" class="row main">
    <!-- <div class="row card">
      <h5 style="text-align: center; color: white">ORP</h5>
      <ORPDisplay class="product" />
    </div>
    <div class="row card">
      <h5 style="text-align: center; color: white">MPP</h5>
      <MPPDisplay class="product" />
    </div> -->
    <div v-for="item in getget" :key="item.status" class="row">
      <h1>{{ item.title }}</h1>
      <div class="row card">
        {{ item.status }}
        <h5 style="text-align: center; color: white">ORP</h5>
        <ORP class="product" :title="item" />
      </div>
      <div class="row card">
        <h5 style="text-align: center; color: white">MPP</h5>
        <MPP class="product" :title="item" />
      </div>
    </div>
  </div>
</template>

<script>
// import ORPDisplay from "./components/ORP/ORPdisplay.vue";
// import MPPDisplay from "./components/MPP/MPPdisplay.vue";
import ORP from "./components/display/ORPdisplay.vue";
import MPP from "./components/display/MPPdisplay.vue";
import { mapGetters } from "vuex";
import { mapActions } from "vuex";
export default {
  name: "app",
  props: ["title"],
  components: {
    ORP,
    MPP,
    // ORPDisplay,
    // MPPDisplay,
  },
  methods: {
    ...mapActions(["setORP1"]),
    ...mapActions(["setTemp1"]),
    ...mapActions(["setPh1"]),
    ...mapActions(["setSalinity1"]),
    ...mapActions(["setDo1"]),

    ...mapActions(["setORP2"]),
    ...mapActions(["setTemp2"]),
    ...mapActions(["setPh2"]),
    ...mapActions(["setSalinity2"]),
    ...mapActions(["setDo2"]),

    ...mapActions(["setORP3"]),
    ...mapActions(["setTemp3"]),
    ...mapActions(["setPh3"]),
    ...mapActions(["setSalinity3"]),
    ...mapActions(["setDo3"]),
  },
  computed: {
    ...mapGetters({ getget: "getCurrentR1" }),
  },
  mounted() {
    this.setORP1();
    this.setTemp1();
    this.setPh1();
    this.setSalinity1();
    this.setDo1();
    setInterval(this.setORP1, 20000);
    setInterval(this.setTemp1, 20000);
    setInterval(this.setPh1, 20000);
    setInterval(this.setSalinity1, 20000);
    setInterval(this.setDo1, 20000);

    this.setORP2();
    this.setTemp2();
    this.setPh2();
    this.setSalinity2();
    this.setDo2();
    setInterval(this.setORP2, 20000);
    setInterval(this.setTemp2, 20000);
    setInterval(this.setPh2, 20000);
    setInterval(this.setSalinity2, 20000);
    setInterval(this.setDo2, 20000);

    this.setORP3();
    this.setTemp3();
    this.setPh3();
    this.setSalinity3();
    this.setDo3();
    setInterval(this.setORP3, 20000);
    setInterval(this.setTemp3, 20000);
    setInterval(this.setPh3, 20000);
    setInterval(this.setSalinity3, 20000);
    setInterval(this.setDo3, 20000);
  },
};
</script>

<style scoped>
.row {
  display: flex;
  flex-wrap: wrap;
}
.row .product {
  margin: 2px;
}
.card {
  position: relative;
  display: -ms-flexbox;
  display: flex;
  -ms-flex-direction: column;
  flex-direction: column;
  min-width: 0;
  word-wrap: break-word;
  background: #202940;
  background-clip: border-box;
  border: 1px solid rgba(0, 0, 0, 0.125);
  border-radius: 0.25rem;
  padding: 0.5rem;
  border-radius: 5px;
  margin-bottom: 30px;
  -webkit-box-shadow: 2px 6px 15px 0px rgb(69 65 78 / 10%);
  -moz-box-shadow: 2px 6px 15px 0px rgba(69, 65, 78, 0.1);
  box-shadow: 2px 6px 15px 0px rgb(69 65 78 / 10%);
  border: 0px;
  margin-right: 0.5rem !important;
}
</style>