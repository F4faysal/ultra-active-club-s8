import React from 'react';
import './Header.css'
import img from '../../img/img.jpg'


const Header = () => {
    return (
        <nav className='hedar-continar'>
            <img src={img}  alt = '' />
            <div>
            <a href="/home">Home</a>
            <a href="/home">Menu</a>
            <a href="/home">Cart</a>
            <a href="/home">About Us</a>
            </div>
        </nav>
    );
};

export default Header;