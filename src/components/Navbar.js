import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTwitter, faFacebookF, faLinkedinIn, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Navbar = () => (
  <nav className="menu-section">
    <ul>
      <li><a href="about">ABOUT US</a></li>
      <li><a href="services">SERVICES</a></li>
      <li><a href="products">PRODUCTS</a></li>
      <li><a href="industries">INDUSTRIES</a></li>
      <li><a href="clients">CLIENTS</a></li>
      <li><a href="careers">CAREERS</a></li>
      <li><a href="contact">CONTACT US</a></li>
    </ul>
    <div className="icon-section">
      <a href="#"><FontAwesomeIcon icon={faTwitter} /></a>
      <a href="#"><FontAwesomeIcon icon={faFacebookF} /></a>
      <a href="#"><FontAwesomeIcon icon={faLinkedinIn} /></a>
      <a href="#"><FontAwesomeIcon icon={faInstagram} /></a>
    </div>
  </nav>
);

export default Navbar;




