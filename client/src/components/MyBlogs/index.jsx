import { useEffect, useState } from 'react';
import MyBlogsItem from '../MyBlogsItem/index';
import "../../styles/BlogPosts.css";
import axios from "axios";
import SelectSmall from '../Category/index.jsx';

const MyBlogs = (props) => {
  // const { menu, drugContent, user, blogContent, darkMode, setMenu, setCookie, removeCookie, onSearchSubmit, setBlogContent, setDarkMode } = useApplicationData();

  const [blogs, setBlogs] = useState([]);
  const [categories, setCategories] = useState([]);

  const deletePost = (id) => {
    axios.post("/blogs/delete", id)
      .then(() => {
        const newBlogPost = blogs.filter((blog) => blog.id !== id);
        setBlogs(newBlogPost);
      });
  };

  useEffect(() => {
    console.log(props);
    Promise.all([
      axios.get(`/blogs/${props.user}`),
      axios.get('/categories')
    ]).then((data) => {
      setBlogs(data[0].data);
      setCategories(data[1].data);
    });
  }, []);

  return (
    <>
      <section className='section'>
        <div className='blogPosts'>
          <SelectSmall categories={categories} />
          <span className="blogPostsTitle">BLOGS </span>
          {blogs.map((blog) => (
            <MyBlogsItem
              key={blog.id}
              user_id={props.user}
              blog={blog}
              deletePost={deletePost} />
          ))}
        </div>
      </section>
    </>
  );
};

export default MyBlogs;