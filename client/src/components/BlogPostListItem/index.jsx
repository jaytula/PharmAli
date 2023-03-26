import React from 'react'
import "../../styles/BlogPostItem.css";
import TimeAgo from 'timeago-react';
import EditIcon from '@mui/icons-material/Edit';
import IconButton from '@mui/material/IconButton';
import { MdDeleteForever } from 'react-icons/md';

function BlogPostListItem(props) {
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
        <span className="blogSubTitle" onClick={props.setBlog}>
          {props.blog.title}
        </span>
        <hr />
        <span className="blogDate"><TimeAgo datetime={props.blog.created_at} /></span>
      </div>
      <p className="blogDescription">
        {props.blog.content}
      </p>
      <div className='btn-pink-container'>
        <button className="btn-pink" onClick={props.setBlog}> Read Blog </button>
      
      {props.user == props.blog.user_id && (
        <div className='edit-icon-container'>
          <IconButton onClick={props.editPost}>
            <EditIcon className='edit-icon' fontSize='large' />
          </IconButton>
            <MdDeleteForever className='deletee-icon' onClick={props.deletePost}/>
        </div>
      )}
      </div>
    </div>
  )
}

export default BlogPostListItem