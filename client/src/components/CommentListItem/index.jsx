import React from 'react'
import TimeAgo from 'react-timeago';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import '../../styles/Comment.css'


function CommentListItem({ comment, deleteComment, user }) {
  return (
    <>
      <div className='comment'>
        <span className='commentDesc'>{comment.comment}</span>
        <div className="commentDeets">
          <p><TimeAgo date={comment.created_at} /></p>
          <div>
            <p>{comment.name}</p>
            <div className='commentIcon'>
              {user === comment.user_id && (<IconButton className='commentIcon' onClick={() => deleteComment(comment.id)}>
                <DeleteIcon className='commentIcon' />
              </IconButton>)}
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default CommentListItem;