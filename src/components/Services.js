import React from 'react';
import './Services.css';

const Services = () => {
  const services = [
    {
      id: 1,
      title: 'Residential & Commercial Renovations',
      description: 'We offer a full range of professional construction and remodeling services for both residential and commercial properties.',
      icon: '🏠🏢'
    },
    {
      id: 2,
      title: 'Demolition & Framing',
      description: 'Expert demolition services and professional framing using both wood and metal materials.',
      icon: '🔨'
    },
    {
      id: 3,
      title: 'Kitchen Installations',
      description: 'Complete kitchen renovations including cabinets, countertops, and all fixtures.',
      icon: '🍳'
    },
    {
      id: 4,
      title: 'Plastering, Skim Coat & Painting',
      description: 'Professional wall finishing with high-quality materials and expert application.',
      icon: '🖌️'
    },
    {
      id: 5,
      title: 'Flooring & Tiling',
      description: 'Installation of ceramic, marble, granite, porcelain, and mosaic tiles for floors and walls.',
      icon: '🧱'
    },
    {
      id: 6,
      title: 'Bathroom Renovations',
      description: 'Complete bathroom remodeling services from fixtures to tiling and plumbing.',
      icon: '🚿'
    },
    {
      id: 7,
      title: 'Window & Frame Installation',
      description: 'Professional installation of windows and frames for improved aesthetics and energy efficiency.',
      icon: '🪟'
    },
    {
      id: 8,
      title: 'Sheetrock & Partitions',
      description: 'Expert installation of sheetrock and creation of room partitions for space optimization.',
      icon: '🧰'
    },
    {
      id: 9,
      title: 'Concrete Sidewalks & Brickwork',
      description: 'High-quality concrete and brickwork services for exterior improvements.',
      icon: '🧱'
    },
    {
      id: 10,
      title: 'Roofing Solutions',
      description: 'Complete roofing services including repairs, replacement, and new installations.',
      icon: '🏠'
    }
  ];

  return (
    <div className="services">
      <div className="container">
        <h2>Our Services</h2>
        <p className="services-intro">
          We offer a comprehensive range of construction and renovation services for both residential and commercial projects.
          Our team of skilled professionals ensures quality workmanship on every project.
        </p>
        
        <div className="services-grid">
          {services.map(service => (
            <div className="service-card" key={service.id}>
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <a href="#contact" className="service-link">Request Service</a>
            </div>
          ))}
        </div>
        
        <div className="services-cta">
          <h3>Ready to start your construction project?</h3>
          <p>Contact us today for a free consultation and estimate.</p>
          <a href="#contact" className="btn btn-primary">Get in Touch</a>
        </div>
      </div>
    </div>
  );
};

export default Services;