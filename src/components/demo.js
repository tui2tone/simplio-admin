
if($('.ct-chart-browser').length) { 
  let data = {
    series: [1000, 480, 705, 105, 50]
  };

  let sum = (a, b) => { return a + b };

  new Chartist.Pie('.ct-chart-browser', data, {
    labelInterpolationFnc: (value) => {
      return Math.round(value / data.series.reduce(sum) * 100) + '%';
    },
    donut: true,
    donutWidth: 40,
    labelPosition: 'outside'
  });
}

if($('.ct-chart-os').length) { 
  let data = {
    series: [1300, 200, 605, 205, 100, 50]
  };

  let sum = (a, b) => { return a + b };

  new Chartist.Pie('.ct-chart-os', data, {
    labelInterpolationFnc: (value) => {
      return Math.round(value / data.series.reduce(sum) * 100) + '%';
    },
    donut: true,
    donutWidth: 40,
    labelPosition: 'outside'
  });
}

$(".tab-stats a[data-toggle='tab']").on("shown.bs.tab", (e) => {
  $(e.currentTarget.hash).find('.chart').each(function(el, tab) {
    tab.__chartist__.update();
  });
})