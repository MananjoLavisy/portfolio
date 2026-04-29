import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import translations from '../translations';
import { FiAward, FiCalendar, FiExternalLink, FiPlus, FiMinus } from 'react-icons/fi';

const Education = () => {
  const { language } = useTheme();
  const t = translations[language].education;
  const [isFormExpanded, setIsFormExpanded] = useState(false);
  const [isCertExpanded, setIsCertExpanded] = useState(false);
  const [expandedFormationIndex, setExpandedFormationIndex] = useState(null);

  const visibleFormations = isFormExpanded ? t.formations : t.formations.slice(0, 3);
  const hasMoreFormations = t.formations.length > 3;

  const visibleCerts = isCertExpanded ? t.certifications : t.certifications.slice(0, 3);
  const hasMoreCerts = t.certifications.length > 3;
  const getCertificationUrl = (url) => (url && /^https?:\/\//.test(url) ? url : process.env.PUBLIC_URL + url);

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
                {visibleFormations.map((item, index) => {
                  const isExpanded = expandedFormationIndex === index;

                  return <div key={index} className="education-card education-card-accordion">
                    <div className="education-card-top">
                      <div className="education-card-logo-slot">
                        {item.logoPending ? (
                          <span className="education-card-logo-placeholder">Logo</span>
                        ) : (
                          <img src={process.env.PUBLIC_URL + item.logo} alt={item.logoAlt || item.university} className="education-card-logo" />
                        )}
                      </div>
                      <div className="education-card-main">
                        <div className="education-card-header">
                          <div className="education-card-heading-block">
                            <h4 className="education-card-title">{item.title}</h4>
                            <div className="education-card-institution-row">
                              {item.institutionUrl ? (
                                <a
                                  href={item.institutionUrl}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="education-card-institution"
                                >
                                  <span>{item.university || item.faculty}</span>
                                  {item.university && item.faculty && <span>{item.faculty}</span>}
                                  <FiExternalLink />
                                </a>
                              ) : (
                                <span className="education-card-institution-text">
                                  <span>{item.university || item.faculty}</span>
                                  {item.university && item.faculty && <span>{item.faculty}</span>}
                                </span>
                              )}
                            </div>
                          </div>
                          <div className="education-card-side-actions">
                            <span className="education-card-date">
                              <FiCalendar />
                              {item.year}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className={`education-card-details ${isExpanded ? 'expanded' : ''}`}>
                      {item.badge && (
                        <div className="education-card-accreditation-detail">
                          <div className="education-card-accreditation-badge-row">
                            <span className="education-card-accreditation-badge">
                              {item.badge.emoji} {item.badge.label}
                            </span>
                            {item.accreditor && (
                              <div className="education-card-accreditor-slot education-card-accreditor-slot-detail">
                                {item.accreditorLogoPending ? (
                                  <span className="education-card-logo-placeholder">Logo</span>
                                ) : (
                                  <img src={process.env.PUBLIC_URL + item.accreditorLogo} alt={item.accreditor} className="education-card-accreditor-logo" />
                                )}
                              </div>
                            )}
                          </div>
                        </div>
                      )}
                      {item.highlightNote && (
                        <p className="education-card-note education-card-note-highlight">{item.highlightNote}</p>
                      )}
                      {item.statusNote && (
                        <p className="education-card-note education-card-note-status">{item.statusNote}</p>
                      )}
                      {item.specialization && (
                        <p className="education-card-description"><strong>{t.specializationLabel}:</strong> {item.specialization}</p>
                      )}
                      {item.duration && (
                        <p className="education-card-description"><strong>{t.durationLabel}:</strong> {item.duration}</p>
                      )}
                      {item.languageOfStudy && (
                        <p className="education-card-description"><strong>{t.languageLabel}:</strong> {item.languageOfStudy}</p>
                      )}
                      {item.mainCourses && item.mainCourses.length > 0 && (
                        <div className="education-main-courses">
                          <p className="education-main-courses-title">{t.mainCoursesLabel}</p>
                          <p className="education-main-courses-inline">{item.mainCourses.join(', ')}</p>
                        </div>
                      )}
                    </div>
                    <button className="education-card-toggle" onClick={() => setExpandedFormationIndex(isExpanded ? null : index)}>
                      {isExpanded ? <FiMinus /> : <FiPlus />}
                      <span>{isExpanded ? t.showLess : t.showDetails}</span>
                    </button>
                  </div>;
                })}
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
                 cert.url ? (
                    <a
                      key={index}
                      href={getCertificationUrl(cert.url)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="certification-card certification-card-link"
                   >
                     <div className="certification-badge">
                       <FiAward />
                     </div>
                     <div className="certification-info">
                       <h4 className="certification-title">{cert.title}</h4>
                       <p className="certification-issuer">{cert.issuer}</p>
                       <span className="certification-year">{cert.year}</span>
                     </div>
                     <span className="certification-link-icon">
                       <FiExternalLink />
                     </span>
                   </a>
                 ) : (
                   <div key={index} className="certification-card">
                     <div className="certification-badge">
                       <FiAward />
                     </div>
                     <div className="certification-info">
                       <h4 className="certification-title">{cert.title}</h4>
                       <p className="certification-issuer">{cert.issuer}</p>
                       <span className="certification-year">{cert.year}</span>
                     </div>
                   </div>
                 )
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
