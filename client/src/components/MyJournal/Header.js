import React from "react";

const JournalHeader = ({handleToggleDarkMode}) => {
  return(
<div className="journal-header">
  <h1> Journal Entries</h1>
  <button
   onClick={()=>
    handleToggleDarkMode(
      (previousDarkMode)=> 
    !previousDarkMode)
  }className="save"
    >Toggle Mode</button>
</div>
    )
  };
  export default JournalHeader;