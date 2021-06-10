import React from 'react';

import initialState from '../InitialState';
import Product from '../components/Product';

const Products = () => {

    return(
        <Product products={initialState.products} />
    )
}

export default Products;