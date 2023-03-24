import { FormControl } from '@mui/material';
import React from 'react'
import { useState } from 'react';
import '../../styles/EditBlog.css';
import { useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useLocation } from "react-router-dom";


function AddBlog(props) {
  const navigate = useNavigate();
  const blogId = null;

  const editPost = (editBlog) => {
    Promise.all([
      axios.post("/blogs/edit", editBlog)
    ])
      .then(() => {
        navigate(`/myblogs`);
      });
  };

  useEffect(() => {
    Promise.all([
      axios.get('/categories')
    ]).then((data) => {
      setCategories(data[1].data);
    });
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
    <div className='write'>
      <span className='writeTitle'>
        Add a new Blog
      </span>
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
        </label>
          <select>
            {categories.map((cat) => (
              <option key={cat.id} value={cat.id}>{cat.name}</option>
            ))}
          </select>
      </form>
      <div className='btn-group'>
        <button className='button-cancel' onClick={() => navigate('/myblogs')}>
          Cancel
        </button>
        <button className='button-save' onClick={() => editPost({ id: blogId, title, image_url: image, content, name: 1, user_id: props.user })}>
          Save
        </button>
      </div>
    </div>
  )
}
