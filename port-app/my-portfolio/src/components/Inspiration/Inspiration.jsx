import React, { useState } from 'react';
import styles from './Inspiration.module.css';

const Inspiration = () => {
  const [quote, setQuote] = useState('');

  const fetchQuote = async () => {
    const response = await fetch('https://dummyjson.com/quotes/random');
    const data = await response.json();
    setQuote(data.quote);
  };
  

  return (
    <section id="inspiration" className={styles.inspiration}>
      <h2>Need Some Inspiration?</h2>
      <button onClick={fetchQuote}>Get a Random Quote</button>
      {quote && <p>{quote}</p>}
    </section>
  );
};

export default Inspiration;
