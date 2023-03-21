import React from 'react'
import EditIcon from '@mui/icons-material/Edit';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import TimeAgo from 'timeago-react';
import EditBlog from '../EditBlog';
import { useState } from 'react';

function MyBlogsItem(props) {
  
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
           Category: {props.blog.name}
        </span>
      </div>
      <span className="blogTitle" onClick={props.setBlog}>
        {props.blog.title}
      </span>
      <hr />
      <span className="blogDate"><TimeAgo datetime={props.blog.created_at}/></span>
    </div>
    <p className="blogDescription">
      {props.blog.content}
    </p>
      <IconButton onClick={() => props.setEdit(props.blog.id)}>
        <EditIcon/>
      </IconButton>
      <IconButton onClick={() => props.deletePost(props.blog.id)}>
         <DeleteIcon/>
      </IconButton>

    </div>
  )
}

export default MyBlogsItem;