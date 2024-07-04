import React from 'react';
import './AboutUs.css';

const AboutUs = () => {
    return (
        <div className="container">
            <div className="section">
                <h2 className="subtitle">ABOUT US</h2>
                <h1 className="title">Welcome to AHIMAY TECHNOLOGY SOLUTIONS</h1>
                <p>
                    Ahimay Technology Solutions is founded by very experienced industry professionals with the mission of providing value based solutions to its clients in the areas of Application Development, Quality Engineering and Professional Services.
                </p>
            </div>
            <div className="section">
                <h2 className="subtitle">Our Vision:</h2>
                <p>Vision is to build a strong team which delivers the projects with quality and dedication.</p>
            </div>
            <div className="section mission-values">
                <h2 className="subtitle">Our Mission</h2>
                <p>Our mission statement enforces that our two important key stakeholders are customers and our people.</p>
            </div>
            <div className="section mission-values">
                <h2 className="subtitle">Our Values and Culture</h2>
                <p>What brings our employees together in building an organization that has a unique culture is our value system. Every employee is driven by dedication, commitment and social responsibility.</p>
            </div>
        </div>
    );
};

export default AboutUs;

