import React, { useEffect, useState } from 'react';
import JournalList from './JournalList';
import SearchJournal from './Search';
import JournalHeader from './JournalHeader';
import axios from 'axios';
import "../../styles/Journal.css";

const MyJournal = (props) => {
  const [journals, setJournals] = useState([]);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    if (props.user) {
      Promise.all([
        axios.get(`/journal/${props.user}`),
      ]).then((data) => {
        const user = {
          name: data[0].data.journal[0].name
        };
        const myJournals = data[0].data.journal.map((loop) => ({ ...loop, user }));
        setJournals(myJournals);
      });
    }
  }, [props.user]);

  useEffect(() => {
    localStorage.setItem('react-journal-app-data', JSON.stringify(journals));
  }, [journals]);

  const AddJournal = (text) => {
    axios.post("/journal/add", { user_id: props.user, text })
      .then((data) => {
        const newJournal = {
          id: data.data.id,
          text: text,
          created_at: data.data.created_at,
          user: {
            name: journals[0].name
          }
        };
        const newJournals = [...journals, newJournal];
        setJournals(newJournals);
      });
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
      <div className={`${props.darkMode && 'dark-mode'}`}>
        <div className='container'>
          <JournalHeader />
          <SearchJournal
            handleSearchJournal={setSearchText}
          />
          <JournalList
            journals={journals.filter((journal) =>
              journal.text.toLowerCase().includes(searchText))}
            handleAddJournal={AddJournal}
            handleDeleteJournal={DeleteJournal} />
        </div>
      </div>
    </>
  );
};

export default MyJournal;
