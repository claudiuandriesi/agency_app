import Input from "../input/Input";
import Button from "../button/Button";
import React, {useState} from "react";

function AgentForm({agent = {
    name: '',
    email: '',
    address: {
        address1: '',
        country: '',
        city: ''
    },

}, onSubmit, submitMessage = 'Submit'}) {
    const [name, setName] = useState(agent.name);
    const [email, setEmail] = useState(agent.email);
    const [address1, setAddress1] = useState(agent.address.address1);
    const [country, setCountry] = useState(agent.address.country);
    const [city, setCity] = useState(agent.address.city);

    return (
        <>
            <div>
                <Input name='Name' type='text' value={name} onChange={(value) => setName(value)}/>
                <Input name='Email' type='text' value={email} onChange={(value) => setEmail(value)}/>
                <Input name='Address Line 1' type='text' value={address1} onChange={(value) => setAddress1(value)}/>
                <Input name='Country' type='text' value={country} onChange={(value) => setCountry(value)}/>
                <Input name='City' type='text' value={city} onChange={(value) => setCity(value)}/>
            </div>
            <br/>
            <Button
                text={submitMessage}
                onClick={() => onSubmit({
                    name,
                    email,
                    address: {
                        address1,
                        country,
                        city,
                    },
                })}
            />
        </>
    )
}

export default AgentForm;