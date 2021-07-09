import React from 'react';

import oficinaCalc from '../styles/images/oficina-calc.jpg';
import salaComputos from '../styles/images/sala-computos.jpg';
import salaConferencia from '../styles/images/sala-conferencia.jpg';
import salaPasillo from '../styles/images/sala-pasillo.jpg';

const CalculatorOffice = ({onclick}) => {

    return (
        <>
            <h1>2do Seleccioná el ambiente</h1>
            <div className="Calculator__container">
                <button className="Calculator__button" onClick={onclick} >
                    <img src={oficinaCalc} alt="imagen oficina" name="500" />
                    <p>Trabajo general, lectura, transcripción, archivos</p>
                </button>
                <button className="Calculator__button" onClick={onclick} >
                    <img src={salaConferencia} alt="imagen conferencia" name="300" />
                    <p>Sala de reuniones</p>
                </button>
                <button className="Calculator__button" onClick={onclick} >
                    <img src={salaComputos} alt="imagen computos" name="750" />
                    <p>Computación de datos</p>
                </button>
                <button className="Calculator__button" onClick={onclick} >
                    <img src={salaPasillo} alt="imagen pasillo" name="200" />
                    <p>Pasillo, sala de espera</p>
                </button>
            </div>
        </>
    );
}

export default CalculatorOffice;