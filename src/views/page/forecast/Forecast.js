import './Forecast.scss';
import '../../../style/style.scss'
import React, {useEffect, useState} from 'react';
import {getAgents} from '../../../services/agentService';
import LoadingAnimation from '../../component/loading-animation/LoadingAnimation';
import Chart from '../../component/chart/Chart';
import Button from '../../component/button/Button';
import InfoCard from '../../component/info-card/InfoCard';
import companyIncomeForecaster from '../../../services/forecast/companyIncomeForecast';
import {useHistory} from 'react-router-dom';
import defaultSimulationData from '../../../common/defaultSimulationData';
import navigation from '../../../routes/navigation';

function Forecast() {

    const router = navigation.createFrom(useHistory());
    const [agents, setAgents] = useState([]);
    const [forecast, setForecast] = useState();

    useEffect(() => {
        getAgents().then(agents => {
            const forecastIncome = companyIncomeForecaster({
                ...defaultSimulationData,
                agents: agents.length,
            });
            setForecast(forecastIncome(10));
            setAgents(agents);
        })

    }, [])

    const agencyForecast = () => (
        <>
            <div className="fade-in col col-1">
                <InfoCard
                    title={agents.length}
                    info={agents.length > 1 ? 'Agents' : 'Agent'}
                    description={`${agents.length} successful ${agents.length > 1 ? 'agents' : 'agent'} have been working with your agency so for.`}
                    onClick={router.goToAgentsPage}
                />
                <InfoCard
                    title='2%'
                    info='Policy value increase'
                    description='Every 5 years the policy value increases by two percentages.'
                />
            </div>
            <div className="fade-in col col-2">
                <Chart
                    dataSet={forecast}
                />
                <Button text="Let's try a simulation" onClick={router.goToSimulationPage}/>
            </div>
        </>
    )

    return (
        <div className="page forecast fade-in">
            {
                agents && forecast
                    ? agencyForecast()
                    : <LoadingAnimation/>
            }
        </div>
    );
}

export default Forecast;
