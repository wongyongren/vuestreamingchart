<template>
  <div id="app">
    <TopChart />
    <MyChart />
    <test/>
    <zingchart />
  </div>
</template>

<script>
import MyChart from "./components/MyChart.vue";
import TopChart from "./components/TopChart.vue";
import test from "./components/test.vue";
import zingchart from "./components/zingerchart.vue";

export default {
  name: "app",

  components: {
    MyChart,
    TopChart,
    test,
    zingchart
  },
};
</script>