import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import NewsFeed from './NewsFeed';

let container = null;
beforeEach(() => {
  // setup a DOM element as a render target
  container = document.createElement('div');
  document.body.appendChild(container);
});

afterEach(() => {
  // cleanup on exiting
  unmountComponentAtNode(container);
  container.remove();
  container = null;
});

it('renders with or without a valid news data', () => {
  const NOT_FOUND_MESSAGE = 'No results found 👀 . Please refresh this page or try another search.';
  const FAKE_NEWS = [{
    title: 'fake title',
    abstract: 'fake abstract',
    byline: 'fake writer',
    section: 'fake section',
    updated_date: 'fake update date time',
    multimedia: 'hteeteep://fake-news.com',
    short_url: 'hteeteep://fake-news.com',
  }];

  act(() => {
    render(<NewsFeed />, container);
  });
  expect(container.textContent).toBe(NOT_FOUND_MESSAGE);

  act(() => {
    render(<NewsFeed news={FAKE_NEWS} />, container);
  });
  expect(container.textContent).toContain(FAKE_NEWS[0].title);
});
