import React from 'react'
import TimeAgo from 'react-timeago';
import EditIcon from '@mui/icons-material/Edit';
import IconButton from '@mui/material/IconButton';
import { MdDeleteForever } from 'react-icons/md';
import "../../styles/BlogPostItem.css";

function BlogPostListItem({ blog, setBlog, user, editPost, deletePost }) {
  return (
    <div className="blog">
      <img
        className="blogImage"
        src={`${blog.image_url}`}
        alt={`${blog.image_url}`}
      />
      <div className="blogInfo">
        <div className="blogCategories">
          <span className="blogCategory">
            Category: {blog.category}
          </span>
        </div>
        <span className="blogSubTitle" onClick={setBlog}>
          {blog.title}
        </span>
        <hr />
        <span className="blogDate"><TimeAgo date={blog.created_at} /></span>
      </div>
      <p className="blogDescription">
        {blog.content}
      </p>
      <div className='btn-pink-container'>
        <button className="btn-pink" onClick={setBlog}> Read Blog </button>

        {user === blog.user_id && (
          <div className='edit-icon-container'>
            <IconButton onClick={editPost}>
              <EditIcon className='edit-icon' fontSize='large' />
            </IconButton>
            <MdDeleteForever className='deletee-icon' onClick={deletePost} />
          </div>
        )}
      </div>
    </div>
  )
}

export default BlogPostListItem