import './AgentRegistration.scss';
import AgentForm from '../../component/agent-form/AgentForm';
import React, {useState} from 'react';
import {addAgent} from '../../../services/agentService';
import {useHistory} from 'react-router-dom';
import LoadingAnimation from '../../component/loading-animation/LoadingAnimation';
import navigation from "../../../routes/navigation";

function AgentRegistration() {
    const router = navigation.createFrom(useHistory());
    const [loading, setLoading] = useState(false);

    const handleNewAgentCreation = (agent) => {
        setLoading(true)
        addAgent(agent).then(() => {
            setLoading(false)
            router.goToAgentsPage();
        });
    }
    return loading
        ? <LoadingAnimation/>
        : <div className='page register-page fade-in'>
            <div className='input-container'>
                <div className="input-container__content">
                    <h2><span>Register a new agent</span></h2>
                    <AgentForm onSubmit={handleNewAgentCreation}/>
                </div>
            </div>
        </div>
}

export default AgentRegistration;