import React, { useState, useEffect } from 'react';
import './Navbar.css';

const Navbar = ({ activeSection, onNavClick }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleNavClick = (sectionId) => {
    onNavClick(sectionId);
    setMobileMenuOpen(false);
  };

  return (
    <header className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container navbar-container">
        <div className="navbar-logo">
          <h1>CHRISTOPHER AND ALEXIS</h1>
        </div>
        
        <button 
          className={`mobile-menu-toggle ${mobileMenuOpen ? 'active' : ''}`}
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>
        
        <nav className={`navbar-menu ${mobileMenuOpen ? 'active' : ''}`}>
          <ul>
            <li className={activeSection === 'home' ? 'active' : ''}>
              <a href="#home" onClick={(e) => { e.preventDefault(); handleNavClick('home'); }}>
                Home
              </a>
            </li>
            <li className={activeSection === 'services' ? 'active' : ''}>
              <a href="#services" onClick={(e) => { e.preventDefault(); handleNavClick('services'); }}>
                Services
              </a>
            </li>
            <li className={activeSection === 'about' ? 'active' : ''}>
              <a href="#about" onClick={(e) => { e.preventDefault(); handleNavClick('about'); }}>
                About
              </a>
            </li>
            <li className={activeSection === 'contact' ? 'active' : ''}>
              <a href="#contact" onClick={(e) => { e.preventDefault(); handleNavClick('contact'); }}>
                Contact
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;