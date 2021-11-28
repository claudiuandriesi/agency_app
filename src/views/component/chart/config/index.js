const buildChartConfig = (dataX, dataY) => ({
    type: 'line',
    backgroundColor: 'transparent',
    title: {
        text: 'Company Income by Year',
        adjustLayout: true,
        marginTop: '7px',
        fontColor: '#2E3C40'
    },
    gui: {
        contextMenu: {
            empty: true
        }
    },
    legend: {
        align: 'center',
        backgroundColor: 'none',
        borderWidth: '0px',
        item: {
            cursor: 'hand',
            fontColor: '#2E3C40'
        },
        marker: {
            type: 'circle',
            borderWidth: '0px',
            cursor: 'hand'
        },
        verticalAlign: 'top'
    },
    plot: {
        aspect: 'spline',
        lineWidth: '2px',
        marker: {
            borderWidth: '0px',
            size: '5px'
        }
    },
    scaleX: {
        values: dataX,
    },
    plotarea: {
        margin: 'dynamic 70'
    },


    series: [{
        values: dataY,
        text: 'Income Amount',
        lineColor: '#a6dcee',
        marker: {
            backgroundColor: '#5389a6'
        }

    },
    ]
});

export default buildChartConfig;