import React from 'react';
import { useTheme } from '../context/ThemeContext';
import translations from '../translations';
import { FiGithub, FiLinkedin, FiTwitter } from 'react-icons/fi';

const Footer = () => {
  const { language } = useTheme();
  const t = translations[language].footer;
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: FiGithub, url: 'https://github.com', label: 'GitHub' },
    { icon: FiLinkedin, url: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: FiTwitter, url: 'https://twitter.com', label: 'Twitter' }
  ];

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            {/* Replace with your local logo: /assets/logo.png */}
            <div className="footer-logo">
              <img src="/assets/logo.png" alt="Logo" />
            </div>
            <p className="footer-tagline">Data Scientist</p>
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
          <p>&copy; {currentYear} John Doe. {t.rights}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
