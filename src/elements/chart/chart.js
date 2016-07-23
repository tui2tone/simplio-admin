new Chartist.Line('.ct-chart', {
  labels: ["Mobile Phone", "Tablet", "Notebook", "Desktop PC"],
  series: [
    [7684,8356,9108,7508,6988],
    [2961,4500,6302,2433,3594],
  ]
}, {
  showArea: true,
  fullWidth: true
});

new Chartist.Bar('.ct-chart-bar', {
  labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
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