import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import translations from '../translations';
import { FiMail, FiMapPin, FiClock, FiSend } from 'react-icons/fi';

const Contact = () => {
  const { language } = useTheme();
  const t = translations[language].contact;
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('sending');

    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setStatus(''), 3000);
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  const contactInfo = [
    { icon: FiMail, label: t.info.email, value: 'hello@example.com' },
    { icon: FiMapPin, label: t.info.location, value: 'Paris, France' },
    { icon: FiClock, label: t.info.availability, value: 'Mon - Fri, 9AM - 6PM' }
  ];

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">{t.title}</h2>
          <p className="section-subtitle">{t.subtitle}</p>
        </div>

        <div className="contact-content">
          <div className="contact-info">
            <p className="contact-description">{t.description}</p>

            <div className="contact-details">
              {contactInfo.map((item, index) => (
                <div key={index} className="contact-item">
                  <div className="contact-item-icon">
                    <item.icon />
                  </div>
                  <div className="contact-item-text">
                    <span className="contact-item-label">{item.label}</span>
                    <span className="contact-item-value">{item.value}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <input
                type="text"
                name="name"
                placeholder={t.form.name}
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <input
                type="email"
                name="email"
                placeholder={t.form.email}
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <textarea
                name="message"
                placeholder={t.form.message}
                rows="5"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary" disabled={status === 'sending'}>
              {status === 'sending' ? '...' : t.form.send}
              <FiSend />
            </button>
            {status === 'success' && <p className="form-success">Message sent successfully!</p>}
            {status === 'error' && <p className="form-error">Error sending message. Please try again.</p>}
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
