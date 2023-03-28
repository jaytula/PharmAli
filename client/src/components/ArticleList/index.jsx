import { useEffect, useState } from 'react';
import ArticleListItem from '../ArticleListItem';
import '../../styles/Articles.css';
import axios from 'axios';

const Articles = (props) => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    Promise.all([
      axios.get('/articles'),
    ]).then((data) => {
      setArticles(data[0].data);
    });
  }, []);

  return (
    <div className={`articles-${props.isBlog ? "blog" : "search"}`}>
      <span className="articlesTitle">Browse Related Articles</span>
      <div className={`articlecontainers-${props.isBlog ? "blog" : "search"}`}>
        {articles.map((article) => (
          <ArticleListItem
            key={article.id}
            article={article}
            isBlog={props.isBlog}
          />
        ))}
      </div>
    </div>
  );
};

export default Articles;