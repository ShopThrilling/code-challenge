import React, { useState, useEffect } from 'react';
import nytimesApi from './data/nytimesApi';
import ArticleCard from './components/ArticleCard';

const App = () => {
  const [articles, setArticles] = useState([]);


  useEffect(() => {
    getAllArticles();
  });

  const getAllArticles = async () => {
    const response = await fetch(nytimesApi);
    const articleData = await response.json();
    setArticles(articleData);
    // console.log(articles.results)
  }
  return (
    <div>
      <ArticleCard />
    </div>
  )
};

export default App;