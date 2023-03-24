import Journal from './Journal';

import AddJournal from './AddJournal';
const JournalList = ({ journals, handleAddJournal, handleDeleteJournal }) => {
  console.log(journals);
  return (
    <div className="journals-list">
      {journals.map((journal) => (
        <Journal
          key={journal.id}
          user={journal.user}
          id={journal.id}
          text={journal.text}
          date={journal.created_at.split("T")[0]}
          handleDeleteJournal={handleDeleteJournal}
        />
      ))}
      <AddJournal handleAddJournal={handleAddJournal} />

    </div>
  );
};
export default JournalList;