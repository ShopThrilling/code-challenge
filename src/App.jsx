import React, { useState, useEffect } from 'react';
import nytimesApi from './data/nytimesApi';
import Fuse from 'fuse.js';
import ArticleCard from '../src/components/ArticleCard';
import SearchBar from './components/SearchBar';
import { makeStyles, Typography } from '@material-ui/core';

// ----------------------------- Styles --------------------------------- //

const useStyles = makeStyles(() => ({
  title: {
    textAlign: "center",
    paddingBottom: 55,
    paddingTop: 45,
    fontFamily: "Castoro, serif",
  },
}));


// ------------------------- Main App Component -------------------------- //

const App = () => {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');

  const classes = useStyles();

  // Fetching data from NY Times API on page load
  // Setting fetched data in state 
  useEffect(() => {
    setLoading(true)
    fetch(nytimesApi)
      .then(response => response.json())
      .then(articleData => {
        setArticles(articleData)
        setLoading(false)
      })
      .catch(e => {
        setLoading(false);
        setError('Fetch failed');
      });
  }, []);

  if (loading) {
    return <p>loading...</p>;
  }

  if (error) {
    return <p>ERROR: {error}</p>;
  }

  // --------------------- Fuzzy Search ----------------------- //
  // Displays relevant articles to search argument even if words are mispelled

    const fuse = new Fuse(articles.results, {
      keys: [
        "section",
        "title",
        "byline",
        "url",
        "abstract",
        "multimedia",
      ],
    });

  // Stores input text value in state on event change
  // State used to query articles
  const handleSearch = ({ currentTarget = {} }) => {
    const { value } = currentTarget;
    setSearchQuery(value);
  };

  // Querying articles 
  const searchResults = fuse.search(searchQuery);
  const articleResults = searchQuery ? searchResults.map(result => result.item) : articles.results;

  return (
    <div>
    <Typography className={classes.title} variant="h3" color="textPrimary">Thrilling Times Magazine</Typography>
    <SearchBar 
    searchQuery={searchQuery}
    handleSearch={handleSearch}
    />
    <ArticleCard articleResults={articleResults} />
    </div>
   )
  };

export default App;