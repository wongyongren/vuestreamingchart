<template>
  <div id="app">
    <display/>
    <display/>
  </div>
</template>

<script>
import Display from "./components/display.vue";
//import TopChart from "./components/TopChart.vue";
//import test from "./components/test.vue";
//import zingchart from "./components/zingerchart.vue";

export default {
  name: "app",

  components: {
    Display,
    //TopChart,
    //test,
    //zingchart
  },
};
</script>