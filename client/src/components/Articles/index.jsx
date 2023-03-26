import { useEffect, useState } from 'react'
import Article from '../Article'
import '../../styles/Articles.css'
import axios from 'axios'

const Articles = (props) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    Promise.all([
      axios.get('/articles'),
    ]).then((data) => {
      setArticles(data[0].data)
    })
  }, []);

  return (
    <div className={`articles-${props.isBlog ? "blog" : "search"}`}>
      <span className="articlesTitle">ARTICLES</span>
      {articles.map((article) => (
        <Article
          key={article.id}
          article={article}
          isBlog={props.isBlog}
        />
      ))}
    </div>
  )
}

export default Articles;