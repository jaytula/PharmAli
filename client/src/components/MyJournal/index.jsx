import React, { useEffect, useState } from 'react';
import JournalList from './JournalList';
import profileImage from '../../assets/images/medicine.jpeg';
import SearchJournal from './Search';
import JournalHeader from './JournalHeader';
import axios from 'axios';
import "../../styles/Journal.css";
import Navbar2 from '../Home/Navbar2';
import useApplicationData from '../../hooks/useApplicationData';
import { useNavigate, useParams } from "react-router-dom";


const MyJournal = () => {
  const navigate = useNavigate();

  const { menu, drugContent, user, blogContent, darkMode, setMenu, setCookie, removeCookie, onSearchSubmit, setBlogContent, setDarkMode } = useApplicationData();

  const [journals, setJournals] = useState([]);
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    Promise.all([
      axios.get(`/journal/${user}`),
    ]).then((data) => {
      const user = {
        firstName: 'Maryan',
        lastName: 'Ali',
        image: profileImage
      };
      const myJournals = data[0].data.journal.map((loop) => ({ ...loop, user }));

      setJournals(myJournals);
    });
  }, []);
  useEffect(() => {
    const savedJournals = JSON.parse(
      localStorage.getItem('react-journal-app-data')
    );
    if (savedJournals) {
      setJournals(savedJournals);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('react-journal-app-data', JSON.stringify(journals));
  }, [journals]);

  const AddJournal = (text) => {
    axios.post("/journal/add", { user_id: user, text })
      .then(() => {
        const date = new Date();
        const newJournal = {
          text: text,
          date: date.toLocaleDateString(),
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
      <Navbar2 />
      <div className={`${darkMode && 'dark-mode'}`}>
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
