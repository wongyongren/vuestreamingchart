<template>
  <zingchart :data="myData" :series="mySeries"></zingchart>
</template>

<script>
import "zingchart/es6";
import zingchartVue from "zingchart-vue";
export default {
  components: {
    zingchart: zingchartVue,
  },
  data() {
    return {
      myData: {
        type: "gauge",
        title: {
          text: "Hello World",
        },
      },
      mySeries: [{ values: [50,300] }],
    };
  },
};
</script>

<style>
</style>