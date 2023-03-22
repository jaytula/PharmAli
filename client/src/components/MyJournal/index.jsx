import React, { useEffect, useState } from 'react';
import JournalList from './JournalList';
import profileImage from '../../assets/images/medicine.png';
import SearchJournal from './Search';
import JournalHeader from './JournalHeader';
import axios from 'axios';
import "../../styles/Journal.css";
import Navbar2 from '../Home/Navbar2';
import useApplicationData from '../../hooks/useApplicationData';
import { useNavigate, useParams } from "react-router-dom";


const MyJournal = (props) => {
  const navigate = useNavigate();
  const { menu, drugContent, user, blogContent, darkMode, setMenu, setCookie, removeCookie, onSearchSubmit, setBlogContent, setDarkMode } = useApplicationData();
console.log(darkMode)
  const [journals, setJournals] = useState([]);
  const [searchText, setSearchText] = useState('');
  // const[darkMode,setDarkMode]=useState(false);
  console.log(props);
  const userId = props.user.id


  useEffect(() => {
    if (props.user) {
      Promise.all([
        axios.get(`/journal/${props.user}`),
      ]).then((data) => {
        const user = {
          firstName: 'Maryan',
          lastName: 'Ali',
          image: profileImage
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
    axios.post("/journal/add", {user_id: props.user.id, text})
   .then((data)=> {
    console.log("help",data.data)
    const date = data.data.created_at;
    const newJournal = {
      text: data.data.text,
      created_at: date,
      id:data.data.id,
      user_id:data.data.user_id,
      user:{
        name: data.data.name,
        image: profileImage
      }
    };
    console.log(newJournal)
    // const newJournals = [...prev, newJournal];
    setJournals((prev)=>[...prev, newJournal]);
   })
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
