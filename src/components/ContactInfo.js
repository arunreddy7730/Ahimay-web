import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faEnvelope } from '@fortawesome/free-solid-svg-icons';

const Contact = () => (
  <div className="contact-info">
    <div className='contact'>
    <span><FontAwesomeIcon className="email" icon={faEnvelope} /><span className='email_text'> info@ahimay.com</span></span>
    <span><FontAwesomeIcon className="phone" icon={faPhone} /> <span className='phone_text'>+1 510 403 4840</span></span>
    
    </div>
  </div>
);

export default Contact;




