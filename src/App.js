import CircularProgress from '@material-ui/core/CircularProgress'
import Container from '@material-ui/core/Container'
import makeStyles from '@material-ui/core/styles/makeStyles'
import React, { useState, useEffect } from 'react'
import NavBar from './components/NavBar'
import ErrorSnackbar from './components/ErrorSnackbar'
import { API_ROOT, get, params } from './api'
import { styles } from './theme/styles'

// Lazy load articles for faster page render time
const ArticleGridListLazy = React.lazy(() => import('./components/ArticleGridList'))

const useStyles = makeStyles(styles)

const filterArticles = (articles, keyword) => {
  // consider articles.results array:
  // filter along title, byline, section
  return articles.filter((article) => {
    const lck = keyword.toLowerCase()
    // TODO: simplify this mess, bruh
    return (
      article.title.toLowerCase().includes(lck) ||
      article.byline.toLowerCase().includes(lck) ||
      article.section.toLowerCase().includes(lck)
    )
  })
}

const App = () => {
  const classes = useStyles()

  // initialize keyword as empty string
  const [
    keyword,
    setKeyword
  ] = useState('')

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
      // TODO: clean up this fn
      const getData = () =>
        get(API_ROOT, params)
          .then((response) => {
            console.log(response)
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
          .then(
            (responseData) => setArticles(responseData.results),
            (error) => {
              if (process.env.NODE_ENV === 'development') console.log(error)
              setError({ error })
            }
          )
      // call it!
      getData()
    },
    [
      setArticles,
      setError
    ]
  )

  let filteredArticles = filterArticles(articles, keyword)

  return (
    <div className='App'>
      <NavBar siteTitle='Thrilling Articles' keyword={keyword} setKeyword={setKeyword} className={classes.navbar} />
      <Container maxWidth='lg' className={classes.root}>
      <ErrorSnackbar error={error} />
        <React.Suspense fallback={<CircularProgress style={{ margin: 'auto', left: '50%', top: '50%' }} />}>
          <ArticleGridListLazy articles={filteredArticles} keyword={keyword} />
        </React.Suspense>
      </Container>
    </div>
  )
}

export default App
