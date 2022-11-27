import React from 'react';
import './Products.css';

const Products = (props) => {
    // console.log(props.product);
    const { img, name, seller, ratings, price } = props.product;
    const { handleAddToCart } = props;
    // console.log(props);
    return (
        <div className='single-product'>
            <img src={img} alt="product" />
            <div className="product-info">
                <p className='product-name'>{name}</p>
                <p>Price: ${price}</p>
                <p>Seller:<small>{seller}</small></p>
                <p> Rating: <small>{ratings} star</small></p>
            </div>
            <div>
                <button onClick={handleAddToCart} className="btn-cart">Add to Cart</button>
            </div>
        </div>
    );
};

export default Products;