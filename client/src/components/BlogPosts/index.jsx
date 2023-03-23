import { useEffect, useState } from 'react';
import BlogPostItem from '../BlogPostItem/index.jsx';
import "../../styles/BlogPosts.css";
import Articles from '../Articles/index.jsx';
import axios from "axios";
import SelectSmall from '../Category/index.jsx';
import { useNavigate } from "react-router-dom";

const BlogPosts = () => {
  const navigate = useNavigate();

  // Set the blogs and categories to show
  const [blogs, setBlogs] = useState([]);
  const [allBlogs, setAllBlogs] = useState([]);
  const [category, setCategory] = useState('')
  const [categories, setCategories] = useState([]);

  // Get all blogs and categories when page is first visited
  useEffect(() => {
    Promise.all([
      axios.get('/blogs'),
      axios.get('/categories')
    ]).then((data) => {
      setBlogs(data[0].data);
      setAllBlogs(data[0].data)
      setCategories(data[1].data);
    });
  }, []);

  useEffect(() => {
    const filteredByCategory = (category === "None") ? allBlogs : allBlogs.filter(blog => blog.name === category);
    setBlogs(filteredByCategory)
  }, [category])

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
              <SelectSmall categories={categories} category={category} setCategory={setCategory} />
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
