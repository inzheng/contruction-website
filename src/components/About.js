import React from 'react';
import './About.css';

const About = () => {
  

  return (
    <div className="about">
      <div className="container">
        <h2>About Us</h2>
        
        <div className="about-content">
          <div className="about-text">
            <p>
              Founded in 2010, christopher and alexis corp has grown from a small family business into one of the most trusted construction companies in the area. Our commitment to quality, integrity, and client satisfaction has been the cornerstone of our success.
            </p>
            <p>
              We believe that every construction project, regardless of size, deserves the highest level of attention and craftsmanship. Our team of experienced professionals brings expertise across all construction disciplines, ensuring that your project is completed to the highest standards.
            </p>
            <p>
              At christopher and alexis corp, we combine traditional building techniques with innovative technologies to deliver exceptional results. We're committed to sustainable building practices and use environmentally friendly materials whenever possible.
            </p>
            <p>
              Our mission is simple: to transform your vision into reality while providing a seamless, stress-free experience from concept to completion.
            </p>
          </div>
          
          <div className="about-image">
            <img src="https://imgur.com/34dBPt3.jpg" alt="CHRISTOPHER AND ALEXIS team" />
          </div>
        </div>
        

      </div>
    </div>
  );
};

export default About;