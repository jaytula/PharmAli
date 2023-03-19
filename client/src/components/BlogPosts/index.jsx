import { useEffect, useState } from 'react'
import BlogPostItem from '../BlogPostItem/index.jsx'
import "../../styles/BlogPosts.css";
import Articles from '../Articles/index.jsx';
import axios from "axios";

const BlogPosts = (props) => {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    Promise.all([
      axios.get('/blogs'),
    ]).then((data) => {
      setBlogs(data[0].data);
    })
  }, []);

  return (
    <div className='blogPosts'>
      {blogs.map((blog) => (
        <BlogPostItem
          key={blog.id}
          blog={blog}
          setBlog={() => props.setBlog(blog)} />
      ))}
    </div>
  )
}

export default BlogPosts 
