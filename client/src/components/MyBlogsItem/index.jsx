import React from 'react'

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
  </div>
  )
}

export default MyBlogsItem