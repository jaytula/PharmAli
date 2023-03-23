import { FormControl } from '@mui/material';
import React from 'react'
import { useState } from 'react';
import '../../styles/EditBlog.css';
import { useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useLocation } from "react-router-dom";
import SelectSmall from '../Category/index.jsx';


function EditBlog(props) {
  const navigate = useNavigate();
  const location = useLocation();
  const blogId = location.pathname.split('/').pop();

  const editPost = (editBlog) => {
    editBlog.name = categories.find(cat => cat.name === category).id;
    Promise.all([
      axios.post("/blogs/edit", editBlog)
    ])
      .then(() => {
        navigate(`/myblogs`);
      });
  };


  useEffect(() => {
    if (props.user) {
      Promise.all([
        axios.get(`/blogs/${props.user}&${blogId}`),
        axios.get('/categories')
      ]).then((data) => {
        const blog = data[0].data[0];
        setTitle(blog.title);
        setImage(blog.image_url);
        setContent(blog.content);
        setCategory(blog.category);
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
    <div className='write'>EditBlog
      <form className='writeForm'>
        <label className='writeFormGroup'>
          Title:
          <input className='writeInput' type="text" id="title" defaultValue={title} onChange={titleChange} />
        </label>
        <label className='writeFormGroup'>
          Image:
          <input className='writeInput' type="text" id="image" defaultValue={image} onChange={imageChange} />
        </label>
        <label className='writeFormGroup'>
          Content:
          <textarea className='writeInput writeText' type="text" name="image" defaultValue={content} onChange={contentChange} />
        </label>
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
        <button className='button-save' onClick={() => editPost({ id: blogId, title, image_url: image, content })}>
          Save
        </button>
      </div>
    </div>
  )
}

export default EditBlog