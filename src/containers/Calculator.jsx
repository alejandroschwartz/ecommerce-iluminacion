import React from 'react';

import '../styles/components/Calculator.scss';
import oficinaCalc from '../styles/images/oficina-calc.jpg';
import hogar from '../styles/images/hogar.jpg';

function Calculator({ onclick }) {

    return (
        <>
            <h1>1ro Seleccioná la ubicación</h1>
            <div className="Calculator__container">
                <button className="Calculator__button" onClick={onclick} >
                    <img src={hogar} alt="imagen hogar" name="hogar" />
                    <p>Hogar</p>
                </button>
                <button className="Calculator__button" onClick={onclick} >
                    <img src={oficinaCalc} alt="imagen oficina" name="oficina" />
                    <p>Oficina</p>
                </button>
            </div>
        </>
    )
}

export default Calculator;