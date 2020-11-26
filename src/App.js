import React, { Component } from 'react';
import Articles from './components/Articles';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.textInput = React.createRef();
    this.state = {
      articleState: [],
      clearButton: false,
      show: false
    }
  }

  componentDidMount() {
    fetch("https://api.nytimes.com/svc/topstories/v2/science.json?api-key=Gwxln5M3geWlhR6UE0TY1FUWKSG3wCil")
    .then(res => res.json()).then((data) => {
      this.articles = data.results;
      this.setState({articleState: data.results, show: true});
    })
  }

  searchArticles() {
    const input = this.textInput.current.value.toLowerCase(),
          results = [];

    this.articles.forEach(function(value, index){
      const byLine = value['byline'].toLowerCase().indexOf(input),
            title = value['title'].toLowerCase().indexOf(input),
            section = value['section'].toLowerCase().indexOf(input);
      
      if ( byLine >= 0 || title  >= 0 || section >= 0) {
        results.push(value);
      }
    })

    this.setState({articleState: results, clearButton: true});
  }

  clearArticles() {
    this.setState({articleState: this.articles, clearButton: false})
  }


  render() {
    const articleList = this.state.articleState.map((article, i) => {
      return <Articles key={i} title={article.title} abstract={article.abstract} by={article.byline} url={article.url} image={article.multimedia[0].url} display={this.state.display} />
    })

    return (
      <div className='App'>
        <h1>Popular NY Times Science Articles</h1>
        <div className='search'>
          <input ref={this.textInput} type='search' name='q'></input>
          <button onClick={this.searchArticles.bind(this)}>Search</button>
        </div>
        { this.state.show ? 
        <div className='article-container'>
          { this.state.clearButton ? <button className="article-clear" onClick={this.clearArticles.bind(this)}>Clear Results</button> : '' }
          { articleList.length == 0 ? <div className='article-container--no-results'>No results found</div> : articleList }
        </div> : ''
        }
      </div>
    )
  }
}

export default App;
