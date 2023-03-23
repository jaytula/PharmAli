import { useState } from "react";
import "../../styles/Journal.css";
const AddJournal = ({ handleAddJournal }) => {
  const charMaximumLimit = 500;
  const [journalText, setJournalText] = useState('');
  const handleChange = (e) => {
    if(charMaximumLimit - e.target.value.length >= 0)
    setJournalText(e.target.value);
  };
  const handleClickSave = () => {
    if (journalText.trim().length > 0) {
      handleAddJournal(journalText);
      setJournalText('');
    }

  };
  return (
    <div className='journal new'>
      <textarea
        rows="8"
        cols="10"
        placeholder="Type here and tell us how you feel....."
        value={journalText}
        onChange={handleChange}
      ></textarea>
      <div className="journal-footer">
        <small>{charMaximumLimit - journalText.length} remaining </small>
        <button 
        className="save" 
        onClick={handleClickSave}
        >Save</button>
      </div>
    </div>
  );
};
export default AddJournal;