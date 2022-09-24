import React from 'react';
import logo from "../../images/Logo.svg";
import './Header.css';

const Header = () => {
    return (
        <nav className='header-nav'>   
            <div className='nav-container'>
                <img src={logo} alt="" />
                <div className='nav-list-container'>
                    <a href="/shop">Shop</a>
                    <a href="/orders">Orders</a>
                    <a href="/inventory">Inventory</a>
                    <a href="/about">About</a>
                </div>
            </div>
        </nav>
    );
};

export default Header;