<template>
  <div id="app" class = "row">
    <display/>
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