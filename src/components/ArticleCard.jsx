import React from 'react';
import {
  makeStyles,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
} from "@material-ui/core";


// ---------------------------------- styles ------------------------------------- //
const useStyles = makeStyles(() => ({
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
}));


// ----------------------------- Card for Article --------------------------------- //
const ArticleCard = ({ articleResults }) => {
  const classes = useStyles();

  return (
    <div className={classes.cardContainer}>
      {articleResults.map((article, i) => (
        <Card cy-data="card" className={classes.root} key={`articleCard_${i}`}>
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
  )
};

export default ArticleCard;
