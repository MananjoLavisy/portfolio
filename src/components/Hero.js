import React, { useEffect, useState } from 'react';
import { useTheme } from '../context/ThemeContext';
import translations from '../translations';
import { FiDownload, FiMail, FiGithub, FiLinkedin } from 'react-icons/fi';

const Hero = () => {
  const { language } = useTheme();
  const t = translations[language].hero;
  const [typedRole, setTypedRole] = useState('');

  useEffect(() => {
    const roles = t.roles;
    let roleIndex = 0;
    let letterIndex = 0;
    let isDeleting = false;
    let timeoutId;

    setTypedRole('');

    const typeNext = () => {
      const currentRole = roles[roleIndex];

      if (isDeleting) {
        letterIndex -= 1;
        setTypedRole(currentRole.slice(0, letterIndex));

        if (letterIndex === 0) {
          isDeleting = false;
          roleIndex = (roleIndex + 1) % roles.length;
          timeoutId = window.setTimeout(typeNext, 250);
          return;
        }

        timeoutId = window.setTimeout(typeNext, 45);
        return;
      }

      letterIndex += 1;
      setTypedRole(currentRole.slice(0, letterIndex));

      if (letterIndex === currentRole.length) {
        isDeleting = true;
        timeoutId = window.setTimeout(typeNext, 3000);
        return;
      }

      timeoutId = window.setTimeout(typeNext, 75);
    };

    timeoutId = window.setTimeout(typeNext, 75);

    return () => window.clearTimeout(timeoutId);
  }, [t.roles]);

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDownloadCV = () => {
    const link = document.createElement('a');
    const fileName = language === 'fr' ? 'cv-fr.pdf' : 'cv-en.pdf';
    link.href = process.env.PUBLIC_URL + '/assets/' + fileName;
    link.download = `CV_Mananjo_Lavisy_Randriantsalama_${language.toUpperCase()}.pdf`;
    link.click();

    if (typeof window.gtag === 'function') {
      window.gtag('event', 'download_cv', {
        cv_language: language,
        file_name: fileName,
      });
    }
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
          <p className="hero-main-role">{t.mainRole}</p>
          <p className="hero-title" aria-label={t.roles.join(', ')}>
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
