import React from 'react';
import './Products.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faShoppingCart } from '@fortawesome/free-solid-svg-icons'

const Products = (props) => {
    // console.log(props.product);
    const { handleAddToCart, product } = props;
    const { img, name, seller, ratings, price } = product;
    // console.log(props);
    return (
        <div className='single-product'>
            <img src={img} alt="product" />
            <div className="product-info">
                <p className='product-name'>{name}</p>
                <p>Price: ${price}</p>
                <p>Seller: <small>{seller}</small></p>
                <p> Rating: <small>{ratings} stars</small></p>
            </div>
            <div>
                <button onClick={() => handleAddToCart(product)} className="btn-cart">
                <span className='btn-text'> Add to Cart</span>
                <FontAwesomeIcon className='shopping-icon' icon ={faShoppingCart}/>
                </button>
            </div>
        </div>
    );
};

export default Products;