import { MdDeleteForever } from 'react-icons/md';
import Profile from './Profile';


const JournalListItem = ({ user, id, text, date, handleDeleteJournal }) => {
  return (
    <div className='journal'>
      <Profile user={user} />
      <span className='textSpan'>{text}</span>
      <div className='journal-footer'>
        <small className='journalDate'>{date}</small>
        <MdDeleteForever
          onClick={() => handleDeleteJournal(id)}
          className='delete-icon'
          size='2.7em' />
      </div>
    </div>
  );
};
export default JournalListItem;