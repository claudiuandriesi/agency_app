import './ForecastSimulation.scss';
import React, {useState} from 'react';
import Chart from '../../component/chart/Chart';
import SimulationForm from '../../component/simulation-form/SimulationForm';
import companyIncomeForecaster from '../../../services/forecast/companyIncomeForecast';
import defaultSimulationData from '../../../common/defaultSimulationData';
import Button from "../../component/button/Button";
import navigation from "../../../routes/navigation";
import {useHistory} from "react-router-dom";

function ForecastSimulation() {

    const router = navigation.createFrom(useHistory());
    const [formStyle, setFormStyle] = useState('');
    const [chartStyle, setChartStyle] = useState('');
    const [forecast, setForecast] = useState();

    const moveSimulationFormToLeft = () => {
        setFormStyle('move-left ')
    }

    const displayGraph = () => {
        setChartStyle('visible fade-in');
    }
    const performSimulation = (simulationData) => {
        const forecastIncome = companyIncomeForecaster(simulationData);
        setForecast(forecastIncome(simulationData.years));
        moveSimulationFormToLeft();
        displayGraph();
    }

    return (
        <div className="page forecast-simulation fade-in">
            <div className={`input-container ${formStyle}`}>
                <div className="input-container__content">
                    <h2><span>Check out your agency future</span></h2>
                    <SimulationForm
                        initialState={defaultSimulationData}
                        onSubmit={performSimulation}
                    />
                </div>
            </div>
            {forecast
                ? <div className='forecast-col'>
                    <div className={`input-container ${chartStyle}`}>
                        <div className="input-container__content">
                            <Chart
                                dataSet={forecast}
                            />
                        </div>
                    </div>
                    <Button text="Home" onClick={router.goToHomePage}/>

                </div>
                : <div/>
            }
        </div>
    )
}

export default ForecastSimulation;