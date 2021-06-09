<template>
  <apexchart
    ref="realtimeChart"
    type="area"
    height="250"
    width="300"
    :options="chartOptions"
    :series="series"
  />
</template>
<script>
//import { Line } from "vue-chartjs";
import VueApexCharts from "vue-apexcharts";

import "chartjs-plugin-streaming";

export default {
  components: {
    apexchart: VueApexCharts,
  },
  data() {
    return {
      time: 1,
      series: [
        {
          name: "Desktops",
          data: [...Array(15).fill(0)],
        },
      ],
      chartOptions: {
        chart: {
          id: "realtime",
          height: 250,
          animations: {
            enabled: true,
            easing: "linear",
            dynamicAnimation: {
              speed: 500,
            },
          },
          toolbar: {
            show: false,
          },
          zoom: {
            enabled: false,
          },
        },
        grid: {
          show: true,
          strokeDashArray: 0,
          xaxis: {
            lines: {
              show: false,
            },
          },
        },
        stroke: {
          curve: "smooth",
        },
        dropShadow: {
          enabled: true,
          opacity: 0.3,
          blur: 5,
          left: -7,
          top: 22,
        },
        dataLabels: {
          enabled: false,
        },
        title: {
          text: "Line Real Time",
          align: "left",
          style: {
            color: "black",
          },
        },
        xaxis: {
          categories: Array(15).fill(0)
        },
        yaxis: {
          max:10,
          min: 0,
          labels: {
            style: {
              colors: "black",
            },
          },
        },
      },
    };
  },  
  mounted() {
    this.setDataLineChart();
  },
  methods: {
    getRandomArbitrary() {
      return Math.floor(Math.random() * 10);
    },
    setDataLineChart() {
      setInterval(() => {
        this.series[0].data.splice(0, 1);
        this.series[0].data.push(this.getRandomArbitrary(0, 10));
        this.chartOptions.xaxis.categories.splice(0, 1);
        this.time = new Date() ;
        this.chartOptions.xaxis.categories.push(this.time.toLocaleTimeString('en-US'));
        this.updateSeriesLine();
      }, 1000);
    },
    updateSeriesLine() {
      this.$refs.realtimeChart.updateSeries(
        [
          {
            data: this.series[0].data,
          },
        ],
        false,
        true
      );
    },
  },
};
</script>