import React from 'react';
import './Cart.css';
const Cart = (props) => {
    const { cart } = props;
    // console.log(cart);
    let total = 0;
    let shipping = 0;
    for (const product of cart) {
        total = total + product.price;
        shipping = shipping + product.shipping;
    }
    const tax = parseFloat((total * 0.1).toFixed(2));
    const grandTotal = total + shipping + tax;
    return (
        <div className='cart'>
            <h3 className='order-summery'>Order Summery</h3>
            <div className='cart-info'>
                <p>Seleted Items: {cart.length}</p>
                <p>Total Price: ${total}</p>
                <p>Total Shipping: ${shipping}</p>
                <p>Tax: {tax}</p>
                <h4>GrandTotal: ${grandTotal}</h4>
            </div>
        </div>
    );
};

export default Cart;