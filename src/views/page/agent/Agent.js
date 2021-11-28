import './Agent.scss';
import '../../../style/style.scss'
import React, {useEffect, useState} from 'react';
import {getAgents, removeAgent} from '../../../services/agentService';
import AgentCard from '../../component/agent-card/AgentCard';
import LoadingAnimation from '../../component/loading-animation/LoadingAnimation';
import Button from '../../component/button/Button';
import navigation from '../../../routes/navigation';
import {useHistory} from 'react-router-dom';

function Agent() {

    const [agents, setAgents] = useState([])
    const [loading, setLoading] = useState(true)
    const router = navigation.createFrom(useHistory());

    useEffect(() => {
        getAgents()
            .then(agents => {
                setAgents(agents)
                setLoading(false);
            })
    }, [])

    const handleAgentRemoval = (id) => {
        setLoading(true);
        removeAgent(id)
            .then(() => getAgents().then(agents => {
                setAgents(agents);
                setLoading(false);
            }));
    }

    return loading
        ? <LoadingAnimation/>
        : <div className="fade-in">
            <div>
                <div className="agents">
                    {agents.map((agent, index) => <AgentCard
                        key={index}
                        agent={agent}
                        onEdit={router.goToAgentEditPage}
                        onRemove={handleAgentRemoval}
                    />)}
                </div>
                <div className="register">
                    <Button text="Register new agent" onClick={router.goToAgentRegistrationPage}/>
                </div>
            </div>
        </div>
}

export default Agent;