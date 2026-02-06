import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import translations from '../translations';
import { FiAward, FiCalendar, FiExternalLink, FiPlus, FiMinus } from 'react-icons/fi';

const Education = () => {
  const { language } = useTheme();
  const t = translations[language].education;
  const [isFormExpanded, setIsFormExpanded] = useState(false);
  const [isCertExpanded, setIsCertExpanded] = useState(false);

  const visibleFormations = isFormExpanded ? t.formations : t.formations.slice(0, 3);
  const hasMoreFormations = t.formations.length > 3;

  const visibleCerts = isCertExpanded ? t.certifications : t.certifications.slice(0, 3);
  const hasMoreCerts = t.certifications.length > 3;

  return (
    <section id="education" className="education">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">{t.title}</h2>
          <p className="section-subtitle">{t.subtitle}</p>
        </div>

        <div className="education-content">
          {/* Formations */}
          <div className="education-column">
            <h3 className="education-column-title">
              <span className="education-icon">🎓</span>
              {t.formationsTitle}
            </h3>
            <div className="education-list">
              {visibleFormations.map((item, index) => (
                <div key={index} className="education-card">
                  <div className="education-card-header">
                    <h4 className="education-card-title">{item.title}</h4>
                    <span className="education-card-date">
                      <FiCalendar />
                      {item.year}
                    </span>
                  </div>
                  {item.institutionUrl ? (
                    <a
                      href={item.institutionUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="education-card-institution"
                    >
                      {item.institution}
                      <FiExternalLink />
                    </a>
                  ) : (
                    <span className="education-card-institution-text">
                      {item.institution}
                    </span>
                  )}
                  {item.description && (
                    <p className="education-card-description">{item.description}</p>
                  )}
                </div>
              ))}
            </div>

            {hasMoreFormations && (
              <div className="expand-button-container expand-button-left">
                <button
                  className="expand-button"
                  onClick={() => setIsFormExpanded(!isFormExpanded)}
                >
                  {isFormExpanded ? <FiMinus /> : <FiPlus />}
                  <span>{isFormExpanded ? t.showLess : t.showMore}</span>
                </button>
              </div>
            )}
          </div>

          {/* Certifications */}
          <div className="education-column">
            <h3 className="education-column-title">
              <span className="education-icon">🏆</span>
              {t.certificationsTitle}
            </h3>
            <div className="certifications-grid">
              {visibleCerts.map((cert, index) => (
                <div key={index} className="certification-card">
                  <div className="certification-badge">
                    <FiAward />
                  </div>
                  <div className="certification-info">
                    <h4 className="certification-title">{cert.title}</h4>
                    <p className="certification-issuer">{cert.issuer}</p>
                    <span className="certification-year">{cert.year}</span>
                  </div>
                  {cert.url && (
                    <a
                      href={process.env.PUBLIC_URL + cert.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="certification-link-icon"
                    >
                      <FiExternalLink />
                    </a>
                  )}
                </div>
              ))}
            </div>

            {hasMoreCerts && (
              <div className="expand-button-container expand-button-left">
                <button
                  className="expand-button"
                  onClick={() => setIsCertExpanded(!isCertExpanded)}
                >
                  {isCertExpanded ? <FiMinus /> : <FiPlus />}
                  <span>{isCertExpanded ? t.showLess : t.showMore}</span>
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
