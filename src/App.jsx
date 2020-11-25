import React, { useState, useEffect } from 'react';
import nytimesApi from './data/nytimesApi';
import { makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import SearchBar from './components/SearchBar';
import TextField from '@material-ui/core/TextField';
import Fuse from 'fuse.js';

// //----------------------------- styles ---------------------------------//
const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 330,
    flexGrow: 1,
    margin: 10,
    padding: 0,
  },
  cardContainer: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
  },
  media: {
    height: 140,
  },
  title: {
    textAlign: "center",
    paddingBottom: 55,
    paddingTop: 45,
    fontFamily: "Castoro, serif",
  },
  searchForm: {
    margin: theme.spacing(1),
    display: "flex",
    justifyContent: "center",
    paddingBottom: 55,
  },
  textField: {
    width: 350,
  },
}));


//----------------------------- Card for Article ---------------------------------//

const App = () => {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');

  const classes = useStyles();

  useEffect(() => {
    setLoading(true)
    fetch(nytimesApi)
      .then(response => response.json())
      .then(articleData => {
        setArticles(articleData)
        setLoading(false)
      })
      .catch(e => {
        setLoading(false);
        setError('Fetch failed');
      });
  }, []);

  if (loading) {
    return <p>loading...</p>;
  }

  if (error) {
    return <p>ERROR: {error}</p>;
  }

  // -------------------------------- Fuzzy Search ------------------------------ //
  // Displays article results even if words are mispelled

    const fuse = new Fuse(articles.results, {
      keys: [
        "section",
        "title",
        "byline",
        "url",
        "abstract",
        "multimedia",
      ],
    });
  

  const searchResults = fuse.search(searchQuery);
  const articleResults = searchQuery ? searchResults.map(result => result.item) : articles.results;


  // storing input text value in state on event change
  const handleSearch = ({ currentTarget = {} }) => {
    const { value } = currentTarget;
    setSearchQuery(value);
  };
  // -------------------------------------------------------------------------------- //
  return (
    <div>
    <Typography className={classes.title} variant="h3" color="textPrimary">Thrilling Times Magazine</Typography>
    {/* <div>
    <form className={classes.searchForm} noValidate autoComplete="off">
      <TextField 
      className={classes.textField}
      label="Search"
      value={searchQuery}
      onChange={handleSearch}
      />
    </form>
    </div> */}
    <SearchBar 
    searchQuery={searchQuery}
    handleSearch={handleSearch}
    />
    <div className={classes.cardContainer}>
    {articleResults.map((article, i) => (
      <Card className={classes.root} key={i}>
      <CardActionArea href={article.url} target="_blank">
        <CardMedia
          className={classes.media}
          image={article.multimedia[0].url}
          title="Thumbnail"
        />
        <CardContent>
          <Typography gutterBottom variant="h6" component="h2">
          {article.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {article.abstract}
          </Typography>
          <br />
        <Typography variant="body2" color="textSecondary" component="p" style={{fontSize:12}}>
          {article.byline}
        </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
    ))}
    </div>
    </div>
   )
  }

export default App;