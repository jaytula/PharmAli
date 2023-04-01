import React from 'react'
import "../../styles/Article.css"

function ArticleListItem({ isBlog, article }) {
  return (
    <div className={`articlebar-${isBlog ? "blog" : "search"}`}>
      <div className="articlebarItem">
        <img
          src={`${article.image_url}`}
          alt=""
        />
        < span className="sidebarTitle">
          {article.title}
        </span>
        <div className='btn-pink-container'>
          <a className="btn-pink" href={`${article.article_url}`} target="_blank" rel="noreferrer">Read Article </a>
        </div>
      </div>

    </div>
  )
}

export default ArticleListItem