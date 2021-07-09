import React from 'react';

import '../styles/components/Calculator.scss';
import hogar from '../styles/images/hogar.jpg';
import cocina from '../styles/images/cocina.jpg';
import dormitorio from '../styles/images/dormitorio.jpg';
import banno from '../styles/images/banno.jpg';


const CalculatorHome = ({onclick}) => {

    return (
        <>
            <h1>2do Seleccioná el ambiente</h1>
            <div className="Calculator__container">
                <button className="Calculator__button" onClick={onclick} >
                    <img src={cocina} alt="imagen cocina" name="200" />
                    <p>Cocina</p>
                </button>
                <button className="Calculator__button" onClick={onclick} >
                    <img src={dormitorio} alt="imagen dormitorio" name="200" />
                    <p>Dormitorio</p>
                </button>
                <button className="Calculator__button" onClick={onclick} >
                    <img src={hogar} alt="imagen living" name="200" />
                    <p>Living</p>
                </button>
                <button className="Calculator__button" onClick={onclick} >
                    <img src={banno} alt="imagen baño" name="200" />
                    <p>Baño</p>
                </button>
            </div>
        </>
    );
}

export default CalculatorHome;