import { useEffect, useState } from 'react'
import BlogPostItem from '../BlogPostItem/index.jsx'
import "../../styles/BlogPosts.css";
import Articles from '../Articles/index.jsx';
import axios from "axios";
import SelectSmall from '../Category/index.jsx';

const BlogPosts = (props) => {
  const [blogs, setBlogs] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    Promise.all([
      axios.get('/blogs'),
      axios.get('/categories')
    ]).then((data) => {
      setBlogs(data[0].data)
      console.log(data[1].data)
      setCategories(data[1].data)
    })
  }, []);

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
        ))}
      </div>
    </section>
  )
}

export default BlogPosts 
