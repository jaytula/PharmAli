import { useEffect, useState } from 'react'
import BlogPostItem from '../BlogPostItem/index.jsx'
import "../../styles/BlogPosts.css";
import Articles from '../Articles/index.jsx';
import axios from "axios";
import SelectSmall from '../Category/index.jsx';
import Navbar from '../Navbar/index.jsx';
import useApplicationData from '../../hooks/useApplicationData'
import { useNavigate, useParams } from "react-router-dom";



const BlogPosts = () => {
  const { menu, drugContent, user, blogContent, darkMode, setMenu, setCookie, removeCookie, onSearchSubmit, setBlogContent, setDarkMode } = useApplicationData()
  const navigate = useNavigate();

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
      setCategories(data[1].data)
    })
  }, []);

  // Render all articles and available categories
  return (
    <>
      <Navbar />
      <section className='section'>
        <div className='articles'>
          <Articles />
        </div>
        <div className='blogPosts'>
          <SelectSmall categories={categories} />
          <span className="blogPostsTitle">BLOGS </span>
          {blogs.map((blog) => (
            <BlogPostItem
              key={blog.id}
              blog={blog}
              setBlog={() => navigate(`/blogs/${blog.id}`)} />
          ))}

        </div>
      </section>
    </>
  )
}

export default BlogPosts 
