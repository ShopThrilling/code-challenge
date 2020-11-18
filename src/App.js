import Container from '@material-ui/core/Container'
import makeStyles from '@material-ui/core/styles/makeStyles'
import React, { useState, useEffect } from 'react'
import './App.css'
import ArticleGridList from './components/ArticleGridList'
import NavBar from './components/NavBar'
import { API_ROOT, API_KEY, get } from './api'
import data from './data/apiData.json'
import { styles } from './theme/styles'

// TODO: call API to get articles, lazy load

const useStyles = makeStyles(styles)

const filterArticles = (articles, keyword) => {
  // TODO: do filtering stuff here
  // consider articles.results array:
  // filter along title, byline, section
  return articles.filter((article) => {
    const lck = keyword.toLowerCase()
    return article.title.toLowerCase().includes(lck) || article.byline.toLowerCase().includes(lck) || article.section.toLowerCase().includes(lck)
  })
}

const App = () => {
  const classes = useStyles()

  // initialize keyword as empty string
  const [
    keyword,
    setKeyword
  ] = useState('')

  // TODO: api get / fetch
  let articleData = filterArticles(data.results, keyword)

  // initialize articles state as empty array
  // (to be lazily fetched via api HTTP get request)
  const [
    articles,
    setArticles
  ] = useState([])

  const [
    error,
    setError
  ] = useState({})

  useEffect(
    () => {
      const getData = () =>
        get(API_ROOT, API_KEY)
          .then((response) => {
            if (response.ok) {
              return response.json()
            }
            throw response
          })
          .catch((error) => {
            if (error instanceof Error) {
              return Promise.reject({ error })
            }

            return error.json().then((responseJson) => {
              return Promise.reject({
                error: new Error(`HTTP ${error.status} ${error.statusText}: ${responseJson.msg}`)
              })
            })
          })
          .then(setArticles, (error) => {
            if (process.env.NODE_ENV === 'development') console.log(error)
            setError({ error })
          })
      // call it!
      getData()
    },
    [
      setArticles,
      setError
    ]
  )

  return (
    <div className='App'>
      <NavBar siteTitle='Thrilling Articles' keyword={keyword} setKeyword={setKeyword} className={classes.navbar} />
      <Container maxWidth='lg'>
        {/* TODO: Articles are .filter(ed) based on matching keyword
            i.e. only return values that match what's in the search box */}
        <ArticleGridList articles={articleData} keyword={keyword} />
      </Container>
    </div>
  )
}

export default App
