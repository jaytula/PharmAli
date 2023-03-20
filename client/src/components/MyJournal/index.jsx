import React, { useEffect, useState } from 'react';
import JournalList from './JournalList';
import { nanoid } from 'nanoid';
import profileImage from '../../assets/images/medicine.jpeg';
import SearchJournal from './Search';
import JournalHeader from './Header';
import axios from 'axios';

import "../../styles/Journal.css";


const MyJournal = (props) => {
  const [journals, setJournals] = useState([
    // {
    //   user: {
    //     firstName: 'Bob',
    //     lastName: 'Jacob',
    //     image: profileImage
    //   },

    //   text: "some text here! 1",
    //   date: "06/02/1997"
    // },
    // {
    //   user: {
    //     firstName: 'Amaal',
    //     lastName: 'Ali',
    //     image: profileImage
    //   },

    //   text: "some text here! 2",
    //   date: "06/02/1997"
    // },
    // {
    //   user: {
    //     firstName: 'Irha',
    //     lastName: 'Ali',
    //     image: profileImage
    //   },

    //   text: "some text here! 3",
    //   date: "06/02/1997"
    // },
    // {
    //   user: {
    //     firstName: 'Maryan',
    //     lastName: 'Ali',
    //     image: profileImage
    //   },

    //   text: "some text here! 4",
    //   date: "06/02/1997"
    // },
  ]);

  const [searchText, setSearchText] = useState('');
  // const[darkMode,setDarkMode]=useState(false);
  console.log(props);
  useEffect(() => {
    Promise.all([
      axios.get(`/journal/${props.user_id}`),
    ]).then((data) => {
      console.log(data[0].data);
      const user = {
        firstName: 'Maryan',
        lastName: 'Ali',
        image: profileImage
      };
      console.log(data[0].data)
      const myJournals = data[0].data.journal.map((loop) => ({ ...loop, user }));

      setJournals(myJournals);
      console.log("-----------------------------------------------------");
      console.log(myJournals)
      // setUser(data[0].data.message);
      // setDrugList(data[1].data);
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
    axios.post("/journal/add", {user_id: props.user_id, text})
   .then(()=> {
    const date = new Date();
    const newJournal = {
      text: text,
      date: date.toLocaleDateString(),
    };
    const newJournals = [...journals, newJournal];
    setJournals(newJournals);
   })
  };
  const DeleteJournal = (id) => {
    axios.post("/journal/delete", id)
    .then(()=>{
      const newJournals = journals.filter((journal) => journal.id !== id);
      setJournals(newJournals);
    })
   
  };
  return (
    <div className={`${props.darkMode && 'dark-mode'}`}>
      <div className='container'>
        <JournalHeader handleToggleDarkMode={props.setDarkMode} />
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

  );
};

export default MyJournal;
