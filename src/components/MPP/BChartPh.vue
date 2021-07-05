<template>
  <div id="chart" class="dashboard-item1">
    <apexchart
      ref="realtimeChart"
      type="area"
      height="265"
      :options="chartOptions"
      :series="series"
    ></apexchart>
  </div>
</template>
<script>
//import { Line } from "vue-chartjs";
import VueApexCharts from "vue-apexcharts";
import { mapGetters } from "vuex";

export default {
  components: {
    apexchart: VueApexCharts,
  },
  computed: {
    ...mapGetters({ getget: "getCurrentPh", NewValue: "getPlusTen" }),
  },
  data() {
    return {
      time: 1,
      series: [
        {
          //name: "Desktops",
          data: [...Array(15).fill(0)],
        },
      ],
      plotOptions: {
        area: {
          fillTo: "origin",
        },
      },

      chartOptions: {
        chart: {
          height: 250,
          id: "realtime",
          animations: {
            enabled: true,
            easing: "linear",
            speed: 1000,
            dynamicAnimation: {
              enabled: false,
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
        fill: {
          colors: ["#66e35f"],
          opacity: 0.9,
          type: "solid",
        },
        stroke: {
          show: true,
          curve: "smooth",
          colors: ["#66e35f"],
          lineCap: "butt",
          width: 2,
          dashArray: 0,
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
          categories: Array(15).fill(0),
          labels: {
            show: false,
            style: {
              colors: "white",
            },
          },
        },
        yaxis: {
          max: 14,
          min: 0,
          tickAmount:7,
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
        // if (this.getget >= 100) {
        //   this.updateYMax();
        // } else {
        //   this.updateYNormal();
        // }
        this.updateSeriesLine();
      }, 1000);
      setInterval(() => {
        this.time = new Date();
        const testing = [
          ...this.series[0].data.splice(1),
          parseInt(this.getget),
        ];
        //console.log("array", testing);
        // this.series[0].data.push(parseInt(this.getRandomArbitrary(0, 10)));
        this.chartOptions.xaxis.categories.push(
          this.time.toLocaleTimeString("en-US")
        );
        //this.series[0].data.splice(0, 1);
        this.series[0].data = [...testing];
        this.chartOptions.xaxis.categories.splice(0, 1);
      }, 500);
    },
    updateSeriesLine() {
      this.$refs.realtimeChart.updateSeries([
        {
          data: this.series[0].data,
        },
      ]);
    },
    updateYMax() {
      this.$refs.realtimeChart.updateOptions({
        yaxis: {
          max: this.NewValue,
          min: 0,
          labels: {
            style: {
              colors: "white",
            },
          },
        },
      });
    },
    updateYNormal() {
      this.$refs.realtimeChart.updateOptions({
        yaxis: {
          max: 100,
          min: 0,
          labels: {
            style: {
              colors: "white",
            },
          },
        },
      });
    },
  },
};
</script>

<style scoped>
.dashboard-item1 {
  width: 160px;
  padding: 5px;
  margin-top: 0.5rem;
  border-radius: 5px;
  background-color: #111516;
  color: #66e35f;
  box-shadow: 0 0.125rem 0.3rem rgba(0, 0, 0, 0.85) !important;
}
.status {
  display: flex;
  align-items: center;
  color: aqua;
}
</style>