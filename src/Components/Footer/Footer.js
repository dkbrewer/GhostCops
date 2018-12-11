import React from 'react'
import facebook from '../../images/facebook.png';
import etsy from '../../images/etsy.png';

const footer = () => {
    return <div>
        <hr />
        <a href="https://www.facebook.com/True-Brew-Art-1889999661076289" target="_blank"><img className="social" src={facebook} alt="Facebook" /></a>
        <a href="https://www.etsy.com/shop/TrueBrewArt" target="_blank"><img className="social" src={etsy} alt="Etsy" /></a>
        <p>&copy; 2018 Ghost Cops || Taryn</p>
    </div>
};

export default footer;