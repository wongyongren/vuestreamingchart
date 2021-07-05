<template>
  <div id="chart" class="dashboard-item">
    <apexchart
      ref="realtimeChart"
      type="radialBar"
      height="180"
      width="160"
      :options="chartOptions"
      :series="series"
    ></apexchart>
    <span
      style="
        text-align: left;
        top: 80%;
        width: 160px;
        position: absolute;
        font-size: 10px;
        color: white;
        margin-left: 20px;
      "
    >
      0
    </span>
    <span
      style="
        text-align: center;
        top: 80%;
        width: 160px;
        position: absolute;
        font-size: 20px;
        font-weight: bold;
      "
    >
      {{ this.getget }}
    </span>
    <span
      style="
        text-align: right;
        top: 80%;
        width: 160px;
        font-size: 10px;
        color: white;
        margin-right: 15px;
      "
    >
      14</span
    >
  </div>
</template>

<script>
import VueApexCharts from "vue-apexcharts";
import { mapGetters } from "vuex";
export default {
  components: {
    apexchart: VueApexCharts,
  },
  computed: {
    ...mapGetters({ getget: "getCurrentPh" }),
  },
  data() {
    return {
      series: [0],
      chartOptions: {
        chart: {
          sparkline: {
            enabled: true,
          },
        },
        fill: {
          colors: ["#f00"],
        },
        plotOptions: {
          radialBar: {
            startAngle: -90,
            endAngle: 90,
            track: {
              background: "#ffffff",
              strokeWidth: "97",
              margin: 5, // margin is in pixels
            },
            dataLabels: {
              name: {
                show: false,
              },
              value: {
                show: false,
                offsetY: -2,
                fontSize: "22px",
                formatter: function (val) {
                  return val;
                },
              },
            },
          },
        },
        grid: {
          padding: {
            top: -10,
          },
        },
        labels: ["Average Results"],
      },
    };
  },
  mounted() {
    this.setDataLineChart();
  },
  methods: {
    valueToPercent() {
      const max = 14;
      if (this.getget > max) {
        return 100;
      }
      return (this.getget / max) * 100;
    },
    updateColor() {
      if (this.getget > 9.5 || this.getget < 4.5) {
        this.chartOptions = {
          fill: {
            colors: ["#f00"],
          },
        };
      } else {
        this.chartOptions = {
          fill: {
            colors: ["#66e35f"],
          },
        };
      }
    },
    getRandomArbitrary() {
      return Math.floor(Math.random() * 100);
    },
    setDataLineChart() {
      setInterval(() => {
        this.series.splice(0, 1);
        this.series.push(parseInt(this.valueToPercent()));
      }, 1000);
      setInterval(() => {
        this.updateColor();
      }, 1000);
    },
  },
};
</script>

<style>
.dashboard-item {
  height: 250px;
  width: 160px;
  padding: 5px;
  margin-top: 0.5rem;
  border-radius: 5px;
  background-color: #111516;
  color: #66e35f;
  box-shadow: 0 0.125rem 0.3rem rgba(0, 0, 0, 0.85) !important;
}
</style>