import React, { useState } from 'react';

import '../styles/components/Home.scss';
import InitialState from '../InitialState';
import Hero from '../components/Hero';
import Input from '../components/Input';
// import Select from '../components/Select';

import Calculator from './Calculator';
import CalculatorHome from './CalculatorHome';
import CalculatorOffice from './CalculatorOffice';
import CalculatorProduct from './CalculatorProduct';

import PiezaPerspectiva from '../styles/images/pieza-perspectiva.png';
import indiceLocal from '../styles/images/indice-local.png';

function Home() {
  const [lumen, setLumen] = useState({ campo: 0, valido: null });
  const [alto, setAlto] = useState({ campo: "", valido: null });
  const [ancho, setAncho] = useState({ campo: "", valido: null });
  const [largo, setLargo] = useState({ campo: "", valido: null });
  const [calculo, setCalculo] = useState(0);
  const [calculoFlujo, setCalculoFlujo] = useState(0);
  const [formUno, setFormUno] = useState(true);
  const [formDos, setFormDos] = useState(false);
  const [formFlujo, setFormFlujo] = useState(false);

  const [luminariaTotal, setLuminariaTotal] = useState(0);
  const [luminariaAncho, setLuminariaAncho] = useState(0);
  const [luminariaLargo, setLuminariaLargo] = useState(0);

  const [luminaria, setLuminaria] = useState({ campo: "2000", valido: null });
  const [utilizacion, setUtilizacion] = useState({ campo: "0.85", valido: null });
  const [mantenimiento, setMantenimiento] = useState({ campo: "0.8", valido: null });

  // const changeLumen = (e) => {
  //   setLumen({ ...alto, campo: e.target.value });
  // };
  const changeAlto = (e) => {
    setAlto({ ...alto, campo: e.target.value });
  };
  const changeAncho = (e) => {
    setAncho({ ...ancho, campo: e.target.value });
  };
  const changeLargo = (e) => {
    setLargo({ ...largo, campo: e.target.value });
  };
  // const changeLuminaria = (e) => {
  //   setLuminaria({ ...utilizacion, campo: e.target.value });
  // };
  const changeUtilizacion = (e) => {
    setUtilizacion({ ...utilizacion, campo: e.target.value });
  };
  const changeMantenimiento = (e) => {
    setMantenimiento({ ...mantenimiento, campo: e.target.value });
  };
  const calcular = (e) => {
    e.preventDefault();
    setCalculo( (parseFloat(ancho.campo) * parseFloat(largo.campo)) / (parseFloat(alto.campo) * (parseFloat(ancho.campo) + parseFloat(largo.campo))) );
    setFormUno(true);
    setFormDos(true);
  };
  const validarForm = () => {
    if (alto.campo.length > 0) {
      setAlto({ ...alto, valido: true });
    } else {
      setAlto({ ...alto, valido: false });
    }
    if (ancho.campo.length > 0) {
      setAncho({ ...ancho, valido: true });
    } else {
      setAncho({ ...ancho, valido: false });
    }
    if (largo.campo.length > 0) {
      setLargo({ ...largo, valido: true });
    } else {
      setLargo({ ...largo, valido: false });
    }
  }
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
    setFormDos(false);
    setFormFlujo(true);

    // console.log(flujo)
    // console.log(`Hab: ${lumen.campo}, Anc: ${ancho.campo}, Lar: ${largo.campo}, Alt: ${alto.campo}, Uti: ${utilizacion.campo} Man: ${mantenimiento.campo}`)
  };
  const reset = (e) => {
    e.preventDefault();
    setFormUno(false);
    setFormDos(false);
    setFormFlujo(false)
  };

  console.log(`Hab: ${lumen.campo}, Lum: ${luminaria.campo}, Anc: ${ancho.campo}, Lar: ${largo.campo}, Alt: ${alto.campo}, Uti: ${utilizacion.campo} Man: ${mantenimiento.campo}`)

  // ----------------
  const [ambiente, setAmbiente] = useState(false);
  const [ambienteHogar, setAmbienteHogar] = useState(false);
  const [ambienteOficina, setAmbienteOficina] = useState(false);
  const [productos, setProductos] = useState(false);
  const [selecProducto, setSelecProductos] = useState(false)

  const handleAmbiente = (e) => {
    e.preventDefault();
    
    if (e.target.name === "hogar") {
      setAmbienteHogar(true);
      setAmbiente(true);
    } else if (e.target.name === "oficina") {
      setAmbienteOficina(true);
      setAmbiente(true);
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
    setFormUno(false);
    console.log("lampara: " + e.target.name);
  }
  // ----------------


  return (
    <>
      <Hero />
      <div className="Home">
        {/* <h2>Método de los lúmenes</h2> */}

        {ambiente === false
          ? <Calculator onclick={handleAmbiente} />
          : <> </>
        }

        {ambienteHogar === true
          ? <CalculatorHome onclick={handleAmbienteHogar} />
          : <> </>
        }

        {ambienteOficina === true 
          ? <CalculatorOffice onclick={handleAmbienteOficina} />
          : <> </>
        }

        {productos === true
          ? <>
              <h1>3ro Seleccioná la luminaria</h1>
              <CalculatorProduct onclick={handleSelecProducto} products={InitialState.Lampara} />
            </>
          : <> </>
        }
        
        {formUno === false
          ? <>
            {/* <p className="Home__text" >
              Primero debes seleccionar el tipo de habitación con sus medidas y luego la luminaria para obtener el índice k.
            </p> */}
            <div className="Home__form--div">
              <img
                className="Home__img--small"
                src={PiezaPerspectiva}
                alt="Pieza en perspectiva"
              />
            </div>
            <form onSubmit={calcular} className="Home__form">
              {/* <Select 
                label="Ambiente: "
                name="lumen"
                onchange={changeLumen}
                initialstate={InitialState.IntLuminica}
                value={lumen.campo}
              />
              <Select 
                label="Luminaria: "
                name="lumen"
                onchange={changeLuminaria}
                initialstate={InitialState.Lampara}
                value={luminaria.campo}
              /> */}
              <Input 
                label="Alto (m.): "
                name="alto"
                onchange={changeAlto}
                value={alto.campo}
                validar={validarForm}
                valido={alto.valido}
                textError="Invalido! Altura en metros. Para fracciónes usar punto antes del decimal."
              />
              <Input 
                label="Ancho (m.): "
                name="ancho"
                onchange={changeAncho}
                value={ancho.campo}
                validar={validarForm}
                valido={ancho.valido}
                textError="Invalido! Ancho en metros. Para fracciónes usar punto antes del decimal."
              />
              <Input 
                label="Largo (m.): "
                name="largo"
                onchange={changeLargo}
                value={largo.campo}
                validar={validarForm}
                valido={largo.valido}
                textError="Invalido! Largo en metros. Para fracciónes usar punto antes del decimal."
              />
              <input className="Btn" type="submit" value="Calcular" />
            </form>
          </>
          : <></>
        }

        {formDos === true
          ? <>
              <h3>Índice del local k: {calculo.toFixed(2)}</h3>
              <p className="Home__text" >
                Ahora con el valor de k obtenido y según los colores de techo, pared y piso podes buscar en la tabla el factor de utilización o usar el valor por defecto para calcular las Lamparas.
              </p>
              <div className="Home__form--div">
                <img className="Home__img" src={indiceLocal} alt="índice local k" />
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
                <input className="Btn" type="submit" value="Calcular flujo luminoso" />
              </form>
            </>
          : <></>
        }

        {formFlujo === true 
          ? <>
              <h3>Flujo luminoso total Qt : {calculoFlujo.toFixed(0)} lux</h3>
              <p className="Home__text" >
                La cantidad mínima para superar el flujo luminoso esperado será de { Math.ceil(luminariaTotal)} Luminarias en la habitación, aunque la distribución ideal sera de <strong>{Math.ceil(luminariaAncho)} Luminarias</strong> ({luminariaAncho.toFixed(2)}) a lo ancho y de <strong>{Math.ceil(luminariaLargo)} Luminarias</strong> ({luminariaLargo.toFixed(2)}) a lo largo, un total de <strong>{Math.ceil(luminariaAncho) * Math.ceil(luminariaLargo)} Luminarias</strong>. 
              </p>
              <input 
                className="Btn" 
                type="button" 
                value="Volver a calcular" 
                onClick={reset}
              />
            </>
          : <></>
        }

      </div>
    </>
  );
}

export default Home;