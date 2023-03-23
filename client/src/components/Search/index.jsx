import React, { useState, useEffect } from 'react'
import Articles from '../Articles';
import '../../styles/Search.css'
import axios from 'axios';
import { useNavigate } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

const Search = () => {
  const navigate = useNavigate();
  const [searchInput, setSearchInput] = useState("");
  const [drugList, setDrugList] = useState([])

  useEffect(() => {
    Promise.all([
      axios.get(`/drugs/${searchInput}`)
    ]).then((data) => {
      setDrugList(data[0].data);
    })
  }, [searchInput]);

  return (
    <>
      {/* <section className='section-search'> */}
      <div className='articles'>
        <Articles />
      </div>
      <div className='searchTitle'>
        <h1> Search Drug Name</h1>
      </div>
      <div className='search-outer'>
        <div className='wrap'>
          <div className='search'>
            <form autoComplete="off" onSubmit={event => event.preventDefault()}>
              <FontAwesomeIcon icon={faMagnifyingGlass} className="icon" />
              <input
                className="searchTerm"
                name="name"
                type="text"
                placeholder="Enter Drug Name"
                value={searchInput}
                onChange={(event) => { setSearchInput(event.target.value); }}
                data-testid="search-input"

              />
            </form>
            {/* <SearchIcon fontSize="large" position="relative" top="3px" left="2px" /> */}
          </div>
        </div>
        <div>
          {drugList.map((drug) => (
            <div onClick={() => navigate(`/drugs/${drug.id}`)}>
              {drug.name}
            </div>
          ))}
        </div>
      </div>
      {/* </section> */}
    </>
  )
}

export default Search
