import React from 'react';
import { useTheme } from '../context/ThemeContext';
import translations from '../translations';

const About = () => {
  const { language } = useTheme();
  const t = translations[language].about;

  return (
    <section id="about" className="about">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">{t.title}</h2>
          <p className="section-subtitle">{t.subtitle}</p>
        </div>

        <div className="about-content">
          <div className="about-image">
            <img src={process.env.PUBLIC_URL + '/assets/portrait.jpg'} alt="Profile" />
            <div className="about-image-decoration"></div>
          </div>

          <div className="about-text">
            <p className="about-description">{t.description}</p>
            <ul className="about-services-list">
              {t.services.map((service, index) => (
                <li key={index} className="about-service-item">{service}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
