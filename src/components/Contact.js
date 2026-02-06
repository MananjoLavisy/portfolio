import React from 'react';
import { useTheme } from '../context/ThemeContext';
import translations from '../translations';
import { FiMail, FiMapPin, FiClock, FiGithub, FiLinkedin } from 'react-icons/fi';

const Contact = () => {
  const { language } = useTheme();
  const t = translations[language].contact;

  const contactInfo = [
    { icon: FiMapPin, label: t.info.location, value: t.location },
    { icon: FiMail, label: t.info.email, value: t.email },
    { icon: FiClock, label: t.info.availability, value: t.availability }
  ];

  return (
    <section id="contact" className="contact">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">{t.title}</h2>
          <p className="section-subtitle">{t.subtitle}</p>
        </div>

        <div className="contact-split">
          <div className="contact-left">
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

            <div className="contact-social">
              <a href="https://github.com/MananjoLavisy" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="GitHub">
                <FiGithub />
              </a>
              <a href="https://www.linkedin.com/in/mananjo-randriantsalama-9a7aa0207/" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn">
                <FiLinkedin />
              </a>
            </div>
          </div>

          <div className="contact-right">
            <p className="contact-description">{t.description}</p>
            <a
              href={`mailto:${t.email}`}
              className="btn btn-primary contact-cta"
            >
              <FiMail />
              {t.cta}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
