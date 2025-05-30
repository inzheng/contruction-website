import React from 'react';
import './Services.css';

const Services = () => {
  const services = [
    {
      id: 1,
      title: 'Residential Construction',
      description: 'Complete home building and renovation services tailored to your vision and budget.',
      features: ['Custom Homes', 'Renovations', 'Additions', 'Remodeling']
    },
    {
      id: 2,
      title: 'Commercial Construction',
      description: 'Professional commercial building services for businesses of all sizes.',
      features: ['Office Buildings', 'Retail Spaces', 'Warehouses', 'Restaurants']
    },
    {
      id: 3,
      title: 'Kitchen & Bath',
      description: 'Transform your kitchen and bathroom with our expert design and installation services.',
      features: ['Kitchen Remodeling', 'Bathroom Renovation', 'Custom Cabinets', 'Fixture Installation']
    },
    {
      id: 4,
      title: 'Concrete & Masonry',
      description: 'Durable concrete and masonry work for foundations, driveways, and structures.',
      features: ['Foundations', 'Driveways', 'Patios', 'Retaining Walls']
    },
    {
      id: 5,
      title: 'Interior Finishing',
      description: 'Quality interior finishing services to complete your space perfectly.',
      features: ['Drywall', 'Painting', 'Flooring', 'Trim Work']
    },
    {
      id: 6,
      title: 'Project Management',
      description: 'Professional project management ensuring your construction project stays on time and budget.',
      features: ['Planning', 'Coordination', 'Quality Control', 'Timeline Management']
    }
  ];

  return (
    <div className="services">
      <div className="container">
        <h2>Our Services</h2>
        <p className="services-intro">
          We offer comprehensive construction services to meet all your building needs. 
          From concept to completion, we're here to make your vision a reality.
        </p>
        
        <div className="services-grid">
          {services.map(service => (
            <div key={service.id} className="service-card">
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <ul className="features-list">
                {service.features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="cta-section">
          <h3>Ready to Start Your Project?</h3>
          <p>Contact us today for a free consultation and estimate.</p>
          <a href="#contact" className="btn btn-primary">Get Free Quote</a>
        </div>
      </div>
    </div>
  );
};

export default Services;