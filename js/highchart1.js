var colors = Highcharts.getOptions().colors,
  categories = [
    'remaining',
    'completed',
  ],
  data = [
    {
      y: 65,
      color: colors[2],
      drilldown: {
        name: 'remaining',
        categories: [
          '65% <br> remaining',
        ],
        data: [
         65,
        ]
      }
    },
    {
      y: 45,
      color: colors[1],
      drilldown: {
        name: 'completed',
        categories: [
          '45% <br> completed',
        ],
        data: [
         45,
        ]
      }
    },
    {
      y: 7.23,
      color: colors[0],
      drilldown: {
        name: 'Internet Explorer',
        categories: [
        ],
        data: [
        ]
      }
    },
    {
      y: 5.58,
      color: colors[3],
      drilldown: {
        name: 'Safari',
        categories: [
        ],
        data: [
        ]
      }
    },
    {
      y: 4.02,
      color: colors[5],
      drilldown: {
        name: 'Edge',
        categories: [
        ],
        data: [
        ]
      }
    },
    {
      y: 1.92,
      color: colors[4],
      drilldown: {
        name: 'Opera',
        categories: [
        ],
        data: [
        ]
      }
    },
    {
      y: 7.62,
      color: colors[6],
      drilldown: {
        name: 'Other',
        categories: [
        ],
        data: [
        ]
      }
    }
  ],
  browserData = [],
  versionsData = [],
  i,
  j,
  dataLen = data.length,
  drillDataLen,
  brightness;


// Build the data arrays
for (i = 0; i < dataLen; i += 1) {

  // add browser data
  // browserData.push({
  //   name: categories[i],
  //   y: data[i].y,
  //   color: data[i].color
  // });

  // add version data
  drillDataLen = data[i].drilldown.data.length;
  for (j = 0; j < drillDataLen; j += 1) {
    brightness = 0.2 - (j / drillDataLen) / 5;
    versionsData.push({
      name: data[i].drilldown.categories[j],
      y: data[i].drilldown.data[j],
      color: Highcharts.Color(data[i].color).brighten(brightness).get()
    });
  }
}

// Create the chart
Highcharts.chart('container', {
  chart: {
    type: 'pie'
  },
  title: {
    // text: 'Browser market share, January, 2018'
  },
  subtitle: {
    // text: 'Source: <a href="http://statcounter.com" target="_blank">statcounter.com</a>'
  },
  plotOptions: {
    pie: {
      shadow: false,
      // center: ['50%', '50%']
    }
  },
  tooltip: {
      valueSuffix: '',
        pointFormat:""
    },
  series: [{
    name: 'Browsers',
    data: browserData,
    size: '60%',
    dataLabels: {
      formatter: function () {
        // return this.y > 5 ? this.point.name : null;
      },
      // color: '#ffffff',
      // distance: -30
    }
  }, {
    name: 'Versions',
    data: versionsData,
    size: '80%',
    innerSize: '60%',
    dataLabels: {
      // formatter: function () {
      //   // display only if larger than 1
      //   return this.y > 1 ? '<b>' + this.point.name + ':</b> ' +
      //     this.y + '%' : null;
      // }
    },
    id: 'versions'
  }],
  responsive: {
    rules: [{
      condition: {
        maxWidth: 400
      },
      chartOptions: {
        series: [{
        }, {
          id: 'versions',
          dataLabels: {
            enabled: false
          }
        }]
      }
    }]
  }
});

// $(".highcharts-text-outline.remove();")
