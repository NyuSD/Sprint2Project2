import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <p>Jacob Crummey</p>
      <p>Software developer who <span>enjoys</span> building <span>fast</span> and <span>accessible</span> products.</p>
      <div className={styles.social}>
        <a href="https://github.com" target="_blank" rel="noopener noreferrer">GitHub</a>
        <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a>
      </div>
      <p>Developed by myself.</p>
    </footer>
  );
};

export default Footer;
