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
        position: absolute;
        font-size: 10px;
        color: white;
      "
    >
      1400&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span
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
    ...mapGetters({ getget: "getCurrentORP" }),
    ...mapGetters({ check: "getOnOffStatus" }),
    ...mapGetters({ loading: "getSwitchStatus" }),
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
      const max = 1400;
      if (this.getget > max) {
        return 100;
      }
      return (this.getget / max) * 100;
    },
    updateColor() {
      if (this.series > 80 || this.series < 20) {
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

