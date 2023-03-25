import React from 'react';
import '../styles/login.css'

const Error = (props) => {

  return (
    <main className="search__card search__card--error">
      <section className="search__error-message">
        <h1 className="text--semi-bold"></h1>
        <h3 className="text--light">{props.message}</h3>
      </section>
    </main>
  );
};

export default Error;