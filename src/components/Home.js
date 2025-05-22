import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <div className="hero-banner">
        <div className="overlay"></div>
        <div className="container hero-content">
          <h1>Building Excellence</h1>
          <p>Quality construction services you can trust</p>
          <div className="hero-buttons">
            <a href="#services" className="btn btn-primary">Our Services</a>
            <a href="#contact" className="btn btn-secondary">Contact Us</a>
          </div>
        </div>
      </div>
      
      <div className="container welcome-section">
        <div className="welcome-content">
          <h2>Welcome to CHRISTOPHER AND ALEXIS</h2>
          <p>For over 22 years, CHRISTOPHER AND ALEXIS has been delivering exceptional building services throughout the New York area. We combine cutting-edge techniques with traditional craftsmanship to create structures that stand the test of time.</p>
          <p>From residential renovations to commercial developments, our team of experienced professionals is dedicated to exceeding your expectations with precision, quality, and reliability.</p>
          <a href="#about" className="btn btn-primary">Learn More About Us</a>
        </div>
        <div className="welcome-image">
          <img src="https://placehold.co/600x400" alt="Construction site with workers" />
        </div>
      </div>
    </div>
  );
};

export default Home;