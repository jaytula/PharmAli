import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from "react-router-dom";
import CommentList from '../CommentList'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import TimeAgo from 'react-timeago';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "../../styles/BlogPost.css"

function BlogPost({ allBlogs, user, userInfo, websocket }) {
  // Set initial state of the content displayed for this component
  const navigate = useNavigate();
  const location = useLocation();
  const [blogContent, setBlogContent] = useState({});
  const blogId = location.pathname.split('/')[2]

  // Get blog content from allBlogs
  useEffect(() => {
    const updatedBlog = allBlogs.find(blog => blog.id === blogId);
    if (updatedBlog) {
      setBlogContent(prev => {
        return { ...updatedBlog, name: prev.name }
      })
    }
    if (!updatedBlog && allBlogs.length !== 0) {
      navigate('/*')
    }
  }, [allBlogs, blogId, navigate]);

  // Add toaster notifications
  const addNotification = (name) => toast(`Comment Added by ${name}`);
  const deleteNotification = () => toast('Your comment has been deleted');

  return (
    <div className='blogPost'>
      <ToastContainer autoClose={3000} />
      <ArrowBackIcon size='large' onClick={() => navigate('/blogs')} />
      <div className="blogPostHolder">
        <img
          className="blogPostImage"
          src={`${blogContent.image_url}`}
          alt=""
        />
        <h1 className="blogPostTitle">
          {blogContent.title}
        </h1>
        <div className="blogPostInfo">
          <span>
            Author:
            <b className="blogPostName">
              {blogContent.name}
            </b>
          </span>
          <span><TimeAgo date={blogContent.created_at} /></span>
        </div>
        <p className="blogPostText">
          {blogContent.content}
        </p>
        <CommentList
          key={blogId}
          blog_id={blogId}
          user={user}
          userInfo={userInfo}
          websocket={websocket}
          addNotification={addNotification}
          deleteNotification={deleteNotification} />
      </div>
    </div>
  )
}

export default BlogPost