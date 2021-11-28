import './Chart.scss';
import buildChartConfig from './config/index';
import 'zingchart/es6';
import ZingChart from 'zingchart-react';

zingchart.DEV.KEEPSOURCE = 0;
zingchart.DEV.COPYDATA = 0;

zingchart.LICENSE = ['abcdefghijklmnopqrstuvwxy'];

function Chart({dataSet}) {
    const config = buildChartConfig(Object.keys(dataSet), Object.values(dataSet));
    return <ZingChart data={config}/>
}

export default Chart;