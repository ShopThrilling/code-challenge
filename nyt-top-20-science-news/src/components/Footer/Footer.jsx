import React from 'react';
import Container from 'react-bootstrap/Container';

/**
 * The footer section.
 */
function Footer() {
  /**
   * This style sets enough white space at the top and bottom of the footer.
   */
  const padding = {
    paddingTop: '3rem',
    paddingBottom: '3rem',
  };

  return (
    <footer style={padding} className="text-muted bg-light">
      <Container>
        <img
          className="float-right"
          src="https://developer.nytimes.com/files/poweredby_nytimes_200c.png"
          alt="NYT API Logo"
        />
        <p>Most popular New York Times science articles.</p>
      </Container>
    </footer>
  );
}

export default Footer;
