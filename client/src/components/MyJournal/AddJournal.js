import { useState } from "react";
import "../../styles/Journal.css";
import Error from "../Error";

const AddJournal = ({ handleAddJournal, error }) => {
  // Gather all important helpers and states
  const charMaximumLimit = 500;
  const [journalText, setJournalText] = useState('');

  // Each time user adds or removes text in the journal form
  const handleChange = (e) => {
    if (charMaximumLimit - e.target.value.length >= 0)
      setJournalText(e.target.value);
  };

  const handleClickSave = () => {
    handleAddJournal(journalText);
    setJournalText('');
  };

  return (
    <div className='journal-new'>
      <h2 className="jounal-title">Add a New Journal Entry Here  :</h2>
      {error.length > 0 && <Error message={error} />}
      <textarea className="journal-text"
        rows="8"
        cols="10"
        placeholder="Type here and tell us how you feel....."
        value={journalText}
        onChange={handleChange}
      ></textarea>
      <div className="journal-footer">
        <small className="characterlimit">{charMaximumLimit - journalText.length} remaining </small>
        <button
          className="save"
          onClick={handleClickSave}
        >Save</button>
      </div>
    </div>
  );
};
export default AddJournal;