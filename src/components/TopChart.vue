<template>
  <div id="chart" class="dashboard-item">
    <apexchart
      ref="realtimeChart"
      type="radialBar"
      max-height="130"
      height="250"
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
      series: [0],
      chartOptions: {
        chart: {
          height: 250,
          id: "realtime",
          type: "radialBar",
          offsetY: -20,
          sparkline: {
            enabled: false,
          },
        },
        plotOptions: {
          radialBar: {
            startAngle: -110,
            endAngle: 110,
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
                show:false,
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
        fill: {
          type: "solid",
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
      const max = 100;
      return (this.getRandomArbitrary(0, 100) /  max) * 100;
    },

    getRandomArbitrary() {
      return Math.floor(Math.random() * 100);
    },
    setDataLineChart() {
      setInterval(() => {
        this.series.splice(0, 1);
        this.series.push(parseInt(this.valueToPercent()));
        //this.chartOptions.plotOptions.radialBar.dataLabels.push(this.getRandomArbitrary(0, 10)*10);
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
.dashboard-item {
    width: 160px;
    padding: 5px;
    margin-top: .5rem;
    border-radius: 5px;
    background-color: #111516;
    color: #66e35f;
    box-shadow: 0 .125rem .3rem rgba(0,0,0,.85)!important;
}
</style>