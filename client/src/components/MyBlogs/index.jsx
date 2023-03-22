import { useEffect, useState } from 'react';
import MyBlogsItem from '../MyBlogsItem/index';
import "../../styles/BlogPosts.css";
import axios from "axios";
import SelectSmall from '../Category/index.jsx';
import Button from '../Button';
import { useNavigate } from "react-router-dom";

const MyBlogs = (props) => {
  const navigate = useNavigate();

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
    if (props.user) {
      Promise.all([
        axios.get(`/blogs/${props.user}`),
        axios.get('/categories')
      ]).then((data) => {
        setBlogs(data[0].data);
        setCategories(data[1].data);
      });
    }
  }, [props.user]);

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
          <Button onClick={() => navigate('/myblogs/add')} children={"Add a Blog"} />
        </div>
      </section>
    </>
  );
};

export default MyBlogs;