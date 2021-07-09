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
    <div class="row card">
      <h5 style="text-align: center; color: white">ORP</h5>
      <ORP class="product" :title="getget"/>
    </div>
    <div class="row card">
      <h5 style="text-align: center; color: white">mpp</h5>
      <MPP class="product" :title="getget"/>
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
  props: [ "title"],
  components: {
    ORP,
    MPP,
    // ORPDisplay,
    // MPPDisplay,
  },
  methods: {
    ...mapActions(["setORP"]),
    ...mapActions(["setTemp"]),
    ...mapActions(["setPh"]),
    ...mapActions(["setSalinity"]),
    ...mapActions(["setDo"]),
  },
    computed: {
    ...mapGetters({ getget: "getCurrentR1" }),
  },
  mounted() {
    this.setORP();
    this.setTemp();
    this.setPh();
    this.setSalinity();
    this.setDo();
    setInterval(this.setORP, 20000);
    setInterval(this.setTemp, 20000);
    setInterval(this.setPh, 20000);
    setInterval(this.setSalinity, 20000);
    setInterval(this.setDo, 20000);
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