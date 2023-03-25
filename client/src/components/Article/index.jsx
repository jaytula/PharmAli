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
        < span className="sidebarTitle">
        {props.article.title}
        </span>
        <div className='btn-pink-container'>
          <a className="btn-pink" href={`${props.article.article_url}`} target="_blank" rel="noreferrer">Read Article </a>
        </div>
      </div>

    </div>
  )
}

export default Article