<template>
  <apexchart ref="realtimeChart" type="line" height="200" width="300" :options="chartOptions" :series="series" />
</template>
<script>
//import { Line } from "vue-chartjs";

import "chartjs-plugin-streaming";

export default {
  data () {
    return {
      series: [{
        name: 'Desktops',
        data: [10, 41, 35, 51, 49, 62, 69, 91, 99]
      }],
      chartOptions: {
        colors: ['#FCCF31', '#17ead9', '#f02fc2'],
        animations: {
          enabled: true,
          easing: 'linear',
          speed: 8000,
          animateGradually: {
            enabled: true,
            delay: 150
        },
        dynamicAnimation: {
            enabled: true,
            speed: 350
        }
        },
        chart: {
          height: 350,
          width: 350,
          type: 'line'
        },
        grid: {
          show: true,
          strokeDashArray: 0,
          xaxis: {
            lines: {
              show: true
            }
          }
        },
        stroke: {
          curve: 'smooth'
        },
        dropShadow: {
          enabled: true,
          opacity: 0.3,
          blur: 5,
          left: -7,
          top: 22
        },
        dataLabels: {
          enabled: false
        },
        title: {
          text: 'Line Real Time',
          align: 'left',
          style: {
            color: '#FFF'
          }
        },
        xaxis: {
          categories: ['1', '2', '3', '4', '5', '6', '7', '8', '9'],
          labels: {
            style: {
              colors: 'black'
            }
          }
        },
        yaxis: {
          labels: {
            style: {
              colors: 'black'
            }
          }
        }
      }
    }
  },
  mounted() {
    this.setDataLineChart();
  },
  methods: {
    getRandomArbitrary () {
      return Math.floor(Math.random() * 99)
    },
    setDataLineChart () {
      setInterval(() => {
        this.series[0].data.splice(0, 1)
        this.series[0].data.push(this.getRandomArbitrary(0, 99))
        this.updateSeriesLine()
      }, 1000)
    },
    updateSeriesLine () {
      this.$refs.realtimeChart.updateSeries([{
        data: this.series[0].data
      }], false, true)
    }
  },
};
</script>