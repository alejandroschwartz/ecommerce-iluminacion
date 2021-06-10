import React, { useState, useEffect, useMemo, useRef } from "react";

import Item from "./Item";
import "../styles/components/Product.scss";

const Product = ({ products }) => {

  const [ search, setSearch ] = useState('');
  const handleSearch = (event) => {
    setSearch(event.target.value);
    // setSearch(searchInput.current.value);
  }
  const items = products.filter((item => {
    return item.title.toLowerCase().includes(search.toLowerCase());
  }))


  // const items = () => 
  //     products.filter((user) => {
  //         return user.name.toLowerCase().includes(search.toLowerCase());
  //     }
  // )
  console.log(items)


  return (
    <>
      <div className="Products__input--container">
        {/* <span>Filtra por nombre</span>
        <br /> */}
        <input
          className="Products__input"
          type="text"
          value={search}
          // ref={searchInput}
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
                <i class="fas fa-search"></i>
              </>
          }
        </div>
      </div>
    </>
  );
};

export default Product;
