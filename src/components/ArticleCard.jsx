// import React, { useState, useEffect } from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import Card from '@material-ui/core/Card';
// import CardActionArea from '@material-ui/core/CardActionArea';
// import CardActions from '@material-ui/core/CardActions';
// import CardContent from '@material-ui/core/CardContent';
// import CardMedia from '@material-ui/core/CardMedia';
// import Button from '@material-ui/core/Button';
// import Typography from '@material-ui/core/Typography';
// import nytimesApi from '../data/nytimesApi';
// import axios from 'axios';

// //----------------------------- styles ---------------------------------//
// const useStyles = makeStyles({
//   root: {
//     maxWidth: 345,
//   },
//   media: {
//     height: 140,
//   },
// });

// //----------------------------- Card for Article ---------------------------------//

// export default function ArticleCard() {
//   const [data, setData] = useState({ articles: [] });

//   const classes = useStyles();

//   useEffect(() => {
//     const fetchData = async () => {
//       const result = await axios(nytimesApi);
//       setData(result.data);
//     };
//     fetchData();
//   }, []);
  
//   return (
//     // <div>
//     // <ul>
//     //   {data.articles.map(article => (
//     //     <li key={article.title}>
//     //       <p>{article.title}</p>
//     //     </li>
//     //   ))}
//     // </ul>
//     {/* {articleList.articles.map(article => (
//       <Card className={classes.root}>
//       <CardActionArea>
//         <CardMedia
//           className={classes.media}
//           image="/static/images/cards/contemplative-reptile.jpg"
//           title="Contemplative Reptile"
//         />
//         <CardContent>
//           <Typography gutterBottom variant="h5" component="h2">
//             {article.title}
//           </Typography>
//           <Typography variant="body2" color="textSecondary" component="p">
//             {article.abstract}
//           </Typography>
//           <br />
//         <Typography variant="body2" color="textSecondary" component="p">
//           {article.byline}
//         </Typography>
//         </CardContent>
//       </CardActionArea>
//       <CardActions>
//         <Button size="small" color="primary">
//           Share
//         </Button>
//         <Button size="small" color="primary" target={article.url}>
//           Learn More
//         </Button>
//       </CardActions>
//     </Card>
//     ))} */}
//     {/* </div> */}
//   );
// }
