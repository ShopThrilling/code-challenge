import React from 'react';
import PropTypes from 'prop-types';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Badge from 'react-bootstrap/Badge';
import moment from 'moment';

/**
 * @typedef StoryDetails
 * @type {object}
 * @property {string} title - The title.
 * @property {string} abstract - The summary.
 * @property {string} writer - The writer.
 * @property {string} section - The category.
 * @property {string} updateDateTime - The update date & time.
 * @property {string} thumbnailUrl - The image preview url.
 * @property {string} articleShortUrl - The shortened external url.
 */

/**
 * A card that shows a brief info about the news story.
 * @param {Object} param0 - The news story
 * @param {StoryDetails} details - The news story details
 */
function StoryCard({ details }) {
  const {
    title, abstract, writer, section, updateDateTime, thumbnailUrl, articleShortUrl,
  } = details;

  /**
   * This style sets a fixed size for all preview images
   */
  const imagePreviewStyle = {
    height: '250px',
    width: 'auto',
    objectFit: 'cover',
  };

  return (
    <Col
      className="mb-4"
    >
      <Card
        className="shadow-sm h-100"
      >
        <Card.Img variant="top" loading="lazy" style={imagePreviewStyle} src={thumbnailUrl} alt={title} />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            {abstract}
            {' '}
            <a
              className="stretched-link"
              variant="link"
              href={articleShortUrl}
              target="_blank"
              rel="noreferrer"
            >
              Read more ↗
            </a>
          </Card.Text>
        </Card.Body>
        <Card.Footer className="bg-transparent d-flex">
          <small>
            {writer}
            {' • '}
            <span className="text-muted">{moment(updateDateTime).fromNow()}</span>
          </small>
          <Badge className="ml-auto" variant="warning">
            {section}
          </Badge>
        </Card.Footer>
      </Card>
    </Col>
  );
}

StoryCard.defaultProps = {
  details: {},
};

StoryCard.propTypes = {
  details: PropTypes.objectOf(PropTypes.string),
};

export default StoryCard;
