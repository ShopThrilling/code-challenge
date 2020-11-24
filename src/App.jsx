import React, { useState, useEffect } from 'react';
import nytimesApi from './data/nytimesApi';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

// //----------------------------- styles ---------------------------------//
const useStyles = makeStyles({
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
    padding: 25
  }
});

// //----------------------------- Card for Article ---------------------------------//

const App = () => {
  const [articles, setArticles] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(true);

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

  // const imageUrls = articles.results.mulimedia.filter(image => image.format === "Normal")
  
  return (
    <div>
    <h1 className={classes.titleText}>Thrilling Science Articles</h1>
    <div className={classes.cardContainer}>
    {articles.results.map((article, i) => (
      <Card className={classes.root} key={i}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          // square imageUrl={article.multimedia.url}
          image="https://static01.nyt.com/images/2020/10/27/science/00VIRUS-REGENERON-HFO1/00VIRUS-REGENERON-HFO1-articleInline-v2.jpg"
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
      <CardActions>
        <Button size="small" color="primary" href={article.url} target="_blank">
          Read More
        </Button>
      </CardActions>
    </Card>
    ))}
    </div>
    </div>
   )
  }

export default App;