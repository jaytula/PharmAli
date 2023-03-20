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

function Comments(props) {
  const [comments, setComments] = useState([]);
  
  useEffect(() => {
    Promise.all([
      axios.get(`/comments?blogid=${props.blog_id}`),
    ]).then((data) => {
      console.log(props.blog_id);
      console.log(data[0].data.rows);
      setComments(data[0].data.rows)
    })
  }, []);
  
  return (
    <div className='comments'>
      <span className='commentsTitle'><h1>Comments</h1></span>
      <div className='commentsContainer'>
      {comments.map((comment) => (
          <Comment
            key={comment.id}
            comment={comment}
            setComments={() => props.setComment(comment)} />
          ))}
      </div>
      <span className='commentsSubtitle'><h3>Leave a comment:</h3></span>
      <Box
        component="form"
        noValidate
        autoComplete="off"
      >
        <TextField id="filled-basic" label="Filled" variant="filled" fullWidth
        {...props}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton edge="end" color="primary">
                <KeyboardReturnIcon />
              </IconButton>
            </InputAdornment>
          ),
        }}
        />
      </Box>
    </div>
  )
}

export default Comments;