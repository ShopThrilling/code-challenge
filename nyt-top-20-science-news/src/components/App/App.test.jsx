import React from 'react';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import App from './App';

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

it('contains the header brand', () => {
  const TOP_NEWS_LIMIT = 20;
  const BRAND = `NYT: Top ${TOP_NEWS_LIMIT} Science Stories`;
  act(() => {
    render(<App countLimit={20} />, container);
  });
  expect(container.textContent).toContain(BRAND);
});
