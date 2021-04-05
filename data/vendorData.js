
export const lineChart1 = {
    options: {
        chart: {
            type: 'area',
            height: 250,
            zoom: {
                enabled: false
            },
            toolbar: {
                show: true
            },
        },
        colors: ["#ff4c3b"],
        dataLabels: {
            enabled: false
        },
        stroke: {
            width: [2]
        },
        xaxis: {
            show: true,
            type: "datetime",
            categories: ["2018-09-19T00:00:00", "2018-09-19T01:30:00", "2018-09-19T02:30:00", "2018-09-19T03:30:00", "2018-09-19T04:30:00", "2018-09-19T05:30:00", "2018-09-19T06:30:00"],
            labels: {
                show: true,
            },
            axisBorder: {
                show: true,
            },
            axisTicks: {
                show: false,
            },
        },
        yaxis: {
            show: false
        },
        fill: {
            colors: ["#ff4c3b"],
            type: "gradient",
            gradient: {
                shade: 'light',
                type: 'vertical',
                shadeIntensity: 0.4,
                inverseColors: false,
                opacityFrom: 0.8,
                opacityTo: 0.2,
                stops: [0, 100]
            },
        },
        tooltip: {
            x: {
                format: "dd/MM/yy HH:mm"
            }
        },
        grid: {
            show: false,
            padding: {
                left: 0,
                right: 0,
                top: -25,
                bottom: 0
            }
        }
    },
    series: [
        {
            name: "series1",
            data: [
                [1351202400000, 37.30],
                [1351638000000, 37.60],
                [1351724400000, 37.50],
                [1351810800000, 37.55],
                [1352070000000, 37.40],
                [1352256400000, 37.55],
                [1352342800000, 37.45],
                [1352429200000, 37.60],
                [1352515600000, 37.50],
                [1352624000000, 37.30],
                [1352761200000, 37.20],
                [1353134000000, 37.25],
                [1353220400000, 37.22],
                [1353279600000, 37.30],
                [1353466000000, 37.23],
                [1353632400000, 37.30],
                [1353757200000, 37.28],
                [1353857200000, 37.30],
                [1353957200000, 37.28],
                [1354021500000, 37.10],
                [1354175600000, 37.28],
                [1354262000000, 37.22],
                [1354748400000, 37.50],
                [1354834800000, 37.55],
                [1354894000000, 37.65],
                [1355080400000, 37.50],
                [1355166800000, 37.40],
                [1355353200000, 37.50],
                [1355439600000, 37.45],
                [1355698800000, 37.51],
                [1355785200000, 37.40],
            ]
        }
    ]
}

export const apexPieChart = {

    series: [20, 25, 55],
    options: {
        dataLabels: {
            enabled: false
        },
        title: {
            text: "Overall Sales"
        },
        labels: ['Recent Order', 'Panding Payments', 'Recived Payments'],
        colors: ['#f7bfc1', '#c8c8c8', '#ff8181'],
        responsive: [{
            breakpoint: 1430,
            options: {
                chart: {
                    width: 280,
                    height: 285
                },
                legend: {
                    position: 'bottom'
                }
            },
            breakpoint: 1199,
            options: {
                chart: {
                    width: 250,
                    height: 290
                },
                legend: {
                    position: 'bottom'
                }
            }
        }]
    },
}