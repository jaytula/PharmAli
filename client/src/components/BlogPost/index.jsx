import { useEffect, useState } from 'react'
import "../../styles/BlogPost.css"
import Comments from '../Comments'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import axios from 'axios'
import { useNavigate, useLocation } from "react-router-dom";
import useApplicationData from '../../hooks/useApplicationData'

function BlogPost() {
  const { user } = useApplicationData()
  const navigate = useNavigate();
  const location = useLocation();
  
  const [blogContent, setBlogContent] = useState();

  useEffect(() => {
    const blogId = location.pathname.split('/')[2];

    Promise.all([
      axios.get(`/blogs/:${blogId}`),
    ]).then((data) => {
      setBlogContent(data[0].data)
    })
    .catch((err) => {
      console.log('----------------------------------------------------------------')
      console.log(err);
    })
  }, []);

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
              Safak
            </b>
          </span>
          <span>1 day ago</span>
        </div>
        <p className="blogPostText">
          {blogContent.content}
        </p>
        {user &&
          (<Comments blog_id={blogContent.id} user_id={user} />)
        }
      </div>
    </div>
  )
}

export default BlogPost