import React, { useState, useRef, useCallback } from 'react';
import { useTheme } from '../context/ThemeContext';
import translations from '../translations';
import { FiPlus, FiMinus } from 'react-icons/fi';

const FLIP_DURATION = 800;

const Skills = () => {
  const { language } = useTheme();
  const t = translations[language].skills;
  const [activeCard, setActiveCard] = useState(null);
  const [mobileVisibleCounts, setMobileVisibleCounts] = useState({});
  const isAnimating = useRef(false);

  const getVisibleCount = (index) => mobileVisibleCounts[index] || 3;

  const toggleMobileCount = (index, maxLength) => {
    setMobileVisibleCounts((prev) => {
      const current = prev[index] || 3;
      const next = current >= maxLength ? 3 : current + 3;

      return {
        ...prev,
        [index]: next
      };
    });
  };

  const handleMouseEnter = useCallback((index) => {
    if (activeCard === index) return;
    if (isAnimating.current) return;

    if (activeCard !== null) {
      isAnimating.current = true;
      setActiveCard(null);
      setTimeout(() => {
        setActiveCard(index);
        isAnimating.current = false;
      }, FLIP_DURATION);
    } else {
      setActiveCard(index);
    }
  }, [activeCard]);

  const handleMouseLeave = useCallback(() => {
    if (isAnimating.current) return;
    setActiveCard(null);
  }, []);

  return (
    <section id="skills" className="skills">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">{t.title}</h2>
          <p className="section-subtitle">{t.subtitle}</p>
        </div>

        <div className="skills-grid" onMouseLeave={handleMouseLeave}>
          {t.categories.map((category, index) => (
            <div key={index} className="skill-flip-card">
              {/* Flip version (desktop) */}
              <div
                className={`skill-flip-inner ${activeCard === index ? 'flipped' : ''}`}
                onMouseEnter={() => handleMouseEnter(index)}
              >
                <div className="skill-flip-front">
                  <div className="skill-category-header">
                    <span className="skill-category-emoji">{category.emoji}</span>
                    <h3 className="skill-category-name">{category.name}</h3>
                  </div>
                  <div className="skill-section">
                    <h4 className="skill-section-label">{t.conceptsLabel}</h4>
                    <div className="skill-tags">
                      {category.concepts.map((item, i) => (
                        <span key={i} className="skill-tag skill-tag-concept">{item}</span>
                      ))}
                    </div>
                  </div>
                  <span className="skill-flip-hint">{t.toolsLabel} &rarr;</span>
                </div>

                <div className="skill-flip-back">
                  <div className="skill-category-header">
                    <span className="skill-category-emoji">{category.emoji}</span>
                    <h3 className="skill-category-name">{category.name}</h3>
                  </div>
                  <div className="skill-section">
                    <h4 className="skill-section-label">{t.toolsLabel}</h4>
                    <div className="skill-tags">
                      {category.tools.map((item, i) => (
                        <span key={i} className="skill-tag skill-tag-tool">{item}</span>
                      ))}
                    </div>
                  </div>
                  <span className="skill-flip-hint">&larr; {t.conceptsLabel}</span>
                </div>
              </div>

              {/* Combined version (mobile) */}
              <div className="skill-combined">
                <div className="skill-category-header">
                  <span className="skill-category-emoji">{category.emoji}</span>
                  <h3 className="skill-category-name">{category.name}</h3>
                </div>
                <div className="skill-section">
                  <h4 className="skill-section-label">{t.conceptsLabel}</h4>
                  <div className="skill-tags">
                    {category.concepts.slice(0, getVisibleCount(index)).map((item, i) => (
                      <span key={i} className="skill-tag skill-tag-concept">{item}</span>
                    ))}
                  </div>
                </div>
                <div className="skill-section">
                  <h4 className="skill-section-label">{t.toolsLabel}</h4>
                  <div className="skill-tags">
                    {category.tools.slice(0, getVisibleCount(index)).map((item, i) => (
                      <span key={i} className="skill-tag skill-tag-tool">{item}</span>
                    ))}
                  </div>
                </div>
                {(category.concepts.length > 3 || category.tools.length > 3) && (
                  <button
                    className="skill-mobile-toggle"
                    onClick={() => toggleMobileCount(index, Math.max(category.concepts.length, category.tools.length))}
                  >
                    {getVisibleCount(index) >= Math.max(category.concepts.length, category.tools.length) ? <FiMinus /> : <FiPlus />}
                    <span>
                      {getVisibleCount(index) >= Math.max(category.concepts.length, category.tools.length)
                        ? t.showLess
                        : t.showMore}
                    </span>
                  </button>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;
