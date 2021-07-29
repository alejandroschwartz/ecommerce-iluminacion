import React from 'react';

import '../assets/styles/Item.scss';

const Item = ({ product, onclick }) => {
    return (
        <button
            className="Item ItemCalculator"
            onClick={onclick}
        >
            <div className="Item__container">
                <img
                    className="Item__image"
                    src={product.image}
                    alt={product.title}
                    name={product.lux}
                />
            </div>
            <div className="Item__text">
                <h2>$ {product.price}</h2>
                <p>
                    {product.lux} lux | {product.watts} watts
                </p>
                <p>
                    <strong>{product.title}</strong>
                </p>
            </div>
        </button>
    );
}

export default Item;