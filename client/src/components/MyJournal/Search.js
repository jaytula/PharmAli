import React from "react";
import { MdSearch } from "react-icons/md";
const SearchJournal = (handleSearchJournal) => {
  return(
    <div className="search-journal">
      <MdSearch className='search-journal-icons' size='1.3em'/>
      <input onChange={(e)=>handleSearchJournal(e.target.value)} type="text" placeholder="type to search...."/>
    </div>
  )
};
export default SearchJournal;