import React from 'react';
import '../styles/login.css'

const Error = ({ message }) => {
  return (
    <main className="search__card search__card--error">
      <section className="search__error-message">
        <h3 className="text--light">{message}</h3>
      </section>
    </main>
  );
};

export default Error;