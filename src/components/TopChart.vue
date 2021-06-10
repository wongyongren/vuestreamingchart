<template>
  <div id="chart">
    <apexchart
      ref="realtimeChart"
      type="radialBar"
      height="250"
      width="300"
      :options="chartOptions"
      :series="series"
    ></apexchart>
  </div>
</template>

<script>
import VueApexCharts from "vue-apexcharts";

export default {
  components: {
    apexchart: VueApexCharts,
  },
  data() {
    return {
      series: [50],
      chartOptions: {
        chart: {
          id: "realtime",
          type: "radialBar",
          offsetY: -20,
          sparkline: {
            enabled: true,
          },
        },
        plotOptions: {
          radialBar: {
            startAngle: -90,
            endAngle: 90,

            track: {
              background: "#e7e7e7",
              strokeWidth: "97",
              margin: 5, // margin is in pixels
            },
            dataLabels: {
              name: {
                show: false,
              },
              value: {
                offsetY: -2,
                fontSize: "22px",
                formatter: function (val) {
                  return val;
                },
              },
            },
          },
        },
        xaxis: {
          min: 0,
          max: 1,
        },
        grid: {
          padding: {
            top: -10,
          },
        },
        fill: {
          type: "solid",
        },
        //labels: ["Average Results"],
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
        this.series.splice(0, 1);
        this.series.push(this.getRandomArbitrary(0, 10));
        //this.updateSeriesLine();
      }, 1000);
    },
    updateSeriesLine() {
      this.$refs.realtimeChart.updateSeries(
        [
          {
            data: this.series,
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