<template>
  <div id="app">
     <MyChart />
  </div>
</template>


<script>
import MyChart from "./components/MyChart.vue";
//import TopChart from "./components/TopChart.vue"

export default {
  name: "app",

  components: {
    MyChart,
  },
};
</script>