new Chartist.Line('.ct-chart', {
  labels: [2015, 2016, 2017, 2018, 2019],
  series: [
    [7684,8356,9108,7508,6988],
    [2961,4500,6302,2433,3594],
  ]
}, {
  showArea: true,
  fullWidth: true,
  lineSmooth: false
});

new Chartist.Bar('.ct-chart-bar', {
  labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri'],
  series: [
    [12, 9, 7, 8, 5],
    [2, 1, 3.5, 7, 3],
    [1, 3, 4, 5, 6]
  ]
}, {
  fullWidth: true,
  chartPadding: {
    right: 40
  }
});


var data = {
  series: [5, 3, 4]
};

var sum = function(a, b) { return a + b };

new Chartist.Pie('.ct-chart-pie', data, {
  labelInterpolationFnc: function(value) {
    return Math.round(value / data.series.reduce(sum) * 100) + '%';
  }
});

new Chartist.Line('.ct-chart-sale', {
  labels: [15, 16, 17, 18, 19, 20, 21, "Today", 23],
  series: [
    [7684,8356,9108,7508,6988, 2961,4500,6302],
  ]
}, {
  axisX: {
  },
  axisY: {
    offset: 0,
    showLabel: false,
  },
  chartPadding: {
    top: 0,
    right: 0,
    bottom: 0,
    left: 0
  },
  height: 250,
  showArea: true,
  fullWidth: true,
  lineSmooth: false
});