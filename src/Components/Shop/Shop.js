import React, { useEffect, useState } from 'react';
import { addToDb, getStoreCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Products/Products';
import './Shop.css';

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        console.log('product load before fetch');
        fetch('products.json')
            .then(res => res.json())
            .then(data => {
                setProducts(data)
                console.log('product loadded');
            })
    }, [])

    useEffect(() => {
        const storedCart = getStoreCart();
        console.log('local storage first line', products);
        const saveCart = [];
        for (const id in storedCart) {
            const addedProduct = products.find(product => product.id === id);
            if (addedProduct) {
                // console.log(addedProduct);
                const quantity = storedCart[id]
                addedProduct.quantity = quantity;
                saveCart.push(addedProduct);
            }
        }
        setCart(saveCart);
        console.log('local storage finished');
    }, [products])

    const handleAddToCart = (product) => {
        // console.log(product);
        // const newCart = cart.push(product);
        const newCart = [...cart, product];
        setCart(newCart);
        addToDb(product.id);
    }

    return (
        <div className='shop-container'>
            <div className='products-container'>
                {
                    products.map(product => <Product
                        key={product.id}
                        product={product}
                        handleAddToCart={handleAddToCart}
                    ></Product>)
                }
            </div>
            <div className='cart-container'>
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Shop;