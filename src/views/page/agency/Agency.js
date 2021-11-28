import './Agency.scss';
import '../../../style/style.scss'
import React from 'react';
import Card from '../../component/card/Card';
import navigation from '../../../routes/navigation';
import {useHistory} from "react-router-dom";

function Agency() {
    const router = navigation.createFrom(useHistory());
    return (
        <div className="page agency fade-in">
            <div className="cards-container">
                <Card
                    icon={<i className="material-icons md-36">face</i>}
                    title='Agents'
                    description='Click to see or edit your agents.'
                    onClick={router.goToAgentsPage}
                />
                <Card
                    icon={<i className="material-icons">show_chart</i>}
                    title='Forecast'
                    description='Click to see or calculate a forecast.'
                    onClick={router.goToForecastPage}
                />
            </div>
        </div>
    )
}

export default Agency;
