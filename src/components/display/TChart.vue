<template>
  <div id="chart" >
    <apexchart
      ref="realtimeChart"
      type="radialBar"
      height="160"
      width="160"
      :options="chartOptions"
      :series="series"
    ></apexchart>
    <div class="row" style="width: 160px">
      <div
        style="
          text-align: center;
          top: 80%;
          font-size: 10px;
          color: white;
          width: 55px;
        "
      >
        0
      </div>
      <div class="get-value">
        {{ this.getget }}
      </div>
      <div
        style="
          text-align: center;
          top: 80%;
          font-size: 10px;
          color: white;
          width: 55px;
        "
      >
        1400
      </div>
    </div>
  </div>
</template>

<script>
import VueApexCharts from "vue-apexcharts";
import { mapGetters } from "vuex";
export default {
    props:['upperlimit','title','lowerlimit'],
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
              strokeWidth: '100',
              margin: 1, // margin is in pixels
            },
            dataLabels: {
              name: {
                show: false,
              },
              value: {
                show: false,
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
      if (this.series > this.upperlimit || this.series < this.lowerlimit) {
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
