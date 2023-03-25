import React from 'react'
import '../../styles/Comment.css'
import TimeAgo from 'timeago-react';

function Comment(props) {
  return (
    <>
      <div className='comment'>
        <span className='commentDesc'>{props.comment.comment}</span>
        <div className="commentDeets">
          <p><TimeAgo datetime={props.comment.created_at} /></p>
          <p>{props.comment.name}</p>
        </div>

      </div>
    </>
  )
}

export default Comment;