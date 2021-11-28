import Input from '../input/Input';
import Button from '../button/Button';
import React, {useState} from 'react';

function SimulationForm({initialState, onSubmit}) {
    const [agents, setAgents] = useState(initialState.agents);
    const [annualHires, setAnnualHires] = useState(initialState.annualHires);
    const [correctionPercentage, setCorrectionPercentage] = useState(initialState.correctionPercentage);
    const [agentPoliciesPerMonth, setAgentPoliciesPerMonth] = useState(initialState.agentPoliciesPerMonth);
    const [correctionPeriod, setCorrectionPeriod] = useState(initialState.correctionPeriod);
    const [policyValue, setPolicyValue] = useState(initialState.policyValue);
    const [years, setYears] = useState(initialState.years);
    const [commission, setCommission] = useState(initialState.commission);

    return (
        <>
            <div className="simulation-form">
                <Input name='Agents' value={agents} onChange={(value) => setAgents(value)}/>
                <Input name='Policies per month' value={agentPoliciesPerMonth} onChange={(value) => setAgentPoliciesPerMonth(value)}/>
                <Input name='Annual Hires' value={annualHires} onChange={(value) => setAnnualHires(value)}/>
                <Input name='Policy Value' value={policyValue} onChange={(value) => setPolicyValue(value)}/>
                <Input name='Correction Percentage' value={correctionPercentage} onChange={(value) => setCorrectionPercentage(value)}/>
                <Input name='Correction Period' value={correctionPeriod} onChange={(value) => setCorrectionPeriod(value)}/>
                <Input name='Commission' value={commission} onChange={(value) => setCommission(value)}/>
                <Input name='Years' value={years} onChange={(value) => setYears(value)}/>
            </div>
            <br/>
            <Button
                text='Simulate'
                onClick={() => onSubmit({
                    agents,
                    annualHires,
                    correctionPercentage,
                    agentPoliciesPerMonth,
                    correctionPeriod,
                    policyValue,
                    years,
                    commission
                })}
            />
        </>
    )
}

export default SimulationForm;