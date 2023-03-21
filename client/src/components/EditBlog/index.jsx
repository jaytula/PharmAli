import { FormControl } from '@mui/material';
import React from 'react'
import { useState } from 'react';

function EditBlog(props) {
  // console.log(props);
  const [formValues, setFormValues] = useState({});

  const handleChange = (e) => {
    setFormValues({ ...formValues, [e.target.id]: e.target.value });
  };

  return (
    <div>EditBlog
      <form>
      <label>
        Title:
        <input type="text" name="title" value={formValues.title && props.blog[0].title} onChange={handleChange} />
      </label>
      <label>
        Image:
        <input type="text" name="image" value={props.blog[0].image_url} />
      </label>
      <label>
        Content:
        <textarea type="text" name="image" value={props.blog[0].content} />
      </label>
      <label>
        Category:
        <select>
          <option value="liquids">Liquids</option>
          <option value="tablets">Tablets</option>
          <option value="capsules">Capsules</option>
          <option value="injection">Injections</option>
        </select>
      </label>

    </form>


      <button onClick={() => props.setEdit(prev => !prev)}>
        Cancel
      </button>
      <button onClick={() => props.editPost({id: 4, title: 'Neew title', name: 4, content: 'Omg i csnt type', image_url:'https://5.imimg.com/data5/SELLER/Default/2022/1/VU/BB/BY/13166357/olanzapine-ip-5mg--500x500.jpg' })}>
        Save
      </button>
    </div>
  )
}

export default EditBlog