import React from 'react'
import '../../styles/Comment.css'

function Comment(props) {
  return (
    <div className='comment'>
      <span className='commentDesc'>{props.comment.comment}</span> 
    </div>
  )
}

export default Comment;