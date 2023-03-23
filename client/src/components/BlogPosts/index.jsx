import { useEffect, useState } from 'react';
import BlogPostItem from '../BlogPostItem/index.jsx';
import "../../styles/BlogPosts.css";
import Articles from '../Articles/index.jsx';
import axios from "axios";
import SelectSmall from '../Category/index.jsx';
import { useNavigate } from "react-router-dom";
import Button from '../Button';

const BlogPosts = (props) => {
  // Set the blogs and categories to show
  const navigate = useNavigate();
  const [allBlogs, setAllBlogs] = useState([]);
  const [category, setCategory] = useState('')
  const [blogs, setBlogs] = useState([]);
  const [categories, setCategories] = useState([]);

  // Get all blogs and categories when page is first visited
  useEffect(() => {
    const blogFetchUrl = (props.myBlogs && props.user) ? `/blogs/${props.user}` : '/blogs'
    Promise.all([
      axios.get(blogFetchUrl),
      axios.get('/categories')
    ]).then((data) => {
      setBlogs(data[0].data);
      setAllBlogs(data[0].data)
      setCategories(data[1].data);
    });
  }, [props.user]);

  useEffect(() => {
    const filteredByCategory = (category === "None") ? allBlogs : allBlogs.filter(blog => blog.category === category);
    setBlogs(filteredByCategory)
  }, [category])

  const deletePost = (id) => {
    axios.post("/blogs/delete", id)
      .then(() => {
        const newBlogPost = blogs.filter((blog) => blog.id !== id);
        setBlogs(newBlogPost);
      });
  };

  // Render all articles and available categories
  return (
    <>
      <section className='section'>
        {!props.myBlogs &&
          (<div className='articles'>
            <Articles />
          </div>)}
        <div className='blogPosts'>
          {props.myBlogs &&
            (<Button
              onClick={() => navigate('/myblogs/add')}
              children={"Add a Blog"} />)}
          <span className="blogPostsTitle">
            <div className='bloggg'>
              {props.myBlogs ? "MY BLOGS" : "BLOGS"}
            </div>
            <div className='category-dropdown'>
              <SelectSmall categories={categories} category={category} setCategory={setCategory} blogFiltering={true} />
            </div>
          </span>
          {blogs.map((blog) => (
            <BlogPostItem
              key={blog.id}
              blog={blog}
              setBlog={() => navigate(`/blogs/${blog.id}`)}
              user={props.user}
              editPost={() => navigate(`/myblogs/edit/${blog.id}`)}
              deletePost={() => deletePost(blog.id)} />
          ))}

        </div>
      </section>
    </>
  );
};

export default BlogPosts;
