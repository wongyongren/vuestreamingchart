<template>
  <zingchart ref="realtimeChart" :data="myData" :series="mySeries"></zingchart>
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
      mySeries: [{ values: [87, 300] }],
    };
  },
  mounted() {
    this.setDataLineChart();
  },
  methods: {
    valueToPercent() {
      const max = 100;
      return (this.getRandomArbitrary(0, 100) / max) * 100;
    },

    getRandomArbitrary() {
      return Math.floor(Math.random() * 100);
    },
    setDataLineChart() {
      setInterval(() => {
        this.mySeries.splice(0,1);
        this.mySeries.push(parseInt(this.getRandomArbitrary(0, 100)));
        //this.chartOptions.plotOptions.radialBar.dataLabels.push(this.getRandomArbitrary(0, 10)*10);
        //this.updateSeriesLine();
      }, 1000);
    },
    updateSeriesLine() {
      this.$refs.realtimeChart.updateSeries(
        [
          {
            values: this.mySeries,
          },
        ],
        false,
        true
      );
    },
  },
};
</script>

<style>
</style>