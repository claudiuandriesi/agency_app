import './Input.scss';
import TextField from '@mui/material/TextField';
import React from "react";

function Input({name, value, onChange, type = 'number'}) {

    const handleInputEvent = (e) => {
        const value = e.target.value;
        onChange(type === 'number' ? Number(value) : value);
    };

    return (
        <div id="named">
            <div id="named-input">
                <TextField
                    type={type}
                    label={name}
                    variant="standard"
                    value={value}
                    onChange={handleInputEvent}/>
            </div>
        </div>
    )
}

export default Input;