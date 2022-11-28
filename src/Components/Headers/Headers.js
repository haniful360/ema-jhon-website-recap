import React from 'react';
import logo from "../../images/Logo.svg";
import './Headers.css';

const Headers = () => {
    return (
        <div className='container'>
            <nav className='header'>
                <div>
                    <img src={logo} alt="ema-jhon" />
                </div>
                <div>
                    <ul className='munu-item' >
                        <li><a href="/shop">shop</a></li>
                        <li><a href="/orders">Orders</a></li>
                        <li><a href="/inventory">inventory</a></li>
                        <li><a href="/about">about</a></li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Headers;