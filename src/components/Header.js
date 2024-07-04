import React from 'react';
import './Header.css';
import Logo from './Logo';
import Contact from './ContactInfo';
import Navbar from './Navbar';

const Header = () => {
  return (
    <header className="navbar">
      <Logo />
      <div className="right-section">
         <Contact />
        <Navbar /> 
      </div>
    </header>
    
  );
};

export default Header;