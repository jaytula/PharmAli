import React from 'react'

function EditBlog(props) {
  return (
    <div>EditBlog
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