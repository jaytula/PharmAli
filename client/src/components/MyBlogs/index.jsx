import { useEffect, useState } from 'react'
import MyBlogsItem from '../MyBlogsItem/index'
import "../../styles/BlogPosts.css";
import axios from "axios";
import SelectSmall from '../Category/index.jsx';

const MyBlogs = (props) => {
  const [blogs, setBlogs] = useState([]);
  const [categories, setCategories] = useState([]);
  // console.log(blogs);

  const editPost = (editBlog) => {
    console.log(editBlog)
    Promise.all([
      axios.post("/blogs/edit", editBlog)
    ])
    .then(() => {
      const newBlogPost = blogs.map((blog) => {
        // blog.id === editBlog.id
      });
      console.log(newBlogPost)
      setBlogs(newBlogPost);
    })
  }

  const deletePost = (id) => {
    axios.post("/blogs/delete", id)
    .then(() => {
      const newBlogPost = blogs.filter((blog) => blog.id !== id);
      console.log(newBlogPost)
      setBlogs(newBlogPost);
    })
  }

  useEffect(() => {
    Promise.all([
      axios.get(`/blogs/${props.user}`),
      axios.get('/categories')
    ]).then((data) => {
      setBlogs(data[0].data)
      console.log(data[1].data)
      setCategories(data[1].data)
    })
  }, []);

  return (
    <section className='section'>
      <div className='blogPosts'>
      <SelectSmall categories={categories} />
      <span className="blogPostsTitle">BLOGS </span>
        {blogs.map((blog) => (
          <MyBlogsItem
            key={blog.id}
            user_id={props.user_id}
            blog={blog}
            setBlog={() => props.setBlog(blog)}
            deletePost={deletePost} 
            editPost={editPost}/>
        ))}
      </div>
    </section>
  )
}

export default MyBlogs