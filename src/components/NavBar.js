import React from 'react'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import InputBase from '@material-ui/core/InputBase'
import { fade, makeStyles } from '@material-ui/core/styles'
import SearchIcon from '@material-ui/icons/Search'
import NavBarContent from '../components/NavBarContent'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block'
    },
    textAlign: 'left',
    fontFamily: 'Gastromond',
    fontStyle: 'italic',
    fontSize: '3rem'
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    border: '1px solid #0e0e0e',
    color: '#0e0e0e',
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25)
    },
    // marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: 'auto'
    }
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.palette.common.black
  },
  inputRoot: {
    color: 'inherit'
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)}px)`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch'
      }
    }
  }
}))


const NavBar = ({ sections, keyword, setKeyword, filterArticles, setSection }) => {
  const classes = useStyles()

  const handleKeywordChange = (e) => {
    e.preventDefault()
    setKeyword(e.target.value)
    setSection('')
  }

  return (
    <div className={classes.root}>
      <AppBar position='static' style={{ backgroundColor: '#ddd' }}>
        <Toolbar>
          {/* <Typography className={classes.title} variant='h6' noWrap>
            {siteTitle}
          </Typography> */}
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder='Search…'
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput
              }}
              inputProps={{ 'aria-label': 'search' }}
              onChange={e => handleKeywordChange(e)}
              value={keyword}
            />
          </div>
        </Toolbar>
        <NavBarContent sections={sections} setSection={setSection} />
      </AppBar>
    </div>
  )
}

export default NavBar
