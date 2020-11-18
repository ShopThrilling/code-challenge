import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardActions from '@material-ui/core/CardActions'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Grid from '@material-ui/core/Grid'
import Button from '@material-ui/core/Button'
// import IconButton from '@material-ui/core/IconButton'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
// import {ShareIcon} from '@material-ui/icons'
// import ExpandMoreIcon from '@material-ui/icons/ExpandMoreIcon'
// import { Translate } from '@material-ui/icons'

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    height: '100%',
    minHeight: '100%',
    maxHeight: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'stretch'
  },
  media: {
    height: 140
  },
  card: {
    justifySelf: 'flex-start',
    // margin: 'auto 0',
    // textAlign: 'center',
    height: 210,
    alignItems: 'stretch'
    // transform: translateX(0, 50%),
  },
  header: {
    fontWeight: 'bold',
    textTransform: 'uppercase',
    fontStyle: 'small-caps',
    fontFamily: 'sans-serif',
    color: '#000',
    textAlign: 'left',
    justify: 'left',
    // fontFamily: 'small-caps',
    fontSize: '0.6em',
    '& span': {
      color: '#000',
      fontWeight: 'bold',
      fontSize: '0.8rem'
    }
  },
  title: {
    fontStyle: 'italic',
    fontFamily: 'serif'
  },
  byline: {
    fontFamily: 'serif',
    color: 'lightgray',
    justify: 'right',
    textAlign: 'left',
    textTransform: 'lowercase',
    flexShrink: 0
  },
  abstract: {
    textAlign: 'justify'
  },
  content: {
    flex: '1 0 auto',
    alignItems: 'stretch'
  },
  cardContent: {
    flexGrow: 1,
    alignItems: 'stretch'
  },
  placeholderText: {
    fontStyle: 'italic',
    fontFamily: 'serif',
    textAlign: 'center',
    padding: '2rem',
    margin: 'auto',
    top: '50%',
    backgroundColor: '#efefef',
    height: '100%'
  },
  actions: {
    bottom: 0,
    flexShrink: 0,
    '& button': {
      marginTop: 0,
      marginBottom: 0,
    }
  }
})

const ArticleCard = ({ article, spacing }) => {
  const classes = useStyles()

  return (
    <Grid item xs={12} sm={6} md={4} spacing={spacing}>
      <Card className={classes.root}>
        <div className={classes.content}>
          <CardHeader subheader={article.section} className={classes.header} />
          <CardActionArea>
            {/* article.multimedia && <CardMedia className={classes.card} image={article.multimedia[3].url} title={article.title} /> */}
            {/* <CardMedia className={classes.card} image={article.multimedia && article.multimedia[3].url || <Typography variant='caption' style={{ fontStyle: 'italic' }}>{article.title}</Typography> } title={article.title} /> */}
            {article.multimedia ? (
              <CardMedia className={classes.card} image={article.multimedia[3].url} title={article.title} />
            ) : (
              <CardMedia className={classes.card} title={article.title}>
                <Typography variant='h4' className={classes.placeholderText}>
                  {article.title}
                </Typography>
              </CardMedia>
            )}
            <CardContent className={classes.cardContent}>
              <Typography className={classes.title} gutterBottom variant='h5' component='h2'>
                {article.title}
              </Typography>
              <Typography className={classes.byline} gutterBottom variant='h6' component='h4'>
                {article.byline}
              </Typography>
              <Typography className={classes.abstract} variant='body2' color='textSecondary' component='p'>
                {article.abstract}
              </Typography>
            </CardContent>
          </CardActionArea>
        </div>
        <Divider/>
        <CardActions className={classes.actions}>
          <Button size='small' color='primary'>
            Share
          </Button>
          <Button size='small' color='primary'>
            {/* <ExpandMoreIcon /> */}
            Read More
          </Button>
        </CardActions>
      </Card>
    </Grid>
  )
}

export default ArticleCard
