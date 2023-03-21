import React from 'react'
import "../../styles/BlogPost.css"
import Comments from '../Comments'
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

function BlogPost(props) {
  return (
    <div className='blogPost'>
      <ArrowBackIcon size='large' onClick={() => props.setPage("BLOG POSTS")}/>
      <div className="blogPostHolder">
        <img
          className="blogPostImage"
          src={`${props.blogContent.image_url}`}
          alt=""
        />
        <h1 className="blogPostTitle">
          {props.blogContent.title}
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
          {props.blogContent.content}
        </p>
      <Comments blog_id={props.blogContent.id} user_id={props.user_id}/>
      </div>
    </div>
  )
}

export default BlogPost