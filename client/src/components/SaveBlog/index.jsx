import React from 'react'
import { useState } from 'react';
import '../../styles/EditBlog.css';
import { useEffect } from 'react';
import axios from 'axios';
import Error from "../Error";
import { useNavigate, useLocation } from "react-router-dom";
import SelectSmall from '../Category/index.jsx';


function SaveBlog(props) {
  const navigate = useNavigate();
  const location = useLocation();
  const [title, setTitle] = useState("")
  const [image, setImage] = useState("")
  const [content, setContent] = useState("")
  const [category, setCategory] = useState("")
  const [categories, setCategories] = useState([])
  const [error, setError] = useState("")
  const blogId = location.pathname.split('/').pop();

  const savePost = (saveBlog) => {
    saveBlog.category = (category) ? categories.find(cat => cat.name === category).id : null;
    Promise.all([
      axios.post("/blogs/edit", saveBlog)
    ])
    .then(() => navigate(`/blogs`))
    .catch(({ response: data }) => {
      setError(data.data)
    })
  };

  useEffect(() => {
    Promise.all([
      axios.get(`/blogs/${blogId}`),
      axios.get('/categories')
    ]).then((data) => {
      if (!isNaN(blogId)) {
        const blog = data[0].data;
        setTitle(blog.title);
        setImage(blog.image_url);
        setContent(blog.content);
        setCategory(blog.category);
      }
      setCategories(data[1].data);
    })
  }, []);

  const titleChange = (e) => setTitle(e.target.value);
  const imageChange = (e) => setImage(e.target.value);
  const contentChange = (e) => setContent(e.target.value);

  return (
    <div className='write'><h1>{(blogId === "add") ? "Add Blog" : "Edit Blog"}</h1>
      {error.length > 0 && <Error message={error} />}
      <form className='writeForm'>
        <label className='writeFormGroup'>
          Category:
          <div className='category-dropdown'>
            <SelectSmall categories={categories} category={category} setCategory={setCategory} />
          </div>
        </label>
        <label className='writeFormGroup'>
          Title:
        </label>
        <input className='writeInput' type="text" id="title" defaultValue={title} onChange={titleChange} />
        <label className='writeFormGroup'>
          Image:
        </label>
        <input className='writeInput' type="text" id="image" defaultValue={image} onChange={imageChange} />
        <label className='writeFormGroup'>
          Content:
        </label>
        <textarea className='writeInput writeText' type="text" name="image" defaultValue={content} onChange={contentChange} />
      </form>
      <div className='btn-group'>
        <button className='button-cancel' onClick={() => navigate('/blogs')}>
          Cancel
        </button>
        <button className='button-save' onClick={() => savePost({ id: blogId, title, image_url: image, content, user_id: props.user })}>
          Save
        </button>
      </div>
    </div>
  )
}

export default SaveBlog