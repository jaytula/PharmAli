import React from 'react'

function BlogPost(props) {
  return (
    <div className='blogPost'>
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
      </div>
    </div>
  )
}

export default BlogPost