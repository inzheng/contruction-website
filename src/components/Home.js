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
        <p>
          Welcome! We're a dedicated construction team with over 24 years of hands-on industry experience and more than 8 years in business. Whether you're planning a renovation, new build, or custom project, we're here to bring your ideas to life with skill, care, and integrity.
        </p>
        <p>
          We take pride in the relationships we’ve built with our clients—many of whom return to us and recommend our work for our reliability, quality, and five-star service. No matter the size of the job, we treat every project like it’s our own.
        </p>
        <p>
          Thank you for considering us. We look forward to working with you. 
        </p>
        </div>
        <div className="welcome-image">
          <img src="https://imgur.com/b2zzHtR.jpg" alt="C&A Corp Logo" />
        </div>
      </div>
    </div>
  );
};

export default Home;