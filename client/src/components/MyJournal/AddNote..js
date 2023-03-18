import { useState } from "react";
import "../../styles/Journal.css"
const AddNote = ({handleAddNote})=>{
  const[noteText,setNoteText]= useState('');
  const handleChange = (e) => {
setNoteText(e.target.value);
  }
  const handleClickSave =()=>{
handleAddNote(noteText)
  }
return(
<div className='note new'>
  <textarea
  rows="8"
   cols="10"
    placeholder="Type here and tell us how you feel....."
    value={noteText}
    onChange={handleChange}
    ></textarea>
    <div className="note-footer">
      <small>200 remaining</small>
      <button className="save" onClick={handleClickSave}>Save</button>
    </div>
</div>
)
}
export default AddNote