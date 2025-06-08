import React, { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  // Replace this with your actual Web3Forms access key
  const WEB3FORMS_ACCESS_KEY = "601624d4-b51f-4608-a681-4ce17d6a4c21";

  const handleChange = (e) => {
    const { name, value } = e.target; 
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    // Create FormData object for Web3Forms
    const formDataToSend = new FormData();
    formDataToSend.append('access_key', WEB3FORMS_ACCESS_KEY);
    formDataToSend.append('name', formData.name);
    formDataToSend.append('email', formData.email);
    formDataToSend.append('phone', formData.phone);
    formDataToSend.append('subject', formData.subject);
    formDataToSend.append('message', formData.message);
    
    // Add honeypot field for spam protection
    formDataToSend.append('botcheck', '');
    
    // Add custom fields for better email formatting
    formDataToSend.append('from_name', formData.name);
    formDataToSend.append('to_email', 'christopherandalexiscorp@gmail.com');

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formDataToSend
      });

      const data = await response.json();

      if (data.success) {
        setSubmitStatus('success');
        // Reset form
        setFormData({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: ''
        });
      } else {
        console.error('Form submission error:', data);
        setSubmitStatus('error');
      }
    } catch (error) {
      console.error('Network error:', error);
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact">
      <div className="container">
        <h2>Contact Us</h2>
        
        <div className="contact-grid">
          <div className="contact-info">
            <div className="info-card">
              <h3>Get In Touch</h3>
              <p>
                We're here to answer any questions you may have about our construction services.
                Reach out to us and we'll respond as soon as possible.
              </p>
              
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
          
          <div className="contact-form-container">
            <form className="contact-form" onSubmit={handleSubmit}>
              <h3>Send Us a Message</h3>
              
              {/* Status Messages */}
              {submitStatus === 'success' && (
                <div className="alert alert-success">
                  <strong>Message sent successfully!</strong> We'll get back to you soon.
                </div>
              )}
              
              {submitStatus === 'error' && (
                <div className="alert alert-error">
                  <strong>Failed to send message.</strong> Please try again or call us directly.
                </div>
              )}
              
              {/* Honeypot field for spam protection - hidden from users */}
              <input
                type="checkbox"
                name="botcheck"
                style={{ display: 'none' }}
                tabIndex="-1"
                autoComplete="off"
              />
              
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="name">Your Name*</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    className="form-control"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">Email Address*</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    className="form-control"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                  />
                </div>
              </div>
              
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="phone">Phone Number</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    className="form-control"
                    value={formData.phone}
                    onChange={handleChange}
                    disabled={isSubmitting}
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="subject">Subject*</label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    className="form-control"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                  />
                </div>
              </div>
              
              <div className="form-group">
                <label htmlFor="message">Message*</label>
                <textarea
                  id="message"
                  name="message"
                  className="form-control"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  disabled={isSubmitting}
                  rows="5"
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="btn btn-primary"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Sending...' : 'Send Message'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;