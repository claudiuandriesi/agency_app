import './AgentAccout.scss'
import React, {useEffect, useState} from 'react';
import {getAgentById, updateAgent} from '../../../services/agentService';
import LoadingAnimation from '../../component/loading-animation/LoadingAnimation';
import AgentForm from '../../component/agent-form/AgentForm';
import Button from '../../component/button/Button';
import navigation from '../../../routes/navigation';
import {useHistory} from 'react-router-dom';

function AgentAccount({id}) {

    const router = navigation.createFrom(useHistory());
    const [agent, setAgent] = useState();
    const [loading, setLoading] = useState(true);
    const [editing, setEditing] = useState(false);

    useEffect(() => getAgentById(id).then(agent => {
        setAgent(agent)
        setEditing(false)
        setLoading(false);
    }), []);

    const handleAgentRetrieval = () => getAgentById(id).then(agent => {
        setAgent(agent)
        setEditing(false)
        setLoading(false);
    });
    const handleAgentUpdate = (newInfo) => {
        setLoading(true)
        updateAgent({
            ...agent,
            ...newInfo
        }).then(() => {
            handleAgentRetrieval();
        });
    }

    return loading
        ? <LoadingAnimation/>
        : <div className='page register-page fade-in'>
            <div className='input-container'>
                <div className="input-container__content">
                    {
                        editing
                            ?
                            <div className='fade-in'>
                                <div className='editing'>
                                    <AgentForm agent={agent} onSubmit={handleAgentUpdate} submitMessage='Update'/>
                                    <Button primary={false} text={'Cancel'} onClick={() => setEditing(false)}/>
                                </div>
                            </div>
                            : <div>
                                <h2><span>Welcome, {agent.name}</span></h2>
                                <p>{agent.email}</p>
                                <p>{agent.address.address1}</p>
                                <p>{agent.address.country}</p>
                                <p>{agent.address.city}</p>
                                <br/>
                                <div className='editing'>
                                    <Button text={'Update profile'} onClick={() => setEditing(true)}/>
                                    <Button primary={false} text={'Home'} onClick={router.goToHomePage}/>
                                </div>
                            </div>
                    }
                </div>
            </div>
        </div>
}

export default AgentAccount;