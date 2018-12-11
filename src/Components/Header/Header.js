import React from 'react'
import {NavLink } from 'react-router-dom'
import banner from './banner.jpg';
import logo from './logo.jpg';

const header = () => {
    return <div id="headercontent">
        <img id="banner" src={banner} />
        <img id="logo" src={logo} />
    <nav>
        <ul> 
            <li><NavLink to="/">Home</NavLink></li>
            <li><NavLink to="/archive">Archive</NavLink></li> 
            <li><NavLink to="/characters">Characters</NavLink></li>
            <li><NavLink id="midsection" to="/about">About</NavLink></li> 
            <li><NavLink to="/contact">Contact</NavLink></li> 
            <li><a href="https://www.etsy.com/shop/TrueBrewArt" target="blank">Etsy</a></li> 
        </ul> 
    </nav>
    </div>
};

export default header;