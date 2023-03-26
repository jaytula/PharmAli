import JournalListItem from './JournalListItem';

import AddJournal from './AddJournal';
const JournalList = ({ journals, handleAddJournal, handleDeleteJournal }) => {
  return (
    <div className="journals-list">
      {journals.map((journal) => (
        <JournalListItem
          key={journal.id}
          user={journal.name}
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