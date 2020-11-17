import React from 'react'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'

const ArticleItem = ({article}) => {
  return (
    <ListItem>
      <ListItemIcon>
        { article.multimedia && <a href={article.url} target='_blank' rel='noreferrer'><img src={article.multimedia[2].url} alt={article.title} /></a> }
      </ListItemIcon>
      <ListItemText style={{ marginLeft: '1rem' }}>
        <h3>{article.title}</h3>
        <p style={{ fontStyle: 'italic' }}>{article.byline}</p>
        <p>{article.abstract}</p>
      </ListItemText>
    </ListItem>
  )
}

export default ArticleItem
