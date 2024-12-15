import React from 'react';
import styles from './Contact.module.css';

const Contact = () => {
  return (
    <section id="contact" className={styles.contact}>
      <h2>Contact me</h2>
      <form onSubmit={(e) => e.preventDefault()}>
        <label>
          Title
          <input type="text" placeholder="What you're writing about?" />
        </label>
        <label>
          Message
          <textarea placeholder="Full message comes here..."></textarea>
        </label>
        <button type="submit">Submit</button>
      </form>
    </section>
  );
};

export default Contact;
