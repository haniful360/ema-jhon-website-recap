import React from 'react';
import useProducts from '../../hooks/useProducts';

 const Orders = () => {
    const [products, setProducts] = useProducts();
    return (
        <div>
            <h1>this is orders page</h1>
            <h1>this is orders page</h1>
            <h1>this is orders page</h1>
            <h1>all products:{products.length}</h1>
        </div>
    );
};

export default Orders;