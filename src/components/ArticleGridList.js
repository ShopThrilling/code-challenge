import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
// import List from '@material-ui/core/List'
import Grid from '@material-ui/core/Grid'
// import Divider from '@material-ui/core/Divider'
// import ArticleItem from './ArticleItem'
import ArticleCard from './ArticleCard'
// import styles from '../theme/index.css'

// const articles = [
//   { title: 'article', byline: 'this is the byline of the article sup mane', section: 'news' },
//   { title: 'article', byline: 'this is the byline of the article sup mane', section: 'sports' },
//   { title: 'article', byline: 'this is the byline of the article sup mane', section: 'politics' },
//   { title: 'article', byline: 'this is the byline of the article sup mane', section: 'world' },
//   { title: 'article', byline: 'this is the byline of the article sup mane', section: 'trump' },
//   { title: 'article', byline: 'this is the byline of the article sup mane', section: 'science' }
// ]

const useStyles = makeStyles({
  root: {
    // clear: 'both',
    marginTop: '3rem',
    // paddingTop: '3rem',
  }
})

const ArticleList = ({ articles }) => {
  const classes = useStyles()

  return (
    <Grid container className={classes.root} direction='row' alignItems='left' spacing={2}>
      {articles.map((article) => <ArticleCard article={article} key={article.uri} spacing={3} />)}
    </Grid>
  )
}

export default ArticleList
