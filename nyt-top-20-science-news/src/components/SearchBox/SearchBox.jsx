import React from 'react';
import PropTypes from 'prop-types';
import FormControl from 'react-bootstrap/FormControl';
import Form from 'react-bootstrap/Form';

/**
 * @callback SearchCallBack
 * @param {string} key - The search key
 */

/**
 * The search box. You can search by title, byline (writer), or section.
 * @param {Object} param0 - The search container.
 * @param {Object<string,string>[]} param0.newsData - The list of news.
 * @param {SearchCallBack} param0.onSearch - Filters for certain news
 * when user types into search box.
 */
function SearchBox({ newsData, onSearch }) {
  /**
   * Check if a string contains a substring.
   * @param {string} text - The string.
   * @param {string} substring - The substring.
   * @returns {boolean} Whether the string contains the given substring.
   */
  function stringContainsSubstring(text, substring) {
    return text?.toLowerCase().includes(substring?.toLowerCase());
  }

  /**
   * Search for news where the title, byline (writer), or section
   * matches what the user typed in.
   * @param {string} searchKey - The search key.
   */
  function searchForSpecificNews(searchKey) {
    if (searchKey) {
      const filtered = newsData.filter((article) =>
        // eslint-disable-next-line implicit-arrow-linebreak
        stringContainsSubstring(article.title, searchKey)
        || stringContainsSubstring(article.byline, searchKey)
        || stringContainsSubstring(article.section, searchKey));
      onSearch(filtered);
    } else {
      onSearch(newsData);
    }
  }

  return (
    <Form inline>
      <FormControl
        className="mr-sm-3"
        placeholder="Search"
        onChange={(e) => searchForSpecificNews(e.target.value)}
      />
    </Form>
  );
}

SearchBox.defaultProps = {
  newsData: [],
  onSearch: () => { },
};

SearchBox.propTypes = {
  newsData: PropTypes.arrayOf(
    PropTypes.objectOf(PropTypes.any),
  ),
  onSearch: PropTypes.func,
};

export default SearchBox;
