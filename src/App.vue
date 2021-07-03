<template>
  <div id="app" class="row">
    <Displayorp class="product" />
    <Displaytemp class="product" />
    <Displayph class="product" />
  </div>
</template>

<script>
import Displayorp from "./components/ORP/displayORP.vue";
import Displaytemp from "./components/ORP/displayTemp.vue";
import Displayph from "./components/ORP/displayPh.vue";
import { mapActions } from "vuex";
export default {
  name: "app",

  components: {
    Displayorp,
    Displaytemp,
    Displayph,
  },
  methods: {
    ...mapActions(["setORP"]),
        ...mapActions(["setTemp"]),
            ...mapActions(["setPh"]),
  },
  mounted() {
    this.setORP();
    this.setTemp();
    this.setPh();
    setInterval(this.setORP, 10000);
    setInterval(this.setTemp, 10000);
    setInterval(this.setPh, 10000);
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
</style>