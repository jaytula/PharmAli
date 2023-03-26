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
    if (searchInput) {
      Promise.all([
        axios.get(`/drugs/${searchInput}`)
      ]).then((data) => {
        setDrugList(data[0].data);
      })
    }
  }, [searchInput]);

  return (
    <div className='searchPage'>
      <div className='searchTitle'>
        <h1> Search Drug Name</h1>
      </div>
      <div className='searchdiv'>
        <div className='search-outer'>
          <div className='wrap'>
            <div className='search'>
              <form className='form-search' autoComplete="off" onSubmit={event => event.preventDefault()}>
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
            </div>
          </div>
          <div className='drug-item'>
            {drugList.map((drug) => (
              <div 
              key={drug.id}
              className="name-drug"
              onClick={() => navigate(`/drugs/${drug.name}`)}
              >
                {drug.name}
              </div>
            ))}
          </div>
        </div>
        <div className='articles'>
          <Articles isBlog={false} />
        </div>
      </div>
    </div>
  )
}

export default Search
