import React, { useState, useEffect } from 'react';
import axios from '../../axiosInstance';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import CommentListItem from '../CommentListItem';
import IconButton from '@mui/material/IconButton';
import KeyboardReturnIcon from '@mui/icons-material/KeyboardReturn';
import InputAdornment from '@mui/material/InputAdornment';
import CommentIcon from '@mui/icons-material/Comment';
import Error from "../Error";
import '../../styles/Comments.css'

function CommentList({websocket, addNotification, blog_id, ...props}) {
  // Set up all states for comment component
  const [comments, setComments] = useState([]);
  const [open, setOpen] = useState(false);
  const [error, setError] = useState("")
  const [newComment, setNewComment] = useState('');

  // To open or close comment component
  const handleClick = () => {
    setOpen(!open)
  }

  // To add a comment
  const addComment = () => {
    const params = { user_id: props.user, comment: newComment, blog_id, name: props.userInfo.name }
    Promise.all([
      axios.post(`/comments/add`, params)
    ])
      .then(() => {
        setNewComment('');
      })
      .catch(({ response: data }) => {
        setError(data.data)
      })
  }

  // To delete a comment
  const deleteComment = (id) => {
    Promise.all([
      axios.post("/comments/delete", id)
    ])
      .then(() => {
        props.deleteNotification();
      })
  }

  // For realtime updates on comments
  useEffect(() => {
    websocket.onmessage = (event) => {
      const commentInfo = JSON.parse(event.data)
      if (commentInfo.type === 'COMMENT') {
        if (commentInfo.add) {
          setComments(prev => {
            if (prev.find(comment => comment.id === commentInfo.comment.id)) {
              return prev
            } else {
              addNotification(commentInfo.comment.name)
              return [...prev, commentInfo.comment]
            }
          })
        } else {
          setComments(prev => prev.filter(comment => comment.id !== commentInfo.comment))
        }
      }
    }
  }, [websocket, addNotification]);

  // To load all comments when the blog is visited
  useEffect(() => {
    Promise.all([
      axios.get(`/comments/${blog_id}`),
    ]).then((data) => {
      setComments(data[0].data);
    })
  }, [blog_id]);

  return (
    <div className='comments'>
      <span className='commentsTitle'><h1>Comments</h1></span>
      {props.user &&
        (<>
          {error.length > 0 && <Error message={error} />}
          <span className='commentsSubtitle'><h3>Leave a comment:</h3>
            <IconButton aria-label="comment" onClick={handleClick}>
              <CommentIcon className='commentIcon' />
            </IconButton>
          </span>

          {open && <Box

            component="form"
            noValidate
            autoComplete="off"
          >
            <TextField sx={{ input: { color: 'white', backgroundColor: "#595955", borderColor: "white" } }} className='commentinputText' id="filled-basic" label="Leave a comment" variant="filled" fullWidth
              {...props}
              value={newComment}

              onChange={(event) => setNewComment(event.target.value)}
              InputProps={{
                endAdornment: (
                  <InputAdornment position="end" >
                    <IconButton className='commentinputText' edge="end" color="white" size="large" onClick={addComment}>
                      <KeyboardReturnIcon className='commentinputText' />
                    </IconButton>
                  </InputAdornment>
                ),
              }}
            />
          </Box>}
        </>)}
      <div className='commentsContainer'>

        {comments.map((comment) => (
          <>
            <CommentListItem className='commentinputText'
              key={comment.id}
              comment={comment}
              deleteComment={deleteComment}
              user={props.user}
            />
          </>
        ))}

      </div>
    </div>
  )
}

export default CommentList;