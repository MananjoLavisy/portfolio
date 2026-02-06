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

  const projectThumbnails = [
    'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
    'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop',
    'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&h=400&fit=crop',
    'https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3?w=600&h=400&fit=crop',
    'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&h=400&fit=crop',
    'https://images.unsplash.com/photo-1518186285589-2f7649de83e0?w=600&h=400&fit=crop'
  ];

  const visibleItems = isExpanded ? t.items : t.items.slice(0, 6);
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

  return (
    <section id="projects" className="projects">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">{t.title}</h2>
          <p className="section-subtitle">{t.subtitle}</p>
        </div>

        <div className="projects-grid">
          {visibleItems.map((project, index) => (
            <div
              key={index}
              className="project-card"
              onClick={() => openModal(index)}
            >
              <div className="project-image">
                <img src={projectThumbnails[index]} alt={project.title} loading="lazy" />
              </div>
              <div className="project-content">
                <span className="project-category">{project.category}</span>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
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

            <div className="project-carousel">
              <img
                src={projectThumbnails[selectedProject]}
                alt={t.items[selectedProject].title}
              />

              {t.items[selectedProject].images.length > 1 && (
                <>
                  <button className="carousel-btn prev" onClick={prevImage}>
                    <FiChevronLeft />
                  </button>
                  <button className="carousel-btn next" onClick={nextImage}>
                    <FiChevronRight />
                  </button>

                  <div className="carousel-dots">
                    {t.items[selectedProject].images.map((_, i) => (
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
                {t.items[selectedProject].category}
              </span>
              <h3 className="project-modal-title">
                {t.items[selectedProject].title}
              </h3>
              <p className="project-modal-description">
                {t.items[selectedProject].description}
              </p>

              {t.items[selectedProject].technologies && (
                <div className="project-technologies" style={{ marginBottom: 'var(--space-xl)' }}>
                  {t.items[selectedProject].technologies.map((tech, i) => (
                    <span key={i} className="project-tech-tag">{tech}</span>
                  ))}
                </div>
              )}

              <div className="project-modal-links">
                {t.items[selectedProject].github && (
                  <a
                    href={t.items[selectedProject].github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-modal-link"
                  >
                    <FiGithub />
                    {t.viewOnGithub}
                  </a>
                )}
                {t.items[selectedProject].demo && (
                  <a
                    href={t.items[selectedProject].demo}
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
        </div>
      )}
    </section>
  );
};

export default Projects;
