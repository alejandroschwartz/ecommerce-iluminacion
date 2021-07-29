import React from 'react';

// import '../assets/styles/Calculator.scss';
import hogar from '../assets/images/hogar.jpg';
import cocina from '../assets/images/cocina.jpg';
import dormitorio from '../assets/images/dormitorio.jpg';
import banno from '../assets/images/banno.jpg';


const CalculatorHome = ({onclick}) => {

    return (
        <>
            <h1>2do Seleccioná el ambiente</h1>
            <div className="Calculator__container">
                <button className="Calculator__button" onClick={onclick} id="idHog" value="200" >
                    <img src={cocina} alt="imagen cocina" />
                    <p>Cocina</p>
                </button>
                <button className="Calculator__button" onClick={onclick} id="idHog" value="200" >
                    <img src={dormitorio} alt="imagen dormitorio" />
                    <p>Dormitorio</p>
                </button>
                <button className="Calculator__button" onClick={onclick} id="idHog" value="200" >
                    <img src={hogar} alt="imagen living" />
                    <p>Living</p>
                </button>
                <button className="Calculator__button" onClick={onclick} id="idHog" value="200" >
                    <img src={banno} alt="imagen baño" />
                    <p>Baño</p>
                </button>
            </div>
        </>
    );
}

export default CalculatorHome;