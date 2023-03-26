import React, { useEffect, useState } from 'react';
import JournalList from './JournalList';
import SearchJournal from './Search';
import JournalHeader from './JournalHeader';
import axios from 'axios';
import "../../styles/Journal.css";

const MyJournal = (props) => {
  const [journals, setJournals] = useState([]);
  const [error, setError] = useState("")
  const [searchText, setSearchText] = useState('');

  // Everytime page is visited
  useEffect(() => {
    if (props.user) {
      Promise.all([
        axios.get(`/journal/${props.user}`),
      ]).then((data) => {
        setJournals(data[0].data);
      });
    }
  }, [props.user]);
  
  const AddJournal = (text) => {
    axios.post("/journal/add", { user_id: props.user, text })
      .then((data) => {
        const newJournal = data.data;
        newJournal.name = journals[0].name;
        setJournals((prev) => [newJournal, ...prev]);
        setError('');
      })
    .catch(({response: data}) => setError(data.data))
  };

  const DeleteJournal = (id) => {
    axios.post("/journal/delete", id)
      .then(() => {
        const newJournals = journals.filter((journal) => journal.id !== id);
        setJournals(newJournals);
      });
  };
  
  return (
    <>
      <div className={"dark-mode"}>
        <div className='container'>
          <JournalHeader />
          <SearchJournal
            handleSearchJournal={setSearchText}
          />
          <JournalList
            journals={journals.filter((journal) =>
              journal.text.toLowerCase().includes(searchText))}
            handleAddJournal={AddJournal}
            handleDeleteJournal={DeleteJournal}
            error={error} />
        </div>
      </div>
    </>
  );
};

export default MyJournal;
