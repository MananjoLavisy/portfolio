import React from 'react';
import { useTheme } from '../context/ThemeContext';
import translations from '../translations';
import { FiDownload, FiMail } from 'react-icons/fi';

const Hero = () => {
  const { language } = useTheme();
  const t = translations[language].hero;

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDownloadCV = () => {
    // Download CV from local file: /assets/cv.pdf
    const link = document.createElement('a');
    link.href = '/assets/cv.pdf';
    link.download = 'CV_John_Doe.pdf';
    link.click();
  };

  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <div className="hero-gradient"></div>
        <div className="hero-dots"></div>
      </div>

      <div className="hero-content">
        <p className="hero-greeting">{t.greeting}</p>
        <h1 className="hero-name">{t.name}</h1>
        <h2 className="hero-title">{t.title}</h2>
        <p className="hero-subtitle">{t.subtitle}</p>

        <div className="hero-buttons">
          <button className="btn btn-primary" onClick={handleDownloadCV}>
            <FiDownload />
            {t.downloadCV}
          </button>
          <button className="btn btn-secondary" onClick={scrollToContact}>
            <FiMail />
            {t.contact}
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;
