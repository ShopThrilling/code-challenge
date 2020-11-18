import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
// import ArticleItem from './ArticleItem'
import ArticleCard from './ArticleCard'


const useStyles = makeStyles({
  root: {
    // clear: 'both',
    marginTop: '3rem',
    // paddingTop: '3rem',
  }
})

const ArticleList = ({ articles }) => {
  const classes = useStyles()

  // articles = articles.filter(
    // TODO: filtering based on keyword along article.title, article.byline, and article.section
  // )

  return (
    <Grid container className={classes.root} direction='row' alignItems='left' spacing={2}>
      {articles.map((article) => <ArticleCard article={article} key={article.uri} spacing={3} />)}
    </Grid>
  )
}

export default ArticleList
