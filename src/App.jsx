import React, { useState, useEffect } from 'react';
import nytimesApi from './data/nytimesApi';
import { makeStyles} from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
// import SearchBar from './components/SearchBar';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import SearchIcon from '@material-ui/icons/Search';
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
  titleText: {
    textAlign: "center",
    paddingBottom: 45,
    padding: 25,
  },
  searchForm: {
    margin: theme.spacing(1),
    width: "25ch",
    display: "inline-flex",
    paddingLeft: 45,
},
iconButton: {
  marginTop: 10,
}
}));


//----------------------------- Card for Article ---------------------------------//

const App = () => {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);
  const [photos, setPhotos] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');

  const classes = useStyles();

  useEffect(() => {
    setLoading(true)
    fetch(nytimesApi)
      .then(response => response.json())
      .then(articleData => {
        setArticles(articleData)
        setLoading(false)
        const photoUrls = []
        articleData.results.forEach(data => {
          const photoData = data.multimedia.filter(photo => photo.format === "Normal")
          photoUrls.push(...photoData)
        })
        setPhotos(photoUrls)
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
      ],
      includeScore: true
    });
  

  const searchResults = fuse.search(searchQuery);
  const articleResults = searchQuery ? searchResults.map(result => result.item) : articles.results;

  console.log("health", searchResults)
  console.log("all", articleResults)
  // console.log("articles", articleResults)


  // storing input text value in state on event change
  const handleSearch = ({ currentTarget = {} }) => {
    const { value } = currentTarget;
    setSearchQuery(value);
  };
  // -------------------------------------------------------------------------------- //
  return (
    <div>
    <Typography className={classes.titleText} variant="h1" color="textPrimary">Thrilling Times</Typography>
    <div>
    <form className={classes.searchForm} noValidate autoComplete="off">
      <TextField 
      id="standard-basic" 
      label="Search"
      value={searchQuery}
      onChange={handleSearch}
      />
      <IconButton className={classes.iconButton} onClick={() => handleSearch()}>
        <SearchIcon /> 
      </IconButton>
    </form>
    </div>
    <div className={classes.cardContainer}>
    {articleResults.map((article, i) => (
      <Card className={classes.root} key={i}>
      <CardActionArea >
        <CardMedia
          className={classes.media}
          // image={photos[i].url}
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
        <Typography variant="body2" color="textSecondary" component="p">
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