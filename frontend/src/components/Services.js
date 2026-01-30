import React from 'react';
import { useTheme } from '../context/ThemeContext';
import translations from '../translations';

const Services = () => {
  const { language } = useTheme();
  const t = translations[language].services;

  // Colored emojis for each service
  const emojis = ['🤖', '📊', '📈', '🧠', '💼', '🚀'];

  return (
    <section id="services" className="services">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">{t.title}</h2>
          <p className="section-subtitle">{t.subtitle}</p>
        </div>

        <div className="services-grid">
          {t.items.map((service, index) => (
            <div key={index} className="service-card">
              <div className="service-card-inner">
                {/* Front of card */}
                <div className="service-card-front">
                  <span className="service-emoji">{emojis[index]}</span>
                  <h3 className="service-title">{service.title}</h3>
                  <p className="service-description">{service.description}</p>
                </div>

                {/* Back of card */}
                <div className="service-card-back">
                  <div>
                    <h4 className="service-back-title">{t.conceptsLabel}</h4>
                    <div className="service-back-list">
                      {service.concepts.map((concept, i) => (
                        <span key={i} className="service-back-tag">{concept}</span>
                      ))}
                    </div>
                  </div>
                  <div>
                    <h4 className="service-back-title">{t.toolsLabel}</h4>
                    <div className="service-back-list">
                      {service.tools.map((tool, i) => (
                        <span key={i} className="service-back-tag">{tool}</span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
