import React, { useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import translations from '../translations';
import { FiX, FiChevronLeft, FiChevronRight, FiGithub, FiExternalLink, FiPlus, FiMinus } from 'react-icons/fi';

const Projects = () => {
  const { language } = useTheme();
  const t = translations[language].projects;
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);
  const [touchStartX, setTouchStartX] = useState(null);

  const indexedItems = t.items.map((project, index) => ({ project, index }));
  const visibleItems = isExpanded ? indexedItems : indexedItems.slice(0, 6);
  const hasMore = t.items.length > 6;

  const openModal = (index) => {
    setSelectedProject(index);
    setCurrentImageIndex(0);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedProject(null);
    document.body.style.overflow = 'auto';
  };

  const nextImage = () => {
    const project = t.items[selectedProject];
    setCurrentImageIndex((prev) => (prev + 1) % project.images.length);
  };

  const prevImage = () => {
    const project = t.items[selectedProject];
    setCurrentImageIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
  };

  const handleTouchStart = (event) => {
    setTouchStartX(event.changedTouches[0].clientX);
  };

  const handleTouchEnd = (event) => {
    if (touchStartX === null || selectedProject === null) return;

    const deltaX = event.changedTouches[0].clientX - touchStartX;

    if (Math.abs(deltaX) > 40) {
      if (deltaX < 0) {
        nextImage();
      } else {
        prevImage();
      }
    }

    setTouchStartX(null);
  };

  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">{t.title}</h2>
          <p className="section-subtitle">{t.subtitle}</p>
        </div>

        <div className="projects-grid">
            {visibleItems.map(({ project, index }) => (
              <div
                key={index}
                className="project-card"
                onClick={() => openModal(index)}
              >
              <div className="project-image">
                <img src={process.env.PUBLIC_URL + project.images[0]} alt={project.title} loading="lazy" />
              </div>
              <div className="project-content">
                <span className="project-category">{project.category}</span>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-tagline">{project.tagline}</p>
                {project.technologies && (
                  <div className="project-technologies">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="project-tech-tag">{tech}</span>
                    ))}
                  </div>
                )}
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

      {/* Project Modal */}
      {selectedProject !== null && (
        <div className="project-modal-overlay" onClick={closeModal}>
          <div className="project-modal" onClick={(e) => e.stopPropagation()}>
            <button className="project-modal-close" onClick={closeModal}>
              <FiX />
            </button>

            {(() => {
              const project = t.items[selectedProject];
              const images = project.images && project.images.length > 0 ? project.images : ['/projects/template-no-image.svg'];

              return (
            <div className="project-modal-layout">
              <div
                className="project-carousel"
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
              >
                <img
                  src={process.env.PUBLIC_URL + images[currentImageIndex % images.length]}
                  alt={project.title}
                />

                {images.length > 1 && (
                  <>
                    <button className="carousel-btn prev" onClick={prevImage}>
                      <FiChevronLeft />
                    </button>
                    <button className="carousel-btn next" onClick={nextImage}>
                      <FiChevronRight />
                    </button>

                    <div className="carousel-dots">
                      {images.map((_, i) => (
                        <button
                          key={i}
                          className={`carousel-dot ${i === currentImageIndex ? 'active' : ''}`}
                          onClick={() => setCurrentImageIndex(i)}
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>

              <div className="project-modal-content">
                <span className="project-modal-category">
                  {project.category}
                </span>
                <h3 className="project-modal-title">
                  {project.title}
                </h3>
                <p className="project-modal-tagline">
                  {t.taglineLabel} {project.tagline}
                </p>
                <p className="project-modal-description">
                  {project.description}
                </p>

                {project.metrics && project.metrics.length > 0 && (
                  <div className="project-metrics">
                    {project.metrics.map((metric, i) => (
                      <div key={i} className="project-metric-card">
                        <span className="project-metric-value">{metric.value}</span>
                        <span className="project-metric-label">{metric.label}</span>
                      </div>
                    ))}
                  </div>
                )}

                {project.technologies && (
                  <div className="project-stack-block">
                    <p className="project-stack-label">{t.stackLabel}</p>
                    <div className="project-technologies">
                      {project.technologies.map((tech, i) => (
                        <span key={i} className="project-tech-tag">{tech}</span>
                      ))}
                    </div>
                  </div>
                )}

                <div className="project-modal-links">
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-modal-link"
                    >
                      <FiGithub />
                      {t.viewOnGithub}
                    </a>
                  )}
                  {project.demo && (
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-modal-link project-modal-link-demo"
                    >
                      <FiExternalLink />
                      {t.viewDemo}
                    </a>
                  )}
                </div>
              </div>
            </div>
              );
            })()}
          </div>
        </div>
      )}
    </section>
  );
};

export default Projects;
