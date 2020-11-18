import Container from '@material-ui/core/Container'
import makeStyles from '@material-ui/core/styles/makeStyles'
import React from 'react'
import './App.css'
import Logo from './components/Logo'
import NavBar from './components/NavBar'
// import ArticleList from './components/ArticleList'
import ArticleGridList from './components/ArticleGridList'

// import moduleName from '@material-ui'
import data from './data/apiData.json'

import { styles } from './theme/styles'

const useStyles = makeStyles(styles)

const logoStyle = {
  top: 0,
  marginTop: 0,
  display: 'flex',
  alignSelf: 'center',
  width: '100%'
}

const App = () => {
  const classes = useStyles()

  console.log(classes)
  console.log(data.results)

  return (
    <div className='App'>
      <NavBar siteTitle='Thrilling Articles' />
      <Container maxWidth='lg'>
        {/* <Logo style={logoStyle} /> */}
        <ArticleGridList articles={data.results} />
      </Container>
    </div>
  )
}

export default App
