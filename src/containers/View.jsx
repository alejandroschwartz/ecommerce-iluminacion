import React from 'react';
import initialState from '../InitialState';

import '../styles/components/View.scss';

const View = (props) => {
    const item = initialState.products;

    const myFurniture = (auto) => {
        return auto.id == props.match.params.id;
    }

    const filtroItem = item.filter(myFurniture);

    return (
        <>
            <div className="View__content" >
                <div className="View" >
                    <div className="View__image--container" >
                        <img 
                            className="View__image" 
                            src={filtroItem[0].image} 
                            alt={filtroItem[0].title} 
                        />
                    </div>
                    <div>
                        <div className="View__description" >
                            {/* <p>Año: {filtroItem[0].year} | {filtroItem[0].km}Km</p> */}
                            <h2>{filtroItem[0].title}</h2>
                            <h1>$ {filtroItem[0].price}</h1>
                            <button className="View__button consult" >
                                Consultar
                            </button>
                            {/* <button className="View__button buy" >
                                Comprar
                            </button> */}
                            {/* <i className="Icon fas fa-award" /> Suma puntos con tu compra. */}
                        </div>
                        <div className="View__description" >
                            <h2>Descripción del producto</h2>
                            <p>{filtroItem[0].description}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );    
}

export default View;