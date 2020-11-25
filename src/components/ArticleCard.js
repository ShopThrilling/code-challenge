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
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import { styles } from '../theme/styles'
import Link from '@material-ui/core/Link'

const useStyles = makeStyles(styles)

const ArticleCard = ({ article, spacing }) => {
  const classes = useStyles()

  return (
    <Grid item xs={12} sm={6} md={4} spacing={spacing} className={classes.articleCardGrid}>
      '<Card className={classes.articleCardRoot}>
        <div className={classes.articleContent}>
          <CardHeader subheader={article.section} className={classes.articleCardHeader} />
          <Link href={article.url} target='_blank' rel='noopener noreferrer'>
            <CardActionArea>
              {article.multimedia ? (
                <CardMedia className={classes.articleCard} image={article.multimedia[3].url} title={article.title} />
              ) : (
                <CardMedia className={classes.articleCard} title={article.title}>
                  <Typography variant='h4' className={classes.articlePlaceholderText}>
                    {article.title}
                  </Typography>
                </CardMedia>
              )}
              <CardContent className={classes.articleCardContent}>
                <Typography className={classes.articleTitle} gutterBottom variant='h5' component='h2'>
                  {article.title}
                </Typography>
                <Typography className={classes.articleByline} gutterBottom variant='h6' component='h4'>
                  {article.byline}
                </Typography>
                <Typography className={classes.articleAbstract} variant='body2' color='textSecondary' component='p'>
                  {article.abstract}
                </Typography>
              </CardContent>
            </CardActionArea>
          </Link>
        </div>
        <Divider />
        <CardActions className={classes.articleActions}>
          <Button size='small' color='primary'>
            Share
          </Button>
          <Button size='small' color='primary'>
            <Link href={article.url} target='_blank' rel='noopener noreferrer'>
              Read More
            </Link>
          </Button>
        </CardActions>
      </Card>
    </Grid>
  )
}

export default ArticleCard
