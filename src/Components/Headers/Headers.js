import React from 'react';
import logo from "../../images/Logo.svg";
import './Headers.css';

const Headers = () => {
    return (
        <div>
            <nav className='header'>
                <div>
                    <img src={logo} alt="ema-jhon" />
                </div>
                <div>
                    <ul className='munu-item' >
                        <li><a href="/">Home</a></li>
                        <li><a href="/#">order</a></li>
                        <li><a href="/#">order review</a></li>
                        <li><a href="/#">manage inventory</a></li>
                    </ul>
                </div>
            </nav>
        </div>
    );
};

export default Headers;