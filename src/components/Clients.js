import React from 'react';
import './Clients.css'; // Make sure to create a CSS file to style your components

const Clients = () => {
    return (
        <div className="clients-section">
            <div className="clients-intro">
                <h3>CLIENTS</h3>
                <p>Many of our key customers are from the Retail Industry, we have expertise in the Retail domain and helped many customers.</p>
                <p>We do have experience across the other domains and technologies.</p>
                <p>We are partnered with TalentPace and SoftServeGlobal in India to serve our customers.</p>
            </div>
            <div className="clients-feedback">
                <h2>What Our <span>CLIENTS</span> say</h2>
            </div>
            <div className="testimonial">
                <p className="testimonial-text">A testimonial is an honest endorsement of your product or service that usually comes from a customer, colleague, or peer who has benefited from or experienced success as a result of the work you did for them.</p>
                <div className="testimonial-author">
                    <img src="https://ahimay.com/images/testimonial-img1.png" alt="Author" />
                    <div className="author-info">
                        <strong>Krishna Mohan</strong>
                        <p>VP-Product Development</p>
                        <p>Softserve Global Software Inc.</p>
                    </div>
                </div>
                <div className="testimonial-quote-icon">
                    <span>&#8221;</span>
                </div>
            </div>
        </div>
    );
}

export default Clients;



