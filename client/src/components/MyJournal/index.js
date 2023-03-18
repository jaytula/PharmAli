import React, { useState } from 'react'
import NotesList from './NotesList'
import {nanoid} from 'nanoid'
import profileImage from '../../assets/images/medicine.jpeg'

import "../../styles/Journal.css"
const MyJournal = () => {
  const[notes,setNotes]= useState([
    { user:{
      firstName: 'Bob' ,
      lastName: 'Jacob',
      image: profileImage
    } ,
    
    text:"some text here! 1",
    date:"06/02/1997"
  },
  { user:{
    firstName:'Amaal'  ,
    lastName: 'Ali',
    image: profileImage
  } ,
    
    text:"some text here! 2",
    date:"06/02/1997"
  },
  { user:{
    firstName: 'Irha',
    lastName:'Ali' ,
    image: profileImage
  } ,
  
    text:"some text here! 3",
    date:"06/02/1997"
  },
  { user:{
    firstName: 'Maryan' ,
    lastName: 'Ali',
    image: profileImage
  } ,
   
    text:"some text here! 4",
    date:"06/02/1997"
  },
]);
const AddNote =(text)=>{
const date = new Date();
const newNote={
  text: text,
  date:date.toLocaleDateString(),
}
const newNotes = [...notes,newNote];
setNotes(newNotes);
}
  return (
    <div className='container'>
      <NotesList notes={notes} handleAddNote={AddNote}/>
    </div>
  )
}

export default MyJournal
