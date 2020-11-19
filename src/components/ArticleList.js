import React from 'react'
import List from '@material-ui/core/List'
import Divider from '@material-ui/core/Divider'
import ArticleCard from './ArticleCard'

const ArticleList = ({articles}) => {

  return (
    <List component='div' aria-label='articles' style={{ width: '100%' }}>
      {articles.map((article) => (
        <>
          <ArticleCard article={article} key={article.uri} />
          <Divider />
        </>
      ))}
    </List>
  )
}

export default ArticleList
