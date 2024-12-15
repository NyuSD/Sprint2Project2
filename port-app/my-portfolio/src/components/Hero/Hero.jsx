import React from 'react';
import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <h1>Hey, I’m Jacob!</h1>
      <p>A motivated software development student <span>dedicated</span> to learning <span>modern</span> and <span>engaging</span> technologies.</p>
      <a className={styles.cta} href="#about">About me</a>
    </section>
  );
};

export default Hero;
