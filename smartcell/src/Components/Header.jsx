import React from 'react';
import logo from './Img/Header-logo.svg';
import { HiOutlineShoppingCart } from 'react-icons/hi';
import { RiAccountCircleLine } from 'react-icons/ri';

import './Header.css'

const Header = () => {
    return (
        <div className='header'>
            <div>
                <img className='logo-image' src={logo} alt="Logo da página"></img>
            </div>

            <nav className="nav-panel">
                <button className="account"><RiAccountCircleLine /></button>
                <button className='cart'><HiOutlineShoppingCart /></button>
            </nav>

        </div>
    );
}

export default Header;