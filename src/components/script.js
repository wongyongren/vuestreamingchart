var ctx1 = document.getElementById('chart1').getContext('2d');
var chart1 = new Chart(ctx1, {
  type: 'line',
  data: { datasets: [{ data: [] }, { data: [] }] },
  options: {
    scales: { xAxes: [{ type: 'time' }] },
    plugins: {
      streaming: {
        onRefresh: function(chart) {
          chart.data.datasets.forEach(function(dataset) {
            dataset.data.push({
              x: Date.now(),
              y: Math.random()
            });
          });
        }
      }
    }
  }
});

var ctx2 = document.getElementById('chart2').getContext('2d');
var chart2 = new Chart(ctx2, {
  type: 'line',
  data: { datasets: [{ data: [] }, { data: [] }] },
  options: {
    scales: { xAxes: [{ type: 'time' }] },
    plugins: { streaming: false }
  }
});