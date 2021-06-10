import React from 'react';

import '../styles/components/About.scss';

const About = () => {
    return (
        <div className="About" >
            <div className="About__text--container" >
                <h1 className="About__h1" >Gran Altillo - Muebles Antiguos</h1>
                <p className="About__p" >
                    Nos dedicamos a la venta y restauracion de muebles antiguos de estilo desde 2001. Comenzando en la ciudad de Obera, Misiones, Argentina y desde el 2005 en Posadas.
                </p>
                <p className="About__p" >   
                    Siempre buscamos un equilibrio entre mantener la presencia de "el paso del tiempo" y recuperar la funcionalidad de cada mueble o objeto.
                </p>
            </div>
            <div className="About__photos" >
                <div className="About__photos--container" >
                    <img
                        className="About__photos--image"  
                        src="https://i.imgur.com/cXlYNAO.jpg" 
                        alt="vidriera base 2011" 
                    />
                    <p className="About__p" >Vidriera de Base 2011</p>
                </div>
                <div className="About__photos--container" >
                    <img 
                        className="About__photos--image" 
                        src="https://i.imgur.com/fICL18H.jpg" 
                        alt="vidriera base 2010" 
                    />
                    <p className="About__p" >Vidriera de Base 2012</p>
                </div>                
                <div className="About__photos--container" >
                    <img 
                        className="About__photos--image" 
                        src="https://i.imgur.com/isGfbwv.jpg" 
                        alt=" Expo 2012" 
                    />
                    <p className="About__p" >Expo FICOP 2012</p>
                </div>                
                <div className="About__photos--container" >
                    <img 
                        className="About__photos--image" 
                        src="https://i.imgur.com/6bozcte.jpg" 
                        alt="Muebles para fotografia" 
                    />
                    <p className="About__p" >Alquileres para fotografias, eventos escpeciales, casamientos.</p>
                </div>
            </div>
        </div>
    )
}

export default About;