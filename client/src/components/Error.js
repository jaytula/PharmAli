import React from 'react';

const Error = (props) => {

  return (
    <main className="search__card search__card--error">
      <section className="search__error-message">
        <h1 className="text--semi-bold">Error</h1>
        <h3 className="text--light">{props.message}</h3>
      </section>
      <img
        className="appointment__error-close"
        src="images/close.png"
        alt="Close"
        onClick={props.onClose}
      />
    </main>
  );
};

export default Error;