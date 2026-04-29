import React, { useEffect, useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import translations from '../translations';
import { FiDownload, FiMail, FiGithub, FiLinkedin } from 'react-icons/fi';

const Hero = () => {
  const { language } = useTheme();
  const t = translations[language].hero;
  const [typedRole, setTypedRole] = useState('');

  useEffect(() => {
    let index = 0;
    setTypedRole('');

    const interval = window.setInterval(() => {
      index += 1;
      setTypedRole(t.role.slice(0, index));

      if (index >= t.role.length) {
        window.clearInterval(interval);
      }
    }, 75);

    return () => window.clearInterval(interval);
  }, [t.role]);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    link.href = process.env.PUBLIC_URL + '/assets/cv.pdf';
    link.download = 'CV_Mananjo_Lavisy_Randriantsalama.pdf';
    link.click();
  };

  return (
    <section id="home" className="hero">
      <div className="hero-background">
        <div className="hero-gradient"></div>
        <div className="hero-dots"></div>
      </div>

      <div className="hero-inner container">
        <div className="hero-text">
          <p className="hero-greeting">{t.greeting}</p>
          <h1 className="hero-name">{t.name}</h1>
          <p className="hero-title" aria-label={t.role}>
            <span>{typedRole}</span>
            <span className="hero-caret" aria-hidden="true"></span>
          </p>

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

          <div className="hero-social">
            <a href="https://github.com/MananjoLavisy" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="GitHub">
              <FiGithub />
            </a>
            <a href="https://www.linkedin.com/in/mananjo-randriantsalama-9a7aa0207/" target="_blank" rel="noopener noreferrer" className="social-link" aria-label="LinkedIn">
              <FiLinkedin />
            </a>
          </div>
        </div>

        <div className="hero-photo">
          <img src={process.env.PUBLIC_URL + '/assets/photo.jpg'} alt="Profile" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
