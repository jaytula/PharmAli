import React from 'react'
import BlogPostItem from '../BlogPostItem/index.jsx'
import "../../styles/BlogPosts.css";
import Articles from '../Articles/index.jsx';

const BlogPosts = (props) => {
  const setBlog = (blog) =>{
    console.log(blog)
    props.setPage(blog)
  }

  return (
    <>
    <Articles/>
    <div className='blogPosts'> 
      <BlogPostItem setBlog= {setBlog}/>
      <BlogPostItem setBlog= {setBlog}/>
      <BlogPostItem setBlog= {setBlog}/>
      <BlogPostItem setBlog= {setBlog}/>
      <BlogPostItem setBlog= {setBlog}/>
    </div>
    </>
  )
}

export default BlogPosts 
