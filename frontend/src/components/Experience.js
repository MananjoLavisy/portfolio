import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import translations from '../translations';
import { FiCalendar, FiExternalLink, FiPlus, FiMinus } from 'react-icons/fi';

const Experience = () => {
  const { language } = useTheme();
  const t = translations[language].experience;
  const [isExpanded, setIsExpanded] = useState(false);

  const visibleItems = isExpanded ? t.items : t.items.slice(0, 3);
  const hasMore = t.items.length > 3;

  return (
    <section id="experience" className="experience">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">{t.title}</h2>
          <p className="section-subtitle">{t.subtitle}</p>
        </div>

        <div className="experience-list">
          {visibleItems.map((item, index) => (
            <div key={index} className="experience-card">
              <div className="experience-card-content">
                <div className="experience-card-header">
                  <span className="experience-card-date">
                    <FiCalendar />
                    {item.period}
                  </span>
                </div>
                <h3 className="experience-card-title">{item.title}</h3>
                <a
                  href={item.companyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="experience-card-company"
                >
                  {item.company}
                  <FiExternalLink />
                </a>
                <p className="experience-card-description">{item.description}</p>
                {item.skills && (
                  <div className="experience-card-skills">
                    {item.skills.map((skill, i) => (
                      <span key={i} className="experience-skill-tag">{skill}</span>
                    ))}
                  </div>
                )}
              </div>
              <div className="experience-card-logo">
                <img src={item.logo} alt={item.company} />
              </div>
            </div>
          ))}
        </div>

        {hasMore && (
          <div className="expand-button-container">
            <button
              className="expand-button"
              onClick={() => setIsExpanded(!isExpanded)}
            >
              {isExpanded ? <FiMinus /> : <FiPlus />}
              <span>{isExpanded ? t.showLess : t.showMore}</span>
            </button>
          </div>
        )}
      </div>
    </section>
  );
};

export default Experience;
