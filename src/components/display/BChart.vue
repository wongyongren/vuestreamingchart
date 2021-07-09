<template>
  <div id="chart" class="dashboard-size">
    <apexchart
      ref="realtimeChart"
      type="area"
      height="190"
      :options="chartOptions"
      :series="series"
    ></apexchart>
    <!-- <div>
      Upper Limit {{ title.upperlimit }} // <br>
      Lower Limit {{ title.lowerlimit }} //<br>
      Current Value {{ title.currentValue }} //<br>
      Max Value {{ title.max }}
    </div> -->
  </div>
</template>
<script>
import VueApexCharts from "vue-apexcharts";

export default {
  components: {
    apexchart: VueApexCharts,
  },
  props: ["title"],
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
          parentHeightOffset: 0,
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
          tickAmount: 7,
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
    setDataLineChart() {
      setInterval(() => {
        this.updateSeriesLine();
      }, 1000);
      setInterval(() => {
        this.time = new Date();
        const testing = [
          ...this.series[0].data.splice(1),
          parseInt(this.title.currentValue),
        ];

        this.chartOptions.xaxis.categories.push(
          this.time.toLocaleTimeString("en-US")
        );
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
  },
};
</script>

