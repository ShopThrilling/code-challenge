import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import nytimesApi from './data/nytimesApi';
import axios from 'axios';

// //----------------------------- styles ---------------------------------//
const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
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
  
  return (
    <div>
    {articles.results.map((article, i) => (
      <Card className={classes.root} key={i}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="/static/images/cards/contemplative-reptile.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
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
   )
  }


// const App = () => {
//   // const [articles, setArticles] = useState([]);

//   // useEffect(() => {
//   //   getAllArticles();
//   // });

//   // const getAllArticles = async () => {
//   //   const response = await fetch(nytimesApi);
//   //   const articleData = await response.json();
//   //   setArticles(articleData);
//   //   // console.log(articles.results)
//   // }
//   return (
//     <div>
//    <ArticleCard /> 
//     </div>
//   )
// };

export default App;