<template>
  <div id="app" class="row">
    <div class="row">
      <ORPDisplay class="product" />
    </div>
    <div class="row">
      <MPPDisplay class="product" />
    </div>
  </div>
</template>

<script>
import ORPDisplay from "./components/ORP/ORPdisplay.vue";
import MPPDisplay from "./components/MPP/MPPdisplay.vue";
import { mapActions } from "vuex";
export default {
  name: "app",

  components: {
    ORPDisplay,
    MPPDisplay,
  },
  methods: {
    ...mapActions(["setORP"]),
    ...mapActions(["setTemp"]),
    ...mapActions(["setPh"]),
    ...mapActions(["setSalinity"]),
    ...mapActions(["setDo"]),
  },
  mounted() {
    this.setORP();
    this.setTemp();
    this.setPh();
    this.setSalinity();
    this.setDo();
    setInterval(this.setORP, 10000);
    setInterval(this.setTemp, 10000);
    setInterval(this.setPh, 10000);
    setInterval(this.setSalinity, 10000);
    setInterval(this.setDo, 10000);
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
h5{
margin:0px;
}
</style>