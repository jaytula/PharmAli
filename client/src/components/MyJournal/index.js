import React, { useState } from 'react';
import JournalList from './JournalList';
import { nanoid } from 'nanoid';
import profileImage from '../../assets/images/medicine.jpeg';

import "../../styles/Journal.css";
import AddJournal from './AddJournal';
const MyJournal = () => {
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
    <div className='container'>
      <JournalList
       journals={journals}
        handleAddJournal={AddJournal}
        handleDeleteJournal={DeleteJournal} />
    </div>
  );
};

export default MyJournal;
