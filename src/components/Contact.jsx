import { useState } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  });

  const [notification, setNotification] = useState({ show: false, message: '', isError: false });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // Send email using EmailJS
      await emailjs.send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: formData.name,
          from_email: formData.email,
          phone: formData.phone,
          service: formData.service,
          message: formData.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      );

      // Show success notification
      setNotification({
        show: true,
        message: 'Thank you! We\'ll be in touch soon.',
        isError: false
      });

      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: ''
      });
    } catch (error) {
      console.error('Email send failed:', error);
      setNotification({
        show: true,
        message: 'Something went wrong. Please email us directly at mach1autostyling@gmail.com',
        isError: true
      });
    } finally {
      setIsSubmitting(false);
      
      // Hide notification after 5 seconds
      setTimeout(() => {
        setNotification({ show: false, message: '', isError: false });
      }, 5000);
    }
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
                <div>mach1autostyling@gmail.com</div>
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
                disabled={isSubmitting}
              />
              <input
                type="email"
                name="email"
                placeholder="EMAIL"
                value={formData.email}
                onChange={handleChange}
                required
                disabled={isSubmitting}
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
                disabled={isSubmitting}
              />
              <select
                name="service"
                value={formData.service}
                onChange={handleChange}
                required
                disabled={isSubmitting}
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
              disabled={isSubmitting}
            ></textarea>

            <button type="submit" className="submit-btn" disabled={isSubmitting}>
              {isSubmitting ? 'SENDING...' : 'SUBMIT'}
            </button>
          </form>
        </div>
      </div>

      {notification.show && (
        <div className={`notification ${notification.isError ? 'error' : ''}`}>
          {notification.message}
        </div>
      )}
    </section>
  );
};

export default Contact;
