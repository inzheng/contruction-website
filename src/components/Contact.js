import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact">
      <div className="container">
        <h2>Contact Us</h2>
        
        <div className="contact-info-only">
          <div className="info-card-large">
            <h3>Get In Touch</h3>
            <p>
              We're here to answer any questions you may have about our construction services.
              Reach out to us and we'll respond as soon as possible.
            </p>
            
            <div className="contact-details">
              <div className="info-item">
                <h4>Address</h4>
                <p>1464 CLINTONVILLE STREET 1ST FLOOR, WHITESTONE NY 11357</p>
              </div>
              
              <div className="info-item">
                <h4>Phone</h4>
                <p>917-335-2445</p>
              </div>
              
              <div className="info-item">
                <h4>Email</h4>
                <p>christopherandalexiscorp@gmail.com</p>
              </div>
              
              <div className="info-item">
                <h4>Hours</h4>
                <p>Open 7 days</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;