

import React from 'react';
import './Product.css';

const Product = () => {
  return (
    <div className="product-page">
      <div className="header">
        <h2>OUR PRODUCTS</h2>
        <h1>Explore Our PRODUCTS</h1>
        <p>
          Our products incorporate world class technology and latest AI tools to serve our clients.
          We elevate your business through the Power of Artificial Intelligence.
        </p>
      </div>
      <div className="product">
        <h3>AGI Wiser</h3>
        <p>
          AGI Wiser is an AI Web Assistant that reshapes how we discover and interact with information on the internet.
        </p>
      </div>

      <div className="parent-card">
                <div className="service-card">
                    <img src="https://ahimay.com/images/agi_1.png" alt="Software Services" />
                    <h3>Software Services</h3>
                    <p>Ahnay Technology Solutions can be...</p>
                    <p>Extra dummy text for scrolling...</p>
                    <p>Extra dummy text for scrolling...</p>
                    <p>Extra dummy text for scrolling...</p>
                    <p>Extra dummy text for scrolling...</p>
                    <p>Extra dummy text for scrolling...</p>
                    <p>Extra dummy text for scrolling...</p>
                </div>
                <div className="service-card">
                    <img src="https://ahimay.com/images/agi_1.png" alt="Business & Technology Consulting" />
                    <h3>Business & Technology Consulting</h3>
                    <p>Ahnay Technology Solutions offers...</p>
                    <p>Extra dummy text for scrolling...</p>
                    <p>Extra dummy text for scrolling...</p>
                    <p>Extra dummy text for scrolling...</p>
                    <p>Extra dummy text for scrolling...</p>
                    <p>Extra dummy text for scrolling...</p>
                    <p>Extra dummy text for scrolling...</p>
                </div>
                <div className="service-card">
                    <img src="https://ahimay.com/images/agi_1.png" alt="Professional Services" />
                    <h3>Professional Services</h3>
                    <p>Ahnay Technology Solutions provides...</p>
                    <p>Extra dummy text for scrolling...</p>
                    <p>Extra dummy text for scrolling...</p>
                    <p>Extra dummy text for scrolling...</p>
                    <p>Extra dummy text for scrolling...</p>
                    <p>Extra dummy text for scrolling...</p>
                    <p>Extra dummy text for scrolling...</p>
                </div>
            </div>
    </div>
  );
}

export default Product;
