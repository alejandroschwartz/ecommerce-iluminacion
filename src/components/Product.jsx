import React, { useState } from "react";

import Item from "./Item";
import "../assets/styles/Product.scss";

const Product = ({ products }) => {

  const [ search, setSearch ] = useState('');
  const handleSearch = (event) => {
    setSearch(event.target.value);
  }
  const items = products.filter((item => {
    return item.title.toLowerCase().includes(search.toLowerCase());
  }))

  return (
    <>
      <div className="Products__input--container">
        <input
          className="Products__input"
          type="text"
          value={search}
          placeholder="Buscar..."
          onChange={handleSearch}
        />
      </div>

      <div className="Products">
        <div className="Products__container">
          {items.length > 0 ? 
            <>
              {items.map((product) => (
                <Item key={product.id} product={product} />
              ))}
            </>
            : <>
                <h1 className="Products__error" >
                  Disculpe, No hay publicaciones que coincidan con tu búsqueda.
                </h1> <br/>
                <i className="fas fa-search"></i>
              </>
          }
        </div>
      </div>
    </>
  );
};

export default Product;