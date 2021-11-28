import React from 'react';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';

import Agency from '../views/page/agency/Agency';
import Agent from '../views/page/agent/Agent';
import AgentRegistration from '../views/page/agent-registration/AgentRegistration';
import Forecast from '../views/page/forecast/Forecast';
import ForecastSimulation from '../views/page/simulation/ForecastSimulation';
import AgentAccount from '../views/page/agent-account/AgentAccount';

function ApplicationRoutes() {
    return (
        <BrowserRouter>
            <Switch>
                <Redirect exact from="/" to="/agency/home" />
                <Redirect exact from="/agency" to="/agency/home" />
                <Route path="/agency/home" component={Agency}/>
                <Route exact path="/agency/agent" component={Agent}/>
                <Route exact path="/agency/agent/register" component={AgentRegistration}/>
                <Route exact path="/agency/agent/account/:id" render={(props) => <AgentAccount id={props.match.params.id} /> }/>
                <Route exact path="/agency/forecast/" component={Forecast}/>
                <Route exact path="/agency/forecast/simulation" component={ForecastSimulation}/>
            </Switch>
        </BrowserRouter>
    )
}

export default ApplicationRoutes;