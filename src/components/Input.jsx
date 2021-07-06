import React from 'react';

const Input = ({ label, name, onchange, value, validar, valido,textError }) => {
    return (
        <div className="Home__form--div">
            <label>{label}</label>
            <input
                type="text"
                onChange={onchange}
                name={name}
                value={value}
                onKeyUp={validar}
                onBlur={validar}
            />
            {valido === false
                ? <><span className="Form__error">{textError}</span></>
                : <></>
            }
        </div>
    );
}

export default Input;