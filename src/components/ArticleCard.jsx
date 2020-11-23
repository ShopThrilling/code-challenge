import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import nytimesApi from '../data/nytimesApi';

//----------------------------- styles ---------------------------------//
const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
});

//----------------------------- Card for Article ---------------------------------//

export default function ArticleCard() {
  const [articles, setArticles] = useState([]);
  const [titles, setTitles] = useState([]);

  const classes = useStyles();

  useEffect(() => {
    getAllArticles();
  });


  //------ Fetching all articles from api -------//

  const getAllArticles = async () => {
    const response = await fetch(nytimesApi);
    const articleData = await response.json();
    setArticles(articleData.results);
    for (let i = 0; i < articles.length; i++){
      setTitles(articles[i].title);
    }
  }
    
  return (
    <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image="/static/images/cards/contemplative-reptile.jpg"
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
         hello
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
          Share
        </Button>
        <Button size="small" color="primary">
          Learn More
        </Button>
      </CardActions>
    </Card>
  );
}
