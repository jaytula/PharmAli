import { useEffect, useState } from 'react'
import BlogPostItem from '../BlogPostItem/index.jsx'
import "../../styles/BlogPosts.css";
import Articles from '../Articles/index.jsx';
import axios from "axios";
import SelectSmall from '../Category/index.jsx';

const BlogPosts = (props) => {
  // Set the blogs and categories to show
  const [blogs, setBlogs] = useState([]);
  const [categories, setCategories] = useState([]);

  // Get all blogs and categories when page is first visited
  useEffect(() => {
    Promise.all([
      axios.get('/blogs'),
      axios.get('/categories')
    ]).then((data) => {
      setBlogs(data[0].data)
      console.log(data[0].data)
      setCategories(data[1].data)
    })
  }, []);

  // Render all articles and available categories
  return (
    <section className='section'>
      <div className='articles'>
      <Articles/>
      </div>
      <div className='blogPosts'>
      <SelectSmall categories={categories} />
      <span className="blogPostsTitle">BLOGS </span>
        {blogs.map((blog) => (
          <BlogPostItem
          key={blog.id}
          blog={blog}
          setBlog={() => props.setBlog(blog)} />
        //   { blog.user_id === props.user_id &&
        //     <BlogPostItem
        //     key={blog.id}
        //     blog={blog}
        //     setBlog={() => props.setBlog(blog)} />}
        //     {<BlogPostItem
        //     key={blog.id}
        //     blog={blog}
        //     setBlog={() => props.setBlog(blog)} />}
        ))}
        
      </div>
    </section>
  )
}

export default BlogPosts 
