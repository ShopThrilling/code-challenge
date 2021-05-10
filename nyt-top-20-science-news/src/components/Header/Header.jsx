import React from 'react';
import PropTypes from 'prop-types';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';

/**
 * The header section.
 * @param {ReactElement} param0 - This component.
 * @param {ReactElement} param0.children - The children components.
 * @param {number} param0.countLimit - The max number of news stories.
 */
function Header({ children, countLimit }) {
  return (
    <Navbar bg="primary" variant="dark">
      <Container className="d-flex justify-content-between">
        <Navbar.Brand className="ml-sm-3" href="#">
          <strong>NYT:</strong>
          {' '}
          {`Top ${countLimit} Science Stories`}
        </Navbar.Brand>
        {children}
      </Container>
    </Navbar>
  );
}

Header.defaultProps = {
  children: <></>,
  countLimit: '',
};

Header.propTypes = {
  children: PropTypes.element,
  countLimit: PropTypes.number,
};

export default Header;
