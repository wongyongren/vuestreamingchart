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
        20
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
        34
      </div>
    </div>
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
    ...mapGetters({ getget: "getCurrentTemp" }),
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
      const min = 20;
      const max = 34;
      if (this.getget > max){
        return 100;
      }
      return ((this.getget - min) / (max-min)  *100);
    },
    updateColor() {
      if(this.series >80 || this.series <20 ){
      this.chartOptions = {
        fill: {
          colors: ["#f00"],
        },
      };
      } else{
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
        this.updateColor()
      }, 1000);
    },
  },
};
</script>