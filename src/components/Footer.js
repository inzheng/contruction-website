import React from 'react';
import './Footer.css';

const Footer = ({ onNavClick }) => {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <div className="footer-col">
          <div className="footer-logo">
            <h2>CHRISTOPHER AND ALEXIS CORP</h2>
          </div>
          <p>Quality construction services for residential and commercial projects. Building excellence since 2010.</p>
        </div>
        

        <div className="footer-col">
          <h3>Quick Links</h3>
          <ul className="footer-links">
            <li>
              <a href="#home" onClick={(e) => { e.preventDefault(); onNavClick('home'); }}>
                Home
              </a>
            </li>
            <li>
              <a href="#services" onClick={(e) => { e.preventDefault(); onNavClick('services'); }}>
                Services
              </a>
            </li>
            <li>
              <a href="#about" onClick={(e) => { e.preventDefault(); onNavClick('about'); }}>
                About
              </a>
            </li>
            <li>
              <a href="#contact" onClick={(e) => { e.preventDefault(); onNavClick('contact'); }}>
                Contact
              </a>
            </li>
          </ul>
        </div>
        
        <div className="footer-col">
          <h3>Services</h3>
          <ul className="footer-links">
            <li><a href="#services">Residential Construction</a></li>
            <li><a href="#services">Commercial Construction</a></li>
            <li><a href="#services">Remodeling & Renovations</a></li>
            <li><a href="#services">Kitchen & Bathroom</a></li>
            <li><a href="#services">Concrete & Foundation</a></li>
          </ul>
        </div>
        
        <div className="footer-col">
          <h3>Contact Info</h3>
          <ul className="contact-info">
            <li>1464 CLINTONVILLE STREET 1ST FLOOR, WHITESTONE NY 11357</li>
            <li>Phone: 917-335-2445</li>
            <li>Email: Incomplete Info </li>
            <li>Hours: Mon-Fri 8:00 AM - 6:00 PM</li>
          </ul>
        </div>
      </div>
      
      <div className="footer-bottom">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} CHRISTOPHER AND ALEXIS CORP. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;