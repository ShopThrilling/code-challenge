import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Grid from '@material-ui/core/Grid'
import ArticleCard from './ArticleCard'


const useStyles = makeStyles({
  root: {
    marginTop: '3rem'
  }
})

const ArticleGridList = ({ articles, section }) => {
  const classes = useStyles()

  return (
    <Grid container className={classes.root} direction='row' alignItems='stretch' spacing={2}>
      {articles && articles.map((article) => <ArticleCard article={article} key={article.uri} spacing={3} />)}
    </Grid>
  )
}

export default ArticleGridList
