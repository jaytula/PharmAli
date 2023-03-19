import React from 'react'
import Article from '../Article'
import '../../styles/Articles.css'

function Articles() {
  return (
    <div className='articles'>
      <span className="articlesTitle">ARTICLES</span>
      <Article />
      <Article />
      <Article />
      <Article />
    </div>
  )
}

export default Articles;