import { useEffect, useState } from 'react';
import ArticleListItem from '../ArticleListItem';
import '../../styles/Articles.css';
import axios from '../../axiosInstance';

const Articles = ({isBlog}) => {
  // Set initial state of the content displayed for this component
  const [articles, setArticles] = useState([]);

  // Get all articles when component is called
  useEffect(() => {
    Promise.all([
      axios.get('/articles'),
    ]).then((data) => {
      setArticles(data[0].data);
    });
  }, []);

  return (
    <div className={`articles-${isBlog ? "blog" : "search"}`}>
      <span className="articlesTitle">Browse Related Articles</span>
      <div className={`articlecontainers-${isBlog ? "blog" : "search"}`}>
        {articles.map((article) => (
          <ArticleListItem
            key={article.id}
            article={article}
            isBlog={isBlog}
          />
        ))}
      </div>
    </div>
  );
};

export default Articles;