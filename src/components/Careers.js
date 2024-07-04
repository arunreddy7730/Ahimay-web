import React from 'react';
import './Careers.css';

const Careers = () => {
  return (
    <div className="careers-container">
      <h2 className="careers-title">CAREERS</h2>
      <p className="careers-subtitle">Join the Collaborative Business Experience. Think as a team. Enjoy work like never before.</p>
      <h1 className="careers-main-title">Learning and growing at <span className="highlight">AHIMAY</span></h1>
      <p className="careers-description">
        We are continually looking for people with world-class skills who thrive on high-energy environments and are as passionate about their work. 
        We value talent, intelligence, group spirit, diversity, creativity and idealism.
      </p>
      <p className="careers-email">
        Job Opportunities Please drop a mail to the following ID: <a href="mailto:Info@Ahimay.com" className="email-link">Info@Ahimay.com</a>
      </p>
    </div>
  );
}

export default Careers;
