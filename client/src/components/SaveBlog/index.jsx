import React from 'react'
import { useState } from 'react';
import '../../styles/EditBlog.css';
import { useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useLocation } from "react-router-dom";
import SelectSmall from '../Category/index.jsx';


function SaveBlog(props) {
  const navigate = useNavigate();
  const location = useLocation();
  const urlEnd = location.pathname.split('/').pop()
  const blogId = (urlEnd === "add") ? 0 : urlEnd;

  const savePost = (saveBlog) => {
    saveBlog.category = categories.find(cat => cat.name === category).id;
    Promise.all([
      axios.post("/blogs/edit", saveBlog)
    ])
      .then(() => {
        // set all blogs
        // make axios request to get all blogs when setAllBLogs
        return axios.get('/blogs');
      })
      .then((data) => {
        props.setAllBlogs(data.data)
        navigate(`/blogs`);
      })
  };

  useEffect(() => {
    if (props.user) {
      Promise.all([
        axios.get(`/blogs/${props.user}&${blogId}`),
        axios.get('/categories')
      ]).then((data) => {
        if (blogId) {
          const blog = data[0].data[0];
          setTitle(blog.title);
          setImage(blog.image_url);
          setContent(blog.content);
          setCategory(blog.category);
        }
        setCategories(data[1].data);
      });
    }
  }, [props.user]);

  const [title, setTitle] = useState("")
  const [image, setImage] = useState("")
  const [content, setContent] = useState("")
  const [category, setCategory] = useState("")
  const [categories, setCategories] = useState([])

  const titleChange = (e) => setTitle(e.target.value);
  const imageChange = (e) => setImage(e.target.value);
  const contentChange = (e) => setContent(e.target.value);

  return (
    <div className='write'>{blogId ? "Edit Blog" : "Add Blog"}
      <form className='writeForm'>
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
        <label className='writeFormGroup'>
          Category:
          <div className='category-dropdown'>
            <SelectSmall categories={categories} category={category} setCategory={setCategory} />
          </div>
        </label>
      </form>
      <div className='btn-group'>
        <button className='button-cancel' onClick={() => navigate('/myblogs')}>
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