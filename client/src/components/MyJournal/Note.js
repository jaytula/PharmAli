import { MdDeleteForever } from 'react-icons/md';
import Profile from './Profile';
const Note = ({user, text, date}) => {
 
  return (
    <div className='note'>
      {user &&
      <Profile user={user} />
      }
      <span className='textSpan'>{text}</span>
      <div className='note-footer'>
        <small>{date}</small>
        <MdDeleteForever className='delete-icon' size='1.3em' />
      </div>
    </div>
  );
};
export default Note;