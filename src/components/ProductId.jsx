import React from 'react';
import { Link } from 'react-router-dom';

import initialState from '../InitialState';
import '../assets/styles/ProductId.scss';

const View = (props) => {
    const item = initialState.Lampara;

    const miLampara = (lampara) => {
        return lampara.id == props.match.params.id;
    }

    const filtroItem = item.filter(miLampara);

    return (
        <>
            <div className="ProductId__content" >
                <div className="ProductId" >
                    <div className="ProductId__image--container" >
                        <img 
                            className="ProductId__image" 
                            src={filtroItem[0].image} 
                            alt={filtroItem[0].title} 
                        />
                    </div>
                    <div>
                        <div className="ProductId__description" >
                            <h2>{filtroItem[0].title}</h2>
                            <h1>$ {filtroItem[0].price}</h1>
                            <Link to="/contacto" className="ProductId__button consult" >
                                Consultar
                            </Link>
                        </div>
                        <div className="ProductId__description" >
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