import React, { useEffect, useState } from 'react';
import JournalList from './JournalList';
import { nanoid } from 'nanoid';
import profileImage from '../../assets/images/medicine.jpeg';
import SearchJournal from './Search';
import JournalHeader from './Header';
import { Container } from '@mui/system';

import "../../styles/Journal.css";
import AddJournal from './AddJournal';

const MyJournal = (props) => {
  const [journals, setJournals] = useState([
    {
      user: {
        firstName: 'Bob',
        lastName: 'Jacob',
        image: profileImage
      },
      id: nanoid(),
      text: "some text here! 1",
      date: "06/02/1997"
    },
    {
      user: {
        firstName: 'Amaal',
        lastName: 'Ali',
        image: profileImage
      },
      id: nanoid(),
      text: "some text here! 2",
      date: "06/02/1997"
    },
    {
      user: {
        firstName: 'Irha',
        lastName: 'Ali',
        image: profileImage
      },
      id: nanoid(),
      text: "some text here! 3",
      date: "06/02/1997"
    },
    {
      user: {
        firstName: 'Maryan',
        lastName: 'Ali',
        image: profileImage
      },
      id: nanoid(),
      text: "some text here! 4",
      date: "06/02/1997"
    },
  ]);

  const[searchText,setSearchText]=useState('');
  // const[darkMode,setDarkMode]=useState(false);

  useEffect(()=>{
const savedJournals = JSON.parse(
  localStorage.getItem('react-journal-app-data')
);
if(savedJournals){
  setJournals(savedJournals)
}
  },[])
useEffect(()=>{
  localStorage.setItem('react-journal-app-data', JSON.stringify(journals) )
},[journals])

  const AddJournal = (text) => {
    const date = new Date();
    const newJournal = {
      text: text,
      date: date.toLocaleDateString(),
    };
    const newJournals = [...journals, newJournal];
    setJournals(newJournals);
  };
  const DeleteJournal = (id) => {
    const newJournals = journals.filter((journal) => journal.id !== id);
    setJournals(newJournals);
  };
  return (
    <div className={`${props.darkMode && 'dark-mode'}`}>
    <div className='container'>
      <JournalHeader handleToggleDarkMode={props.setDarkMode}/>
      <SearchJournal
      handleSearchJournal={setSearchText}
      />
      <JournalList
        journals={journals.filter((journal)=>
          journal.text.toLowerCase().includes(searchText))}
        handleAddJournal={AddJournal}
        handleDeleteJournal={DeleteJournal} />
    </div>
    </div>

  );
};

export default MyJournal;
