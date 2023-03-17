import React, {useState} from 'react'
import Button from '../Button';
import Error from '../Error';
const Search = (props) => {
  const [searchInput, setSearchInput] = useState("");
  const [error, setError] = useState("");
  const requests = () =>{
  
  }
  function validate() {

    if (searchInput === "") {
      setError("Search input cannot be blank");
      return;
    }
    setError("");
    props.onSubmit(searchInput);
  }
  return (
    <div>
      <main className="searxh__card search__card--create">
      <section className="searxh__card-left">
        <form autoComplete="off" onSubmit={event => event.preventDefault()}>
          <input
            className="search__create-input text--semi-bold"
            name="name"
            type="text"
            placeholder="Enter Student Name"
            value={searchInput}
            onChange={(event) => { setSearchInput(event.target.value); }}
            // data-testid="student-name-input"
          />
        </form>
        {/* <section className="search__validation">{error}</section> */}
        {/* <InterviewerList
          value={interviewer}
          interviewers={props.interviewers}
          onChange={setInterviewer}
        /> */}
      </section>
      <section className="search__card-right">
        <section className="searxh__actions">
          {/* <Button danger onClick={Cancel}>Cancel</Button> */}
          <Button onClick={validate}>Save</Button>
        </section>
      </section>
    </main>
    </div>
  )
}

export default Search
