import './AgentCard.scss';
import React from "react";

function AgentCard({agent, onRemove, onEdit}) {
    return (
        <div className="agent-card">
            <div className="info">
                <div className="main-info">
                    <h1>{agent.name}</h1>
                    <p> {agent.address.city}</p>
                </div>
                <div className='email'>
                    <div className="line"/>
                    <p>{agent.email}</p>
                </div>
            </div>
            <div className='edit-button' onClick={() => onEdit(agent.id)}>
                <p><b>Show profile</b></p>
            </div>
            <div className='remove-button' onClick={() => onRemove(agent.id)}>
                <p>Remove</p>
            </div>
        </div>
    )
}

export default AgentCard;