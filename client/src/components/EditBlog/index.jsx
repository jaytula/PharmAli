import { FormControl } from '@mui/material';
import React from 'react'
import { useState } from 'react';
import '../../styles/EditBlog.css';
import { useEffect } from 'react';
import axios from 'axios';

function EditBlog(props) {
  console.log(props);
  const [title, setTitle] = useState(props.blog[0].title)
  const [image, setImage] = useState(props.blog[0].image_url)
  const [content, setContent] = useState(props.blog[0].content)
  const [category, setCategory]= useState([])

  const titleChange = (e) => setTitle(e.target.value);
  const imageChange = (e) => setImage(e.target.value);
  const contentChange = (e) => setContent(e.target.value);
  
  useEffect(() => {
      axios.get('/categories')
      .then((data) => {
      console.log(data)
      setCategory(data.data)
    })
  }, []);

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
          <select>
            {category.map((cat) => (
            <option key={cat.id} value={cat.id}>{cat.name}</option>
            ))}
          </select>
        </label>
      </form>
      <div className='btn-group'>
        <button className='button-cancel' onClick={() => props.setEdit(prev => !prev)}>
          Cancel
        </button>
        <button className='button-save' onClick={() => props.editPost({...props.blog, title, image_url:image, content, name:category})}>
          Save
        </button>
      </div>
    </div>
  )
}

export default EditBlog