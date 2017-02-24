Chart.pluginService.register({
  afterUpdate: function (chart) {
    if (chart.config.options.elements.center) {
      var helpers = Chart.helpers;
      var centerConfig = chart.config.options.elements.center;
      var globalConfig = Chart.defaults.global;
      var ctx = chart.chart.ctx;

      var fontStyle = helpers.getValueOrDefault(centerConfig.fontStyle, globalConfig.defaultFontStyle);
      var fontFamily = helpers.getValueOrDefault(centerConfig.fontFamily, globalConfig.defaultFontFamily);

      if (centerConfig.fontSize)
        var fontSize = centerConfig.fontSize;
      // figure out the best font size, if one is not specified
      else {
        ctx.save();
        var fontSize = helpers.getValueOrDefault(centerConfig.minFontSize, 1);
        var maxFontSize = helpers.getValueOrDefault(centerConfig.maxFontSize, 256);
        var maxText = helpers.getValueOrDefault(centerConfig.maxText, centerConfig.text);

        do {
          ctx.font = helpers.fontString(fontSize, fontStyle, fontFamily);
          var textWidth = ctx.measureText(maxText).width;

          // check if it fits, is within configured limits and that we are not simply toggling back and forth
          if (textWidth < chart.innerRadius * 2 && fontSize < maxFontSize)
            fontSize += 1;
          else {
            // reverse last step
            fontSize -= 1;
            break;
          }
        } while (true)
        ctx.restore();
      }

      // save properties
      chart.center = {
        font: helpers.fontString(fontSize, fontStyle, fontFamily),
        fillStyle: helpers.getValueOrDefault(centerConfig.fontColor, globalConfig.defaultFontColor)
      };
    }
  },
  afterDraw: function (chart) {
    if (chart.center) {
      var centerConfig = chart.config.options.elements.center;
      var ctx = chart.chart.ctx;

      ctx.save();
      ctx.font = chart.center.font;
      ctx.fillStyle = chart.center.fillStyle;
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      var centerX = (chart.chartArea.left + chart.chartArea.right) / 2;
      var centerY = (chart.chartArea.top + chart.chartArea.bottom) / 2;
      ctx.fillText(centerConfig.text, centerX, centerY);
      ctx.font = 13 + "px HelveticaNeue";
      ctx.fillStyle="#b3bac6";
      ctx.fillText("Venues to Date",centerX,centerY + 40);
      ctx.restore();
    }
  },
})

var config = {
    type: 'doughnut',
    data: {
      labels: ["Active", "Inactive"],
      datasets: [{
        backgroundColor: [
          "#84dcc6",
          "#4b4e6d"
        ],
        data: [75,25]
      }]
    },
  options: {
    elements: {
      arc: {
        borderWidth: 0
      },
      center: {
        // the longest text that could appear in the center
        maxText: '100%',
        fontColor: '#5a616e',
        fontFamily: "'Helvetica Neue', 'Helvetica', 'Arial', sans-serif",
        fontStyle: 'normal',
        fontSize: 50,
        text: '2096',
        // if a fontSize is NOT specified, we will scale (within the below limits) maxText to take up the maximum space in the center
        // if these are not specified either, we default to 1 and 256
        minFontSize: 1,
        maxFontSize: 256,
      }
    },
    responsive:true,
    cutoutPercentage:80,
    legend: {
       display: false,
      labels: {
        display: false
      },
    },
    animation:{
      animateRotate:true
    }
  }
};


  var ctx = document.getElementById("myChart").getContext("2d");
  var myChart = new Chart(ctx, config);
  document.getElementById('dough-legend').innerHTML = myChart.generateLegend();
