import React from 'react';

import oficinaCalc from '../assets/images/oficina-calc.jpg';
import salaComputos from '../assets/images/sala-computos.jpg';
import salaConferencia from '../assets/images/sala-conferencia.jpg';
import salaPasillo from '../assets/images/sala-pasillo.jpg';

const CalculatorOffice = ({onclick}) => {

    return (
        <>
            <h1>2do Seleccioná el ambiente</h1>
            <div className="Calculator__container">
                <button className="Calculator__button" onClick={onclick} id="idOfi" value="500" >
                    <img src={oficinaCalc} alt="imagen oficina" />
                    <p>Trabajo general, lectura, transcripción, archivos</p>
                </button>
                <button className="Calculator__button" onClick={onclick} id="idOfi" value="300" >
                    <img src={salaConferencia} alt="imagen conferencia" />
                    <p>Sala de reuniones</p>
                </button>
                <button className="Calculator__button" onClick={onclick} id="idOfi" value="750" >
                    <img src={salaComputos} alt="imagen computos" />
                    <p>Computación de datos</p>
                </button>
                <button className="Calculator__button" onClick={onclick} id="idOfi" value="200" >
                    <img src={salaPasillo} alt="imagen pasillo" />
                    <p>Pasillo, sala de espera</p>
                </button>
            </div>
        </>
    );
}

export default CalculatorOffice;