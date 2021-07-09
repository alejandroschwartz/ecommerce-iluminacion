import React from 'react';
import { Link } from 'react-router-dom';

import '../styles/components/Item.scss';

const Item = ({ product }) => {
    return (
        <Link to={`/products/${product.id}`} className="Item__hover" >
            <div className="Item">
                <div className="Item__container" >
                    <img 
                        className="Item__image" 
                        src={product.image} 
                        alt={product.title} 
                    />
                </div>
                <div className="Item__text" >
                    <h3 className="Item__title" >
                        {product.lux} lux  |  {product.watts} watts 
                    </h3>
                    <h2 className="Item__title" >
                        {product.title}
                    </h2>
                </div>
            </div>
        </Link>
    )
}

export default Item;