import React from 'react';
import styles from './Projects.module.css';

const Projects = () => {
  return (
    <section id="projects" className={styles.projects}>
      <h2>Projects</h2>
      <div className={styles.projectList}>
        <div className={styles.projectCard}>
          <div className={styles.details}>
            <h3>TestProject1</h3>
            <p>Descriptor for the project</p>
            <div className={styles.tags}>
              <span>Tags</span><span>To</span><span>Be</span><span>Used</span>
            </div>
            <a href="https://example.com" target="_blank" rel="noopener noreferrer" className={styles.link}>Check it ↗</a>
          </div>
          <div className={styles.preview}>
            {/* Placeholder images right now, not updated with my real projects yet. */}
            <div className={styles.imagePlaceholder}></div>
          </div>
        </div>
        
        
        <div className={styles.projectCard}>
          <div className={styles.details}>
            <h3>TestProject2</h3>
            <p>Descriptor for the project</p>
            <div className={styles.tags}>
              <span>Tags</span><span>To</span><span>Be</span><span>Used</span>
            </div>
            <a href="https://example.com" target="_blank" rel="noopener noreferrer" className={styles.link}>Check it ↗</a>
          </div>
          <div className={styles.preview}>
            <div className={styles.imagePlaceholder}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
