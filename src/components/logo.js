import image from '../assets/terralogo.jpg';
import './Logo.css';
import React from 'react';
function Logo(){
    return(
        <div className='logo'>
         <img src={image} alt="logo" />
        </div>
    )
}

export default Logo;
