import React, { useState } from 'react'
import Button from '../Button';
import Error from '../Error';

const Search = (props) => {
  const [searchInput, setSearchInput] = useState("");
  const [error, setError] = useState("");

  const validate = () => {
    if (searchInput === "") {
      setError("Search input cannot be blank");
      return;
    }
    setError("");
    props.onSearchSubmit(searchInput);
    setSearchInput("");
  }

  return (
    <div>
      {error.length > 0 &&
        (< Error message={error} />)}
      <main className="searxh__card search__card--create">
        <section className="searxh__card-left">
          <form autoComplete="off" onSubmit={event => event.preventDefault()}>
            <input
              className="search__create-input text--semi-bold"
              name="name"
              type="text"
              placeholder="Enter Drug Name"
              value={searchInput}
              onChange={(event) => { setSearchInput(event.target.value); }}
              data-testid="search-input"
            />
          </form>
        </section>
        <section className="search__card-right">
          <section className="searxh__actions">
            <Button onClick={() => validate()}>Search</Button>
          </section>
        </section>
      </main>
    </div>
  )
}

export default Search
