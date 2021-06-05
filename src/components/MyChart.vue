<script>
import { Line } from "vue-chartjs";

import "chartjs-plugin-streaming";

export default {
  extends: Line,

  mounted() {
      function randomScalingFactor() {
	return (Math.random() > 0.5 ? 1.0 : -1.0) * Math.round(Math.random() * 100);
}
    this.renderChart(
      {
        datasets: [
          {
            label: "Dataset 1",
            borderColor: "rgb(255, 99, 132)",
            backgroundColor: "rgba(255, 99, 132, 0.5)",
            lineTension: 0,
            borderDash: [8, 4],
            data: []
          },
          {
            label: "Dataset 2",
            borderColor: "rgb(54, 162, 235)",
            backgroundColor: "rgba(54, 162, 235, 0.5)",
            data: []
          },
        ],
      },
      {
        scales: {
          xAxes: [
            {
              realtime: {
                onRefresh: function (chart) {
                  chart.data.datasets.forEach(function (dataset) {
                    dataset.data.push({
                      x: Date.now(),
                      y: randomScalingFactor(),
                    });
                  });
                },
                delay: 2000,
              },
            },
          ],
        },
      }
    );
  },
};
</script>