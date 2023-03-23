import Journal from './Journal';

import AddJournal from './AddJournal';
const JournalList = ({ journals, handleAddJournal, handleDeleteJournal}) => {
  return (
    <div className="journals-list">
      {journals.map((journal) => (
        <Journal
          user={journal.user}
          id={journal.id}
          text={journal.text}
          date={journal.created_at}
          handleDeleteJournal={handleDeleteJournal}
        />
      ))}
      <AddJournal handleAddJournal={handleAddJournal}/>

    </div>
  );
};
export default JournalList;