// import Highcharts from 'highcharts';
// import Exporting from 'highcharts/modules/exporting';
// Exporting(Highcharts);

// console.log(Highcharts);


document.addEventListener('DOMContentLoaded', function () {
    const myChart = Highcharts.chart('chart-container', {
        chart: {
            type: 'bar',
            styledMode: true,
            spacingBottom: 25,
            spacingRight: 100
        }, 
        data: {
            googleSpreadsheetKey: '1a_QdySJQ5ay4tGk2sz1SHLUDl90gas3GixGaXaaavW4',
        },
        title: {
            text: null
        },
        legend: {
            enabled: false
        },
        plotOptions: {
            series: {
                pointPadding: 0.25
            }
        },
        xAxis: {
            labels: {
                reserveSpace: false,
                align: 'left',
                x: 5,
                y: -12,
                style: {
                    whiteSpace: 'nowrap',
                  }
            }
        },
        yAxis: {
            title: false,
            labels: {
                useHTML: true,
                overflow: 'allow'
            },
            tickAmount: 4
        },
        credits: {
            enabled: false
        },
        tooltip: {
            shadow: false,
            padding: 10,
            formatter: function() {
                return Math.round(this.y) + '%';
            }
        },
        responsive: {
            rules: [{
              condition: {
                maxWidth: 500
              },
              chartOptions: {
                chart: {
                  spacingRight: 10
                },
                legend: {
                    align: 'left',
                    x: -18
                },
                tooltip: {
                    enabled: false
                },
                xAxis: {
                    labels: {
                        reserveSpace: true,
                        align: 'right',
                        x: -5,
                        y: 5
                    }
                }
              }
            }]
        }
        // series: [{
        //     name: 'Jane',
        //     data: [1, 6, 4]
        // }, {
        //     name: 'John',
        //     data: [5, 7, 3]
        // }]
    });
});