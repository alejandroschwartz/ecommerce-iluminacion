import React, { useState } from 'react';
import { evaluate, simplify } from 'mathjs';

import '../assets/styles/Home.scss';
import InitialState from '../InitialState';
import Hero from '../components/Hero';
import Input from '../components/Input';

import Calculator from './Calculator';
import CalculatorHome from './CalculatorHome';
import CalculatorOffice from './CalculatorOffice';
import CalculatorProduct from './CalculatorProduct';

import PiezaPerspectiva from '../assets/images/pieza-perspectiva.png';

function Home() {
  const [lumen, setLumen] = useState({ campo: 0, valido: null });
  const [alto, setAlto] = useState({ campo: "", valido: null });
  const [ancho, setAncho] = useState({ campo: "", valido: null });
  const [largo, setLargo] = useState({ campo: "", valido: null });
  const [luminaria, setLuminaria] = useState({ campo: "", valido: null });
  const [mantenimiento, setMantenimiento] = useState({ campo: "0.8", valido: null });
  const [calculo, setCalculo] = useState(0);
  const [calculoFlujo, setCalculoFlujo] = useState(0);
  const [formUno, setFormUno] = useState(false);
  const [formFlujo, setFormFlujo] = useState(false);

  const [luminariaTotal, setLuminariaTotal] = useState(0);
  const [luminariaAncho, setLuminariaAncho] = useState(0);
  const [luminariaLargo, setLuminariaLargo] = useState(0);

  const changeAlto = (e) => {
    setAlto({ ...alto, campo: e.target.value });
  };
  const changeAncho = (e) => {
    setAncho({ ...ancho, campo: e.target.value });
  };
  const changeLargo = (e) => {
    setLargo({ ...largo, campo: e.target.value });
  };
  const changeMantenimiento = (e) => {
    setMantenimiento({ ...mantenimiento, campo: e.target.value });
  };
  const calcular = (e) => {
    e.preventDefault();
    if(alto.campo.length > 0 && ancho.campo.length > 0 && largo.campo.length > 0) {

      const indiceK = (parseFloat(ancho.campo) * parseFloat(largo.campo)) / (parseFloat(alto.campo) * (parseFloat(ancho.campo) + parseFloat(largo.campo)));
      setCalculo(indiceK);

      const funcFx = `( 0.6 + 0.5*(${indiceK}-0.6) - 0.19286*(${indiceK}-0.6)*(${indiceK}-1) + 0.05119*(${indiceK}-0.6)*(${indiceK}-1)*(${indiceK}-2) - 0.00870*(${indiceK}-0.6)*(${indiceK}-1)*(${indiceK}-2)*(${indiceK}-3) )`;

      const math = simplify(funcFx).toString();
      const constN = evaluate(math).toFixed(2);
      const flujo = (parseFloat(lumen.campo) * (parseFloat(ancho.campo) * parseFloat(largo.campo))) / (constN * parseFloat(mantenimiento.campo));
      const numLuminaria = flujo / parseFloat(luminaria.campo);
      const numLuminariaAncho = Math.sqrt( (numLuminaria * ancho.campo) / largo.campo );
      const numLuminariaLargo = (numLuminariaAncho * largo.campo) / ancho.campo;
      setCalculoFlujo(flujo);
      setLuminariaTotal(numLuminaria);
      setLuminariaAncho(numLuminariaAncho);
      setLuminariaLargo(numLuminariaLargo);
      setFormUno(false);
      setFormFlujo(true);
      
      console.log(`La cte (k) : ${indiceK.toFixed(2)};\n\nLa func f(k) : ${funcFx};\n\nFact. Util. (n) : ${constN}`);
    }
  };
  const validarAlto = () => {
    if (alto.campo.length > 0) {
      setAlto({ ...alto, valido: true });
    } else {
      setAlto({ ...alto, valido: false });
    }
  }
  const validarAncho = () => {
    if (ancho.campo.length > 0) {
      setAncho({ ...ancho, valido: true });
    } else {
      setAncho({ ...ancho, valido: false });
    }
  }
  const validarLargo = () => {
    if (largo.campo.length > 0) {
      setLargo({ ...largo, valido: true });
    } else {
      setLargo({ ...largo, valido: false });
    }
  }
  const reset = (e) => {
    e.preventDefault();
    setAmbiente(true)
    setFormFlujo(false);
  };

  // ----------------
  const [ambiente, setAmbiente] = useState(true);
  const [ambienteHogar, setAmbienteHogar] = useState(false);
  const [ambienteOficina, setAmbienteOficina] = useState(false);
  const [productos, setProductos] = useState(false);

  const handleAmbiente = (e) => {
    e.preventDefault();
    
    if (e.target.name === "hogar") {
      setAmbienteHogar(true);
      setAmbiente(false);
    } else if (e.target.name === "oficina") {
      setAmbienteOficina(true);
      setAmbiente(false);
    }
  };
  const handleAmbienteHogar = (e) => {
    e.preventDefault();
    setLumen({ ...lumen, campo: e.target.name });
    setAmbienteHogar(false);
    setProductos(true);
    console.log("hogar: " + e.target.name);
  };
  const handleAmbienteOficina = (e) => {
    e.preventDefault();
    setLumen({ ...lumen, campo: e.target.name });
    setAmbienteOficina(false);
    setProductos(true);
    console.log("oficina: " + e.target.name);
  };
  const handleSelecProducto = (e) => {
    e.preventDefault();
    setLuminaria({ ...luminaria, campo: e.target.name });
    setProductos(false);
    setFormUno(true);
    console.log("lampara: " + e.target.name);
  }
  // ----------------

  console.log(`Habi : ${lumen.campo}\nLumi : ${luminaria.campo}\nAnch : ${ancho.campo}\nLarg : ${largo.campo}\nAlto : ${alto.campo}\nMant : ${mantenimiento.campo}\nK    : ${calculo.toFixed(2)} `)

  return (
    <>
      <Hero />
      <div className="Home">
        {ambiente && (
          <Calculator onclick={handleAmbiente} />
        )}

        {ambienteHogar && (
          <CalculatorHome onclick={handleAmbienteHogar} />
        )}

        {ambienteOficina && (
          <CalculatorOffice onclick={handleAmbienteOficina} />
        )}

        {productos && (
          <>
            <h1>3ro Seleccioná la luminaria</h1>
            <CalculatorProduct 
              onclick={handleSelecProducto} 
              products={InitialState.Lampara}
            />
          </>
        )}

        {formUno && (
          <>
            <h1>4to Ingresa las medidas del ambiente</h1>
            <div className="Home__form--div">
              <img
                className="Home__img--small"
                src={PiezaPerspectiva}
                alt="Pieza en perspectiva"
              />
            </div>
            <form onSubmit={calcular} className="Home__form">
              <Input
                label="Alto (m.): "
                name="alto"
                onchange={changeAlto}
                value={alto.campo}
                validar={validarAlto}
                valido={alto.valido}
                textError="Invalido! Altura en metros. Para fracciónes usar punto antes del decimal."
              />
              <Input
                label="Ancho (m.): "
                name="ancho"
                onchange={changeAncho}
                value={ancho.campo}
                validar={validarAncho}
                valido={ancho.valido}
                textError="Invalido! Ancho en metros. Para fracciónes usar punto antes del decimal."
              />
              <Input
                label="Largo (m.): "
                name="largo"
                onchange={changeLargo}
                value={largo.campo}
                validar={validarLargo}
                valido={largo.valido}
                textError="Invalido! Largo en metros. Para fracciónes usar punto antes del decimal."
              />              
              <Input
                label="Mantenimiento: "
                name="mantenimiento"
                onchange={changeMantenimiento}
                value={mantenimiento.campo}
              />
              <input className="Btn" type="submit" value="Calcular" />
            </form>
          </>
        )}

        {formFlujo && (
          <>
            <h1>Resultado</h1>
            <h3>Flujo luminoso total Qt : {calculoFlujo.toFixed(0)} lux</h3>
            <p className="Home__text">
              La cantidad mínima para superar el flujo luminoso esperado será de{" "}
              {Math.ceil(luminariaTotal)} Luminarias en la habitación, aunque la
              distribución ideal sera de{" "}
              <strong>{Math.ceil(luminariaAncho)} Luminarias</strong> (
              {luminariaAncho.toFixed(2)}) a lo ancho y de{" "}
              <strong>{Math.ceil(luminariaLargo)} Luminarias</strong> (
              {luminariaLargo.toFixed(2)}) a lo largo, un total de{" "}
              <strong>
                {Math.ceil(luminariaAncho) * Math.ceil(luminariaLargo)}{" "}
                Luminarias
              </strong>
            </p>
            <input
              className="Btn"
              type="button"
              value="Volver a calcular"
              onClick={reset}
            />
          </>
        )}
      </div>
    </>
  );
}

export default Home;