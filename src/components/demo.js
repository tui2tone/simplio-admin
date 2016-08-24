
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


if($('.ct-chart-sale').length) {
  new Chartist.Bar('.ct-chart-sale', {
    labels: ["10:20", "10:30", "10:40", "10:50", "11:00", "11:10", "11:20", "11:30", "11:40", "11:50", "12:00", "12:10", "12:20", "12:30", "12:40", "12:50", "13:00", "13:10", "13:20", "13:30", "13:40", "13:50", "14:00", "14:10", "14:20", "14:30", "14:40", "14:50"],
    series: [
      [2710 ,2810 ,4210 ,8010 ,19158 ,35326 ,80837 ,79477 ,88561 ,67807 ,70837 ,55261 ,66216 ,10516 ,13493 ,12000 ,14253 ,33506 ,56326 ,78986 ,20747 ,44165 ,13817 ,2200 ,65488 ,30704 ,24000 ,16294]
      // [100000 ,100000 ,100000 ,100000 ,100000 ,100000 ,100000 ,100000 ,100000 ,100000 ,100000 ,100000 ,100000 ,100000 ,100000 ,100000 ,100000 ,100000 ,100000 ,100000 ,100000 ,100000 ,100000 ,100000 ,100000 ,100000 ,100000 ,100000]
    ]
  }, {
    axisX: {
      offset: 0,
      labelOffset: {
        x: 0,
        y: 0
      },
      position: 'center',
      showLabel: false,
      showGrid: false
    },
    axisY: {
      offset: 0,
      showLabel: false,
      showGrid: false,
      labelInterpolationFnc: function(value) {
        return (value / 1000) + 'k';
      }
    },
    chartPadding: {
      top: 0,
      right: 0,
      bottom: 0,
      left: 0
    },
    seriesBarDistance: 0,
    barValueSpacing: 2,
    height: 250,
    high: 120000,
    showArea: true,
    fullWidth: true,
    lineSmooth: false,
    plugins: [
      Chartist.plugins.ctPointLabels({
        textAnchor: 'left',
        labelInterpolationFnc: function(value) {
          return '$' + parseInt(value / 1000) + 'k'
        }
      })
    ]
  }, [
    ['screen and (max-width: 481px)', {
      axisX: {
        labelInterpolationFnc: function(value) {
          return value.slice(0, 4);
        }
      }
    }]
  ])
}


function ran(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

var min = 0
var max = 100000
var ctx = document.getElementById("myChart");
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
      labels: ["10:20", "10:30", "10:40", "10:50", "11:00", "11:10", "11:20", "11:30", "11:40", "11:50", "12:00", "12:10", "12:20", "12:30", "12:40", "12:50", "13:00", "13:10", "13:20", "13:30", "13:40", "13:50", "14:00", "14:10", "14:20", "14:30", "14:40", "14:50"],
      datasets: [{
          label: '$#',
          data: Array(30).fill().map((item) => {
            return ran(min, max)
          }),
          backgroundColor: 'rgba(41, 199, 95, 0.5)',
          borderWidth: 0
      }],
    },
    options: {
      maintainAspectRatio: true,
      fullWidth: true,
      legend: {
        display: false
      },
      scales: {
        xAxes: [{
          display: false,
          categoryPercentage: 1,
          barPercentage: 0.95
        }],
        yAxes: [{
          display: false,
          ticks: {
            max: 100000,
            min: 0,
            stepSize: 10000
          }
        }]
      }
    }
});