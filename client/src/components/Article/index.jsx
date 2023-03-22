import React from 'react'
import "../../styles/Article.css"

function Article(props) {
  return (
    <div className='articlebar'>
      <div className="articlebarItem">
        <img
          src={`${props.article.image_url}`}
          alt=""
        />
        <span className="sidebarTitle">
          <a href={`${props.article.article_url}`} target="_blank" rel="noreferrer"> {props.article.title} </a>
        </span>
      </div>

    </div>
  )
}

export default Article