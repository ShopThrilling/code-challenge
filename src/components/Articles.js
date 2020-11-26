import React from 'react';

function Articles(props) {
  return (
    <div className="article">
      <div className="article-img">
        <img src={props.image}/>
      </div>
      <div className="article-info">
        <h3>{props.title}</h3>
        <h4>{props.by}</h4>
        <div>{props.abstract}</div>
        <a className="article-link" href={props.url}>See Full Article</a>
      </div>
    </div>
  )
}

export default Articles;