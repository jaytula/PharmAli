import { useEffect, useState } from 'react'
import "../../styles/BlogPost.css"
import CommentList from '../CommentList'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import axios from 'axios'
import { useNavigate, useLocation } from "react-router-dom";
import TimeAgo from 'timeago-react';


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
    } else {
      navigate('/*')
    }
  }, [props.allBlogs]);

  return (
    <div className='blogPost'>
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
        <CommentList blog_id={blogId} user={props.user} userInfo={props.userInfo} websocket={props.websocket} />
      </div>
    </div>
  )
}

export default BlogPost