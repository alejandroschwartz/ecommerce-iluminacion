import React, { useState } from 'react';

import '../styles/components/Home.scss';
import InitialState from '../InitialState';
import Hero from '../components/Hero';
import Input from '../components/Input';
import Select from '../components/Select';

import PiezaPerspectiva from '../styles/images/pieza-perspectiva.png';
import oficina from '../styles/images/oficina.png';

function Home() {
  const [lumen, setLumen] = useState({ campo: "750", valido: null });
  const [alto, setAlto] = useState({ campo: "", valido: null });
  const [ancho, setAncho] = useState({ campo: "", valido: null });
  const [largo, setLargo] = useState({ campo: "", valido: null });
  const [calculo, setCalculo] = useState(0);
  const [calculoFlujo, setCalculoFlujo] = useState(0);
  const [formValido, setFormValido] = useState(false)

  const [luminariaTotal, setLuminariaTotal] = useState(0);
  const [luminariaAncho, setLuminariaAncho] = useState(0);
  const [luminariaLargo, setLuminariaLargo] = useState(0);

  const [luminaria, setLuminaria] = useState({ campo: "2000", valido: null });
  const [utilizacion, setUtilizacion] = useState({ campo: "0.85", valido: null });
  const [mantenimiento, setMantenimiento] = useState({ campo: "0.8", valido: null });

  const changeLumen = (e) => {
    setLumen({ ...alto, campo: e.target.value });
  };
  const changeAlto = (e) => {
    setAlto({ ...alto, campo: e.target.value });
  };
  const changeAncho = (e) => {
    setAncho({ ...ancho, campo: e.target.value });
  };
  const changeLargo = (e) => {
    setLargo({ ...largo, campo: e.target.value });
  };
  const changeLuminaria = (e) => {
    setLuminaria({ ...utilizacion, campo: e.target.value });
  };
  const changeUtilizacion = (e) => {
    setUtilizacion({ ...utilizacion, campo: e.target.value });
  };
  const changeMantenimiento = (e) => {
    setMantenimiento({ ...mantenimiento, campo: e.target.value });
  };
  const calcular = (e) => {
    e.preventDefault();
    setCalculo( (parseFloat(ancho.campo) * parseFloat(largo.campo)) / (parseFloat(alto.campo) * (parseFloat(ancho.campo) + parseFloat(largo.campo))) );
  };
  const calcularFlujo = (e) => {
    e.preventDefault();
    const flujo = (parseFloat(lumen.campo) * (parseFloat(ancho.campo) * parseFloat(largo.campo))) / (parseFloat(utilizacion.campo) * parseFloat(mantenimiento.campo));
    const numLuminaria = flujo / parseFloat(luminaria.campo);
    const numLuminariaAncho = Math.sqrt( (numLuminaria * ancho.campo) / largo.campo );
    const numLuminariaLargo = (numLuminariaAncho * largo.campo) / ancho.campo;
    setCalculoFlujo(flujo);
    setLuminariaTotal(numLuminaria);
    setLuminariaAncho(numLuminariaAncho);
    setLuminariaLargo(numLuminariaLargo);
    setFormValido(true);
  };

  return (
    <>
      <Hero />
      <div className="Home">
        <h2>Método de los lúmenes</h2>
        <div className="Home__form--div">
          <img
            className="Home__img"
            src={PiezaPerspectiva}
            alt="Pieza en perspectiva"
          />
        </div>
        <form onSubmit={calcular} className="Home__form">
          <Select 
            label="Lumen (lux): "
            name="lumen"
            onchange={changeLumen}
            initialstate={InitialState.IntLuminica}
            value={lumen.campo}
          />
          <Select 
            label="Luminaria (lux): "
            name="lumen"
            onchange={changeLuminaria}
            initialstate={InitialState.Lampara}
            value={luminaria.campo}
          />
          <Input 
            label="Alto (m.): "
            name="alto"
            onchange={changeAlto}
            value={alto.campo}
          />
          <Input 
            label="Ancho (m.): "
            name="ancho"
            onchange={changeAncho}
            value={ancho.campo}
          />
          <Input 
            label="Largo (m.): "
            name="largo"
            onchange={changeLargo}
            value={largo.campo}
          />
          <input className="Btn" type="submit" value="Calcular" />
        </form>
        <h3>Índice del local k: {calculo.toFixed(2)}</h3>
        <div className="Home__form--div">
          <img className="Home__img" src={oficina} alt="Pieza en perspectiva" />
        </div>
        <form onSubmit={calcularFlujo} className="Home__form">
          <Input 
            label="Utilización: "
            name="lumen"
            onchange={changeUtilizacion}
            value={utilizacion.campo}
          />
          <Input 
            label="Mantenimiento: "
            name="mantenimiento"
            onchange={changeMantenimiento}
            value={mantenimiento.campo}
          />
          <input className="Btn" type="submit" value="Calcular flujo luminoso"      />
        </form>
        <h3>Flujo luminoso total Qt : {calculoFlujo.toFixed(0)} lux</h3>
        {formValido === true 
          ? <p className="Home__formValido" >
            Considerando la lumininaria seleccionada, la cantidad mínima para superar el flujo luminoso esperado será de <strong>{ Math.ceil(luminariaTotal.toFixed(0)) } Luminarias</strong> en la habitación, con una distribución de <strong>{Math.ceil(luminariaAncho)} Luminarias</strong> ({" "} {luminariaAncho.toFixed(2)} ) a lo ancho y de <strong>{Math.ceil(luminariaLargo.toFixed(2))} Luminarias</strong> ( {luminariaLargo.toFixed(2)} ) a lo largo de la misma. </p>
          : <></>
        }
      </div>
    </>
  );
}

export default Home;