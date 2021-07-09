<template>
  <div id="chart">
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
        {{ title.min }}
      </div>
      <div class="get-value">
        {{ title.currentValue }}
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
        {{ title.max }}
      </div>
    </div>
  </div>
</template>

<script>
import VueApexCharts from "vue-apexcharts";
export default {
  props: ["title"],
  components: {
    apexchart: VueApexCharts,
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
              strokeWidth: "100",
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
      const max = this.title.max;
      const min = this.title.min;
      if (this.title.title == "Temp") {
        if (this.title.currentValue > max) {
          return 100;
        }
        return ((this.title.currentValue - min) / (max - min)) * 100;
      }
      if (this.title.currentValue > max) {
        return 100;
      }
      return (this.title.currentValue / max) * 100;
    },
    updateColor() {
      if (
        this.series > this.title.upperlimit ||
        this.series < this.title.lowerlimit
      ) {
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
