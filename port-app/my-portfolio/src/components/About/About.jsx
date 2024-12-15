import React from 'react';
import styles from './About.module.css';

const About = () => {
  return (
    <section id="about" className={styles.about}>
      <h2>About me</h2>
      <p><em>Currently studying software development, eager to gain hands-on experience and bring fresh ideas to the tech world.</em></p>
      <div className={styles.content}>
        <div className={styles.text}>
          <h3>Get to know me!</h3>
          <p>
            I’m a software development student passionate about front-end frameworks, responsive design, and efficient back-end solutions
          </p>
          <p>
            While pursuing my studies, I’ve tackled projects that improved my problem-solving skills and expanded my technical toolbox. 
          </p>
          <p>
          I enjoy exploring new libraries, experimenting with design patterns, and collaborating with others to bring digital products to life.
          </p>
          <a className={styles.button} href="#projects">Projects</a>
        </div>
        <div className={styles.toolkit}>
          <h3>My toolkit</h3>
          <div className={styles.tags}>
            <span>JavaScript</span><span>Node.js</span><span>TypeScript</span><span>CSS</span><span>Figma</span>
            <span>React</span><span>Next.js</span><span>Python</span><span>Bash</span><span>SQL</span>
            <span>Vite</span><span>AWS</span><span>C++</span><span>Java</span><span>Git</span>
            <span>SEO</span><span>HTML</span><span>C#</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
