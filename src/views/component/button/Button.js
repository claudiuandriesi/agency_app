import './Button.scss';
import {useState} from 'react';

function Button({ text, onClick, primary='true' }) {
    const [buttonClasses, setButtonClasses] = useState('')
    const onButtonClicked = function() {
        setButtonClasses('animated');

        setTimeout(setInitialButtonState, 500);
    };

    const setInitialButtonState = function() {
        setButtonClasses('');
    };

    const click = () => {
        onButtonClicked();
        onClick();
    }
    return (
        <button
            className={`submit-button no-select ${buttonClasses} ${primary ? '' : 'secondary'}`}
            onClick={click}
        >
            <span>{ text }</span>
        </button>
    )
}

export default Button;