import React from 'react'
import EditIcon from '@mui/icons-material/Edit';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import TimeAgo from 'timeago-react';
import { useNavigate, useParams } from "react-router-dom";

function MyBlogsItem(props) {
  const navigate = useNavigate();

  return (
    <div className="blog">  
    <img
      className="blogImage"
      src={`${props.blog.image_url}`}
      alt="blog-image"
    />
    <div className="blogInfo">
      <div className="blogCategories">
        <span className="blogCategory">
           Category: {props.blog.category}
        </span>
      </div>
      <span className="blogTitle" onClick={() => navigate(`/blogs/${props.blog.id}`)}>
        {props.blog.title}
      </span>
      <hr />
      <span className="blogDate"><TimeAgo datetime={props.blog.created_at}/></span>
    </div>
    <p className="blogDescription">
      {props.blog.content}
    </p>
      <IconButton onClick={() => navigate(`/myblogs/edit/${props.blog.id}`)}>
        <EditIcon/>
      </IconButton>
      <IconButton onClick={() => props.deletePost(props.blog.id)}>
         <DeleteIcon/>
      </IconButton>

    </div>
  )
}

export default MyBlogsItem;