<template>
  <div id="app">
    <TopChart />
    <MyChart />
  </div>
</template>

<script>
import MyChart from "./components/MyChart.vue";
import TopChart from "./components/TopChart.vue";

export default {
  name: "app",

  components: {
    MyChart,
    TopChart,
  },
};
</script>