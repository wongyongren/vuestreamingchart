<template>
  <div id="app" class="main">
    <div v-for="item in getget" :key="item.status">
      <div>
        <h1>{{ item.title }}</h1>
      </div>
      <div class="row">
        <div class="row card">
          <h5 style="text-align: center; color: white">ORP</h5>
          <ORP class="product" :title="item" />
        </div>
        <div class="row card">
          <h5 style="text-align: center; color: white">MPP</h5>
          <MPP class="product" :title="item" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
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
  },
  methods: {
    
    ...mapActions(["setStatus1","setStatus2","setStatus3"]),


  },
  computed: {
    ...mapGetters({ getget: "getCurrentR1" }),
  },
  mounted() {

    this.setStatus1();
    setInterval(this.setStatus1, 20000);
    
    this.setStatus2();
    setInterval(this.setStatus2, 20000);
    
    this.setStatus3();
    setInterval(this.setStatus3, 20000);
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