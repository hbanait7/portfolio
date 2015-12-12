$(function () {

    // Radialize the colors
    Highcharts.getOptions().colors = Highcharts.map(Highcharts.getOptions().colors, function (color) {
        return {
            radialGradient: {
                cx: 0.5,
                cy: 0.3,
                r: 0.7
            },
            stops: [
                [0, color],
                [1, Highcharts.Color(color).brighten(-0.3).get('rgb')] // darken
            ]
        };
    });

    // Build the chart
    $('#container').highcharts({
        chart: {
            plotBackgroundColor: '#c9c9c9',
            plotBorderWidth: 0,
            plotShadow: false,
            backgroundColor: '#c9c9c9',
            type: 'pie'
        },
        title: {
            text: 'Skills',
            margin: 80
        },
        credits: {
            enabled: false
        },
        tooltip: {
            pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
        },
        plotOptions: {
            pie: {
                allowPointSelect: true,
                cursor: 'pointer',
                dataLabels: {
                    enabled: true,
                    format: '<b>{point.name}</b>: {point.percentage:.1f} %',
                    style: {
                        color: (Highcharts.theme && Highcharts.theme.contrastTextColor) || 'black'
                    },
                    connectorColor: 'white'
                }
            }
        },
        series: [{
            name: 'Skills',
            data: [
                { name: 'Ruby', y: 25 },
                {
                    name: 'Rails',
                    y: 30,
                    sliced: true,
                    selected: true
                },
                { name: 'HTML', y: 15 },
                { name: 'CSS', y: 15 },
                { name: 'Git', y: 7 },
                { name: 'JavaScript/JQuery', y: 8 }
            ]
        }]
    });
});