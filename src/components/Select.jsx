import React from 'react';

const Select = ({ label, name, onchange, initialstate, value }) => {
    return (
        <div className="Home__form--div">
            <label>{label}</label>
            <select name={name} onChange={onchange}>
            {initialstate.map((item) => (
                <option key={item.id} value={(value = item.lux)}>
                    {" "}
                    {item.title}
                    {" "}
                </option>
            ))}
            </select>
        </div>
    );
}

export default Select;