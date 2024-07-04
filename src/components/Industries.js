

import React from 'react';
import './Industries.css';
import Card from './Card';
import banking from '../Assets/banking.png'; // Add the path to your images
import insurance from '../Assets/insurance.png';
import retail from '../Assets/retail.png';
import technology from '../Assets/technology.png';
import communications from '../Assets/Communications.png';
import media from '../Assets/media.png';

const Industries = () => {
  return (
    <div className="industries-page">
      <div className="header">
        <h2>INDUSTRIES WE HANDLE</h2>
        <h1>Explore Our INDUSTRIES</h1>
        <p>
          Our technology and business solutions are spread across the globe, technology, and domains.
          Customers can take advantage of our dedicated expertise in these industries to quickly realize
          their business goals. Our focus industries include:
        </p>
      </div>
      <ul className="industries-list">
        <li>Banking</li>
        <li>Insurance</li>
        <li>Retail</li>
        <li>Technology</li>
        <li>Communications</li>
        <li>Information and Media</li>
        <li>Infrastructure</li>
        <li>Government</li>
      </ul>
      <div className="cards-container">
        <Card image={banking} title="BANKING" />
        <Card image={insurance} title="INSURANCE" />
        <Card image={retail} title="RETAIL" />
        <Card image={technology} title="TECHNOLOGY" />
        <Card image={communications} title="COMMUNICATIONS" />
        <Card image={media} title="INFORMATION AND MEDIA" />
      </div>
    </div>
  );
}

export default Industries;

