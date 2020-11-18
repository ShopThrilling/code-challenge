import Container from '@material-ui/core/Container'
import makeStyles from '@material-ui/core/styles/makeStyles'
import React from 'react'
import './App.css'
import ArticleGridList from './components/ArticleGridList'
import NavBar from './components/NavBar'
import data from './data/apiData.json'
import { styles } from './theme/styles'

const useStyles = makeStyles(styles)

const searchKeyword = (keyword) => {
  // TODO: do filtering stuff here
}

const App = () => {
  const classes = useStyles()

  // initialize keyword as empty string
  let keyword = ''

  return (
    <div className='App'>
      <NavBar siteTitle='Thrilling Articles' keyword={keyword} className={classes.navbar} />
      <Container maxWidth='lg'>
        {/* TODO: Articles are .filter(ed) based on matching keyword
            i.e. only return values that match what's in the search box */}
        <ArticleGridList articles={data.results} keyword={keyword} />
      </Container>
    </div>
  )
}

export default App
