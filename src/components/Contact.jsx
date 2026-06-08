import { useState } from 'react';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const [notification, setNotification] = useState({ show: false, message: '' });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Show success notification
    setNotification({
      show: true,
      message: 'Thank you! We\'ll be in touch soon.'
    });

    // Reset form
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: '',
      message: ''
    });

    // Hide notification after 3 seconds
    setTimeout(() => {
      setNotification({ show: false, message: '' });
    }, 3000);
  };

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">GET IN TOUCH</h2>
        </div>

        <div className="contact-wrapper">
          <div className="contact-info">
            <div className="info-block">
              <div className="info-title">VISIT</div>
              <div className="info-content">
                <div>200 Henry Hill St</div>
                <div>Suite 100</div>
                <div>Cary, NC 27511</div>
              </div>
            </div>

            <div className="info-block">
              <div className="info-title">CALL</div>
              <div className="info-content">
                <div>(984) 325-3165</div>
                <div>By Appointment Only</div>
              </div>
            </div>

            <div className="info-block">
              <div className="info-title">EMAIL</div>
              <div className="info-content">
                <div>info@mach1auto.com</div>
                <div>quotes@mach1auto.com</div>
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <input
                type="text"
                name="name"
                placeholder="NAME"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <input
                type="email"
                name="email"
                placeholder="EMAIL"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-row">
              <input
                type="tel"
                name="phone"
                placeholder="PHONE"
                value={formData.phone}
                onChange={handleChange}
                required
              />
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
              >
                <option value="">SELECT SERVICE</option>
                <option value="Full Wrap">Full Wrap</option>
                <option value="Window Tinting">Window Tinting</option>
                <option value="Partial Wrap">Partial Wrap</option>
                <option value="Paint Protection">Paint Protection</option>
                <option value="Consultation">Consultation</option>
              </select>
            </div>

            <textarea
              name="message"
              placeholder="MESSAGE"
              rows="6"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>

            <button type="submit" className="submit-btn">SUBMIT</button>
          </form>
        </div>
      </div>

      {notification.show && (
        <div className="notification">{notification.message}</div>
      )}
    </section>
  );
};

export default Contact;
