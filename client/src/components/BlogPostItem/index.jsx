import React from 'react'
import "../../styles/BlogPostItem.css";

function BlogPostItem(props) {
  return (
    <div className="blog">
         <img
        className="blogImage"
        src="https://images.unsplash.com/photo-1585409677983-0f6c41ca9c3b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxleHBsb3JlLWZlZWR8Mnx8fGVufDB8fHx8&w=1000&q=80"  
        alt=""
        />
        <div className="blogInfo">
        <div className="blogCategories">
          <span className="blogCategory">
            Category
          </span>
        </div>
        <span className="blogTitle" onClick={()=> props.setBlog("BLOG")}>
          Blog Title: How 1 Percocet percription triggered my addiction
        </span>
        <hr />
        <span className="blogDate">1 hour ago</span>
      </div>
      <p className="blogDescription">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Assumenda
        officia architecto deserunt deleniti? Labore ipsum aspernatur magnam
        fugiat, reprehenderit praesentium blanditiis quos cupiditate ratione
        atque, exercitationem quibusdam, reiciendis odio laboriosam?
      </p>
    </div>
  )
}

export default BlogPostItem