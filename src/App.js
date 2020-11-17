import Container from '@material-ui/core/Container'
import makeStyles from '@material-ui/core/styles/makeStyles'
import React from 'react'
import './App.css'
import Logo from './components/Logo'
import NavBar from './components/NavBar'
import ArticleList from './components/ArticleList'

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
      <Container maxWidth='lg'>
        <NavBar siteTitle='Thrilling Articles' />
        <Logo style={logoStyle} />
        <ArticleList articles={data.results} />
      </Container>
    </div>
  )
}

export default App