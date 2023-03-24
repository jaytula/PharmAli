import { MdDeleteForever } from 'react-icons/md';
import Profile from './Profile';


const Journal = ({user,id, text, date, handleDeleteJournal}) => {
 
  return (
    <div className='journal'>
      {user &&
      <Profile user={user} />
      }
      <span className='textSpan'>{text}</span>
      <div className='journal-footer'>
        <small className='journalDate'>{date}</small>
        <MdDeleteForever
         onClick={()=> handleDeleteJournal(id)}
         className='delete-icon'
          size='2.7em' />
      </div>
    </div>
  );
};
export default Journal;