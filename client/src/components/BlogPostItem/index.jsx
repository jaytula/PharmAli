import React from 'react'
import "../../styles/BlogPostItem.css";
import TimeAgo from 'timeago-react';
import EditIcon from '@mui/icons-material/Edit';
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';

function BlogPostItem(props) {
  return (
    <div className="blog">
      <img
        className="blogImage"
        src={`${props.blog.image_url}`}
        alt={`${props.blog.image_url}`}
      />
      <div className="blogInfo">
        <div className="blogCategories">
          <span className="blogCategory">
            Category: {props.blog.category}
          </span>
        </div>
        <span className="blogTitle" onClick={props.setBlog}>
          {props.blog.title}
        </span>
        <hr />
        <span className="blogDate"><TimeAgo datetime={props.blog.created_at} /></span>
      </div>
      <p className="blogDescription">
        {props.blog.content}
      </p>
      {props.user == props.blog.user_id && (
        <>
          <IconButton onClick={props.editPost}>
            <EditIcon />
          </IconButton>
          <IconButton onClick={props.deletePost}>
            <DeleteIcon />
          </IconButton>
        </>
      )}
    </div>
  )
}

export default BlogPostItem