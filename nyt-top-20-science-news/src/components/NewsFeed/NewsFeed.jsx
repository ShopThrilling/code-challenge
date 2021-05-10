import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Row from 'react-bootstrap/Row';
import StoryCard from '../StoryCard';

/**
 * The section where news stories will be populated.
 * @param {Object} param0 - The news container.
 * @param {Object.<string, string>[]} param0.news - The list of news stories
 */
function NewsFeed({ news }) {
  const [stories, setStories] = useState(news);

  /**
   * Retrieve relevant news story details.
   * @param {Object.<string, string>} story A news story
   * @returns the story details
   */
  function getStoryDetails(story) {
    const DEFAULT_THUMBNAIL_URL = 'https://autosdutriomphe.fr/wp-content/uploads/2018/04/default-image.png';
    return {
      title: story.title,
      abstract: story.abstract,
      writer: story.byline,
      section: story.section,
      updateDateTime: story.updated_date,
      thumbnailUrl: story.multimedia?.[4]?.url ?? DEFAULT_THUMBNAIL_URL,
      articleShortUrl: story.short_url,
    };
  }

  /**
   * Only re-run the effect if "news" changes.
   */
  useEffect(() => {
    setStories(news);
  }, [news]);

  return (
    <Row className="row-cols-1 row-cols-md-3">
      {stories && stories.length
        ? stories.map((element) => (
          <StoryCard
            key={element.short_url}
            details={getStoryDetails(element)}
          />
        )) : <p>No results found 👀 . Please refresh this page or try another search.</p>}
    </Row>
  );
}

NewsFeed.defaultProps = {
  news: [],
};

NewsFeed.propTypes = {
  news: PropTypes.arrayOf(PropTypes.any),
};

export default NewsFeed;
