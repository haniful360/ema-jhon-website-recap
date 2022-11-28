import React, { useEffect, useState } from 'react';
import useProducts from '../../hooks/useProducts';
import { addToDb, getStoreCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Products/Products';
import './Shop.css';

const Shop = () => {
    // hook
    const [products, setProducts] = useProducts();
    const [cart, setCart] = useState([]);
   
    // loacal storage data store
    useEffect(() => {
        const storedCart = getStoreCart();
        // console.log('local storage first line', products);
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
        // console.log('local storage finished');
    }, [products])

    const handleAddToCart = (selectedProduct) => {
        // console.log(product);
        // const newCart = cart.push(product);
        let newCart = []
        const exists = cart.find(product => product.id === selectedProduct.id);
        if (!exists) {
            selectedProduct.quantity = 1;
            newCart = [...cart, selectedProduct];
        }
        else {
            const rest = cart.filter(product => product.id !== selectedProduct.id);
            exists.quantity = exists.quantity + 1;
            newCart = [...rest, exists];
        }
        // const newCart = [...cart, selectedProduct];
        setCart(newCart);
        addToDb(selectedProduct.id);
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