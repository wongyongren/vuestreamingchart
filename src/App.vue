<template>
  <div id="app">
     <MyChart />
     <MyChart />
     <MyChart />
     <MyChart />
     <MyChart />
  </div>
</template>


<script>
import MyChart from "./components/MyChart.vue";

export default {
  name: "app",

  components: {
    MyChart,
  },
};
</script>