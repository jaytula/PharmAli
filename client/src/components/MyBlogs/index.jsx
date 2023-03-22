import { useEffect, useState } from 'react'
import MyBlogsItem from '../MyBlogsItem/index'
import "../../styles/BlogPosts.css";
import axios from "axios";
import SelectSmall from '../Category/index.jsx';
import EditBlog from '../EditBlog';
import Navbar from '../Navbar';
import useApplicationData from '../../hooks/useApplicationData'


const MyBlogs = (props) => {
  const { menu, drugContent, user, blogContent, darkMode, setMenu, setCookie, removeCookie, onSearchSubmit, setBlogContent, setDarkMode } = useApplicationData()

  const [blogs, setBlogs] = useState([]);
  const [categories, setCategories] = useState([]);
  const [edit, setEdit]=useState();
  
  const blogById = () => {
    const id = blogs.filter((blog) => blog.id === edit)
    return id;
  }

  const editPost = (editBlog) => {
    Promise.all([
      axios.post("/blogs/edit", editBlog)
    ])
    .then(() => {
      setBlogs((prev)=> {
        prev.forEach((blog) => {
          if (blog.id === editBlog.id) {
            blog = {...blog, ...editBlog}
          }
        });
        return [...prev]
      })
      setBlog(editBlog)
    })
  }

  const deletePost = (id) => {
    axios.post("/blogs/delete", id)
    .then(() => {
      const newBlogPost = blogs.filter((blog) => blog.id !== id);
      setBlogs(newBlogPost);
    })
  }

  useEffect(() => {
    Promise.all([
      axios.get(`/blogs/${user}`),
      axios.get('/categories')
    ]).then((data) => {
      setBlogs(data[0].data)
      setCategories(data[1].data)
    })
  }, []);

  return (
    <>
    <Navbar />
    <section className='section'>
      {typeof edit === "number" && 
      (<EditBlog setEdit={setEdit} editPost={editPost} blog={blogById()}/>)}
      {typeof edit !== "number"  && (<div className='blogPosts'>
      <SelectSmall categories={categories} />
      <span className="blogPostsTitle">BLOGS </span>
        {blogs.map((blog) => (
          <MyBlogsItem
            key={blog.id}
            user_id={user.id}
            blog={blog}
            setBlog={() => setBlog(blog)}
            deletePost={deletePost} 
            editPost={editPost}
            setPage={setPage}
            setEdit={setEdit}/>
        ))}
      </div>)}
    </section>
    </>
  )
}

export default MyBlogs