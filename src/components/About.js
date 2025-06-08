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
              Founded in 2010, ABC Construction has grown from a small family business into one of the most trusted construction companies in the area. Our commitment to quality, integrity, and client satisfaction has been the cornerstone of our success.
            </p>
            <p>
              We believe that every construction project, regardless of size, deserves the highest level of attention and craftsmanship. Our team of experienced professionals brings expertise across all construction disciplines, ensuring that your project is completed to the highest standards.
            </p>
            <p>
              At ABC Construction, we combine traditional building techniques with innovative technologies to deliver exceptional results. We're committed to sustainable building practices and use environmentally friendly materials whenever possible.
            </p>
            <p>
              Our mission is simple: to transform your vision into reality while providing a seamless, stress-free experience from concept to completion.
            </p>
          </div>
          
          <div className="about-image">
            <img src="https://imgur.com/34dBPt3.jpg" alt="ABC Construction team" />
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
      </div>
    </div>
  );
};

export default About;