import React from 'react';
import { useTheme } from '../context/ThemeContext';
import translations from '../translations';
import { FiCalendar, FiExternalLink } from 'react-icons/fi';

const Activities = () => {
  const { language } = useTheme();
  const t = translations[language].activities;

  return (
    <section id="activities" className="activities">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">{t.title}</h2>
          <p className="section-subtitle">{t.subtitle}</p>
        </div>

        <div className="experience-list">
          {t.items.map((item, index) => (
            <div key={index} className="experience-card">
              <div className="experience-card-content">
                <div className="experience-card-header">
                  <span className="experience-card-date">
                    <FiCalendar />
                    {item.period}
                  </span>
                </div>
                <h3 className="experience-card-title">{item.title}</h3>
                {item.organizationUrl ? (
                  <a
                    href={item.organizationUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="experience-card-company"
                  >
                    {item.organization}
                    <FiExternalLink />
                  </a>
                ) : (
                  <span className="experience-card-company experience-card-company-missing">{item.organization}</span>
                )}
                <p className="experience-card-description">{item.description}</p>
                {item.skills && (
                  <div className="experience-card-skills">
                    {item.skills.map((skill, skillIndex) => (
                      <span key={skillIndex} className="experience-skill-tag">{skill}</span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Activities;
