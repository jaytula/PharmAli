import React, { useState, useEffect } from 'react'
import Articles from '../Articles';
import '../../styles/Search.css'
import axios from 'axios';
import { useNavigate, useParams } from "react-router-dom";
import Navbar from '../Navbar';

const Search = (props) => {
  const navigate = useNavigate();
  const [searchInput, setSearchInput] = useState("");
  const [drugList, setDrugList] = useState([])

  const validate = (drug) => {
    props.onSearchSubmit(drug);
    setSearchInput("");
  }

  useEffect(() => {
    Promise.all([
      axios.get(`/drugs/${searchInput}`)
    ]).then((data) => {
      setDrugList(data[0].data);
    })
  }, [searchInput]);

  const tryNavigate = () => {
    navigate('/');
  }
  return (
    <>
      <Navbar />
      <section className='section-search'>
        <div className='articles'>
          <Articles />
        </div>
        <div className='search'>
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
            </section>
          </main>
          {drugList.map((drug) => (
            <div onClick={() => validate(drug)}>
              {drug.name}
            </div>
          ))}
          <button onClick={tryNavigate}>
            Click Me
          </button>
        </div>
      </section>
    </>
  )
}

export default Search
