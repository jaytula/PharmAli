import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import '../../styles/Comments.css'
import { useState, useEffect } from 'react';
import axios from 'axios';
import Comment from '../Comment';
import IconButton from '@mui/material/IconButton';
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
import InputAdornment from '@mui/material/InputAdornment';
import CommentIcon from '@mui/icons-material/Comment';
import DeleteIcon from '@mui/icons-material/Delete';


function Comments(props) {
  const [comments, setComments] = useState([]);
  const [open, setOpen] = useState(false);
  const [add, setAdd]=useState('');

  const handleClick = () => {
    setOpen(!open)
  }

  const addComment = () => {
      console.log('abc')
      const params = {user_id : props.user_id, comment : add, blog_id: props.blog_id }
      // console.log(params);
      // console.log(props);
      Promise.all([
        axios.post(`/comments`, params)
      ])
      .then((res) => {
      console.log('------------------', res)
      setComments((prev) => [...prev, add])
      }).catch((error) =>
      console.log(error))
  }

  const deleteComment = (id) => {
    axios.post("/comments/delete", id)
    .then(() => {
      const newComment= comments.filter((comment) => comments.id !== id);
      console.log(newComment);
      setComments(newComment);
    })
  }

  useEffect(() => {
    Promise.all([
      axios.get(`/comments?blogid=${props.blog_id}`),
    ]).then((data) => {
      setComments(data[0].data.rows)
    })
  }, []);
  
 
  return (
    <div className='comments'>
      <span className='commentsTitle'><h1>Comments</h1></span>
      <div className='commentsContainer'>
        
      {comments.map((comment) => (
        <>
          <Comment
            key={comment.id}
            comment={comment}
            setComments={() => props.setComment(comment)} 
            />
          <IconButton onClick={() => deleteComment(comment.id)}>
              <DeleteIcon/>
          </IconButton>
          </>
        ))}
          
      </div>
      <span className='commentsSubtitle'><h3>Leave a comment:</h3>
      <IconButton aria-label="comment" onClick={handleClick}>
          <CommentIcon />
      </IconButton>
      </span>
    
      {open && <Box className='commentBox'
        component="form"
        noValidate
        autoComplete="off"
        >  
        <TextField id="filled-basic" label="Filled" variant="filled" fullWidth 
        {...props}
        value={add} 
        onChange={(event) =>setAdd(event.target.value)}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton edge="end" color="primary" size="large" onClick={addComment}>
                <KeyboardReturnIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
        />
      </Box>}
    </div>
  )
}

export default Comments;