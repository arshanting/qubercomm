var barg = document.getElementById("Bar").getContext('2d');
var myBar = new Chart(barg, {
  type: 'bar',
  options: {
    responsive: true,
    maintainAspectRatio: false,
    legend: {
      display: false,
      labels: {
        display: false
      }
    },
    scales: {
       xAxes: [{
         stacked: false,
         display:true,
         barThickness:15,
         barPercentage:0.9,
         categoryPercentage:0.5,
         gridLines: {
           color: "rgba(0, 0, 0, 0)",
         }
       }],
       yAxes: [{
         stacked: false,
         display:false,
         gridLines: {
           color: "rgba(0, 0, 0, 0)",
         } ,
       }]
      }
    },
  data: {
    labels: ["Customer 1", "Customer 2", "Customer 3", "Customer 4", "Customer 5", "Customer 6", "Customer 7", "Customer 8"],
    datasets: [{
      label: 'Enabled',
      data: [30, 10, 3, 17, 20, 24, 18, 16],
      backgroundColor: "#84dcc6"
    }, {
      label: 'Disabled',
      data: [12, 3, 5, 5, 20, 6, 16, 14],
      backgroundColor: "#d92e46"
    }]
  }
});
document.getElementById('js-legend').innerHTML = myBar.generateLegend();
