import React, { useState } from "react";

import CalculatorItem from "./CalculatorItem";
import "../assets/styles/Product.scss";

const Product = ({ products, onclick }) => {
  const [search, setSearch] = useState("");
  const handleSearch = (e) => {
    setSearch(e.target.value);
  };
  const items = products.filter((item) => {
    return item.title.toLowerCase().includes(search.toLowerCase());
  });

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
          {items.length > 0 ? (
            <>
              {items.map((product) => (
                <CalculatorItem key={product.id} product={product} onclick={onclick} />
              ))}
            </>
          ) : (
            <>
              <h1 className="Products__error">
                Disculpe, No hay publicaciones que coincidan con tu búsqueda.
              </h1>{" "}
              <br />
              <i className="fas fa-search"></i>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default Product;
