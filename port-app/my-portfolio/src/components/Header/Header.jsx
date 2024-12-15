import React from 'react';
import styles from './Header.module.css';

const Header = ({ darkMode, toggleTheme }) => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>Jacob Crummey</div>
      <nav className={styles.nav}>
        <a href="#about">About</a>
        <a href="#projects">Projects</a>
        <a href="#contact">Contact</a>
        <button onClick={toggleTheme} className={styles.toggleBtn}>
          {darkMode ? '☀️' : '🌙'}
        </button>
      </nav>
    </header>
  );
};

export default Header;
