import { useEffect, useState } from 'react'
import "../../styles/BlogPost.css"
import CommentList from '../CommentList'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import axios from 'axios'
import { useNavigate, useLocation } from "react-router-dom";
import TimeAgo from 'timeago-react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function BlogPost(props) {
  const navigate = useNavigate();
  const location = useLocation();
  const [blogContent, setBlogContent] = useState({});
  const blogId = location.pathname.split('/')[2]

  useEffect(() => {
    Promise.all([
      axios.get(`/blogs/${blogId}`),
    ])
      .then((data) => {
        setBlogContent(data[0].data)
      })
      .catch(() => navigate('/*'))
  }, []);

  useEffect(() => {
      const updatedBlog = props.allBlogs.find(blog => blog.id == blogId);
      if (updatedBlog) {
        setBlogContent(prev => {
          return { ...updatedBlog, name: prev.name }
        })
      } 
      if (!updatedBlog && props.allBlogs.length !== 0) {
        navigate('/*')
      }
  }, [props.allBlogs]);

  const addNotification = (name) => toast(`Comment Added by ${name}`);

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
          <span><TimeAgo datetime={blogContent.created_at} /></span>
        </div>
        <p className="blogPostText">
          {blogContent.content}
        </p>
        <CommentList
          key={blogId}
          blog_id={blogId}
          user={props.user}
          userInfo={props.userInfo}
          websocket={props.websocket}
          addNotification={addNotification} />
      </div>
    </div>
  )
}

export default BlogPost