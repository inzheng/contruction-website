import React from 'react';
import './About.css';

const About = () => {
  const stats = [
    { value: '24+', label: 'Years of Experience' },
    { value: '200+', label: 'Projects Completed' },
    { value: '50+', label: 'Team Members' },
    { value: '95%', label: 'Client Satisfaction' }
  ];

  return (
    <div className="about">
      <div className="container">
        <h2>About Us</h2>
        
        <div className="about-content">
          <div className="about-text">
            <p>
              With over 24 years of personal experience in construction and more than 8 years running this business, we bring a wealth of knowledge, craftsmanship, and dedication to every project. Our foundation is built on trust, hard work, and client satisfaction.
            </p>
            <p>
              We proudly serve a wide range of clients—many of whom have rated us five stars for our commitment to quality and service. From renovations to full-scale builds, we believe every detail matters and every customer deserves our best.
            </p>
            <p>
              Our team combines hands-on expertise with practical solutions to deliver consistent, high-standard results. We understand the importance of reliability and treat every job, big or small, with the same level of focus and care.
            </p>
            <p>
              We operate Monday through Saturday and are available on Sundays only in case of emergency. Our goal is to make your project smooth, professional, and stress-free from start to finish.
            </p>
          </div>
          
          <div className="about-image">
            <img src="https://imgur.com/34dBPt3.jpg" alt="CHRISTOPHER AND ALEXIS team" />
          </div>
        </div>
        
        <div className="stats-container">
          {stats.map((stat, index) => (
            <div className="stat-item" key={index}>
              <div className="stat-value">{stat.value}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
        
        <div className="values-section">
          <h3>Our Core Values</h3>
          <div className="values-grid">
            <div className="value-item">
              <h4>Quality</h4>
              <p>We never compromise on the quality of our work, using only the finest materials and techniques.</p>
            </div>
            <div className="value-item">
              <h4>Integrity</h4>
              <p>We operate with complete transparency and honesty in all our client and partner relationships.</p>
            </div>
            <div className="value-item">
              <h4>Safety</h4>
              <p>The safety of our team and clients is paramount in every project we undertake.</p>
            </div>
            <div className="value-item">
              <h4>Innovation</h4>
              <p>We continuously embrace new technologies and methods to improve our construction processes.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;