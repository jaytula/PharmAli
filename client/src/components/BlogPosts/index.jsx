import React from 'react'
import BlogPostItem from '../BlogPostItem/index.jsx'
import "../../styles/BlogPosts.css";

const BlogPosts = (props) => {
  const setBlog = (blog) =>{
    // console.log(blog)
    props.setPage(blog)
  }

  return (
    <div className='blogPosts'>
      <BlogPostItem setBlog= {setBlog}/>
      <BlogPostItem setBlog= {setBlog}/>
      <BlogPostItem setBlog= {setBlog}/>
      <BlogPostItem setBlog= {setBlog}/>
      <BlogPostItem setBlog= {setBlog}/>
    </div>
  )
}

export default BlogPosts 
