<template>
  <div id="app" class = "row">
    <display class = "product"/>
<display class = "product"/>
<display class = "product"/>
  </div>
</template>

<script>
import Display from "./components/display.vue";
import { mapActions } from "vuex";
export default {
  name: "app",

  components: {
    Display,
  },
    methods: {
    ...mapActions(["getLastStatus"]),
    ...mapActions(["setCurrentJoke"])
  },
  mounted() {
    this.setCurrentJoke();
    setInterval(this.setCurrentJoke, 10000);
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