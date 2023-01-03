import image from '../assets/terralogo.jpg';
import './Header.css';
import vedioicon from '../assets/vedio.png';
import React from 'react';

function Header(){
  return (
      <div>
        <div>
          <img className='image1' src={image} alt="logo" />
          <h2 className='h2'>Terralogic Meet<img className='vedioicon' src={vedioicon} alt="vedioicon" /></h2>
        </div>

      </div>
  );  
};

export default Header;