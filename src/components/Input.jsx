import React from 'react';

const Input = ({ label, name, onchange, value }) => {
    return (
        <div className="Home__form--div">
            <label>{label}</label>
            <input
                type="text"
                onChange={onchange}
                name={name}
                value={value}
            />
        </div>
    );
}

export default Input;