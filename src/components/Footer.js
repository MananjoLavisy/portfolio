import React from 'react';
import { useTheme } from '../context/ThemeContext';
import translations from '../translations';
import { FiGithub, FiLinkedin } from 'react-icons/fi';

const Footer = () => {
  const { language } = useTheme();
  const t = translations[language].footer;
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: FiGithub, url: 'https://github.com/MananjoLavisy', label: 'GitHub' },
    { icon: FiLinkedin, url: 'https://www.linkedin.com/in/mananjo-randriantsalama-9a7aa0207/', label: 'LinkedIn' }
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <div className="footer-name">Mananjo Lavisy Randriantsalama</div>
            <p className="footer-tagline">AI & Data Scientist</p>
          </div>

          <div className="footer-social">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.label}
                className="social-link"
              >
                <link.icon />
              </a>
            ))}
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Mananjo Lavisy Randriantsalama. {t.rights}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
