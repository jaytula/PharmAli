import React from 'react'
import "../../styles/BlogPostItem.css";

function BlogPostItem(props) {
  console.log(props);
  return (
    <div className="blog">
      <img
        className="blogImage"
        src={`${props.blog.image_url}`}
        alt=""
      />
      <div className="blogInfo">
        <div className="blogCategories">
          <span className="blogCategory">
            Category
          </span>
        </div>
        <span className="blogTitle" onClick={props.setBlog}>
          Blog Title: {props.blog.title}
        </span>
        <hr />
        <span className="blogDate">1 hour ago</span>
      </div>
      <p className="blogDescription">
        {props.blog.content}
      </p>
    </div>
  )
}

export default BlogPostItem