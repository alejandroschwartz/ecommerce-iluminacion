import React from 'react';
import { Link } from 'react-router-dom';

import '../assets/styles/Item.scss';

const Item = ({ product }) => {
    return (
        <Link to={`/productos/${product.id}`} className="Item__hover" >
            <div className="Item">
                <div className="Item__container" >
                    <img 
                        className="Item__image" 
                        src={product.image} 
                        alt={product.title} 
                    />
                </div>
                <div className="Item__text" >
                    <h2>$ {product.price} </h2>
                    <p>
                        {product.lux} lux  |  {product.watts} watts 
                    </p>
                    <p>
                        <strong>{product.title}</strong>
                    </p>
                </div>
            </div>
        </Link>
    )
}

export default Item;