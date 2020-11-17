import React from 'react'
// import { makeStyles } from '@material-ui/core/styles'
import List from '@material-ui/core/List'
import Divider from '@material-ui/core/Divider'
import ArticleItem from './ArticleItem'
// import styles from '../theme/index.css'

// const articles = [
//   { title: 'article', byline: 'this is the byline of the article sup mane', section: 'news' },
//   { title: 'article', byline: 'this is the byline of the article sup mane', section: 'sports' },
//   { title: 'article', byline: 'this is the byline of the article sup mane', section: 'politics' },
//   { title: 'article', byline: 'this is the byline of the article sup mane', section: 'world' },
//   { title: 'article', byline: 'this is the byline of the article sup mane', section: 'trump' },
//   { title: 'article', byline: 'this is the byline of the article sup mane', section: 'science' }
// ]

const ArticleList = ({articles}) => {
  // const classes = useStyles()

  return (
    <List component='div' aria-label='articles' style={{ width: '100%' }}>
      {articles.map((article) => (
        <>
          <ArticleItem article={article} key={article.uri} />
          <Divider />
        </>
      ))}
    </List>
  )
}

export default ArticleList
