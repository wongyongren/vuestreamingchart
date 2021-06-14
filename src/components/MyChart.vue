<template>
  <div id="chart" class="dashboard-item">
    <apexchart
      ref="realtimeChart"
      type="area"
      height="265"
      background-color="black"
      :options="chartOptions"
      :series="series"
    ></apexchart>
  </div>
</template>
<script>
//import { Line } from "vue-chartjs";
import VueApexCharts from "vue-apexcharts";

export default {
  components: {
    apexchart: VueApexCharts,
  },
  data() {
    return {
      time: 1,
      series: [
        {
          //name: "Desktops",
          data: [...Array(10).fill(0)],
        },
      ],
      plotOptions: {
        area: {
          fillTo: "origin",
        },
      },
      chartOptions: {
        chart: {
          height: 200,
          id: "realtime",
          animations: {
            enabled: true,
            easing: "linear",
            speed: 1000,
            dynamicAnimation: {
              enabled: true,
              speed: 1000,
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
        dataLabels: {
          enabled: false,
        },
        title: {
          align: "left",
          style: {
            color: "black",
          },
        },
        markers: {
          size: 0,
        },
        legend: {
          show: false,
        },
        xaxis: {
          show: false,
          categories: Array(10).fill(0),
          labels: {
            show: false,
            style: {
              colors: "white",
            },
          },
        },
        yaxis: {
          max: 10,
          min: 0,
          labels: {
            style: {
              colors: "white",
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
        this.chartOptions.xaxis.categories.splice(0, 1);
        this.time = new Date();
        this.series[0].data.push(parseInt(this.getRandomArbitrary(0, 10)));
        this.chartOptions.xaxis.categories.push(
          this.time.toLocaleTimeString("en-US")
        );
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

<style scoped>
.dashboard-item {
  width: 160px;
  padding: 5px;
  margin-top: 0.5rem;
  border-radius: 5px;
  background-color: #111516;
  color: #66e35f;
  box-shadow: 0 0.125rem 0.3rem rgba(0, 0, 0, 0.85) !important;
}
</style>