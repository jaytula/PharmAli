import { useEffect, useState } from 'react';
import BlogPostItem from '../BlogPostItem/index.jsx';
import "../../styles/BlogPosts.css";
import Articles from '../Articles/index.jsx';
import axios from "axios";
import SelectSmall from '../Category/index.jsx';
import Navbar2 from '../Home/Navbar2.js';
import useApplicationData from '../../hooks/useApplicationData';
import { useNavigate, useParams } from "react-router-dom";



const BlogPosts = () => {
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
      setBlogs(data[0].data);
      setCategories(data[1].data);
    });
  }, []);

  // Render all articles and available categories
  return (
    <>
      <section className='section'>
        <div className='articles'>
          <Articles />
        </div>
        <div className='blogPosts'>
          <span className="blogPostsTitle">
            <div className='bloggg'>
            BLOGS
            </div>
            <div className='category-dropdown'>
              <SelectSmall categories={categories} />
            </div>
          </span>
          {blogs.map((blog) => (
            <BlogPostItem
              key={blog.id}
              blog={blog}
              setBlog={() => navigate(`/blogs/${blog.id}`)} />
          ))}

        </div>
      </section>
    </>
  );
};

export default BlogPosts;
