import React, { useEffect, useState } from 'react';
import Container from 'react-bootstrap/Container';
import Footer from '../Footer';
import Header from '../Header';
import NewsFeed from '../NewsFeed';
import SearchBox from '../SearchBox';

/**
 * Main application
 */
function App() {
  const [news, setNews] = useState([]);
  const [filteredNews, setFilteredNews] = useState(null);

  const TOP_NEWS_ENDPOINT = 'https://api.nytimes.com/svc/topstories/v2/science.json?api-key=';
  const ARTICLE_COUNT_LIMIT = 20;

  /**
   * Retrieve NYT Top Science Stories
   */
  async function retrievePopularStories() {
    try {
      const response = await fetch(TOP_NEWS_ENDPOINT + process.env.REACT_APP_NYT_API_KEY);
      const { results } = await response.json();

      /**
       * Sort the news in a descending order according to the update date and time.
       * In other words, fresh news will be seen first. Additionally, we only
       * want the first 20 stories, so we chop off the rest. Please consult README.md
       * to learn more about this decision.
       */
      const TOP_STORIES = results
        ?.sort((a, b) => new Date(b.updated_date) - new Date(a.updated_date))
        ?.slice(0, ARTICLE_COUNT_LIMIT);

      setNews(TOP_STORIES);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error('Error:', error);
    }
  }

  /**
   * The empty dependency array (second arg => []) makes sure this effect
   * runs only once. Similar to componentDidMount.
   */
  useEffect(() => {
    retrievePopularStories();
  }, []);

  return (
    <>
      <Header countLimit={ARTICLE_COUNT_LIMIT}>
        <SearchBox
          newsData={news}
          onSearch={setFilteredNews}
        />
      </Header>
      <Container className="py-5">
        <NewsFeed news={filteredNews || news} />
      </Container>
      <Footer />
    </>
  );
}

export default App;
