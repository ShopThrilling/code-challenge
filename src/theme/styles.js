import red from '@material-ui/core/colors/red'

import GastromondWoff2 from './fonts/gastromond-regular.woff2'
import ProximaNovaWoff2 from './fonts/proxima-nova.woff2'
import { createMuiTheme } from '@material-ui/core'

const gastromond = {
  fontFamily: 'Gastromond',
  fontStyle: 'normal',
  fontDisplay: 'swap',
  fontWeight: '400',
  src: `
  local('Gastromond'),
  local('Gastromond-Regular'),
  url(${GastromondWoff2}) format('woff2')`,
  unicodeRange:
    'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF'
}

const proxima = {
  fontFamily: 'Proxima-Nova',
  fontStyle: 'normal',
  fontDisplay: 'swap',
  fontWeight: '400',
  src: `
  local('Proxima'),
  local('Proxima-Nova'),
  url(${ProximaNovaWoff2}) format('woff2')`,
  unicodeRange:
    'U+0000-00FF, U+0131, U+0152-0153, U+02BB-02BC, U+02C6, U+02DA, U+02DC, U+2000-206F, U+2074, U+20AC, U+2122, U+2191, U+2193, U+2212, U+2215, U+FEFF'
}

export const theme = createMuiTheme({
  typography: {
    fontFamily: 'Proxima-Nova, sans-serif'
  },
  overrides: {
    MuiCssBaseline: {
      '@global': {
        '@font-face': [
          proxima
        ]
      }
    }
  }
})

export const styles = (theme) => ({
  root: {
    fontFamily: 'Proxima, Helvetica'
  },
  logoContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignContent: 'center',
    justifyContent: 'space-around',
    padding: '2rem auto'
  },
  logoText: {
    flexShrink: 1,
    flexGrow: 1,
    textAlign: 'center',
    fontStyle: 'italic',
    fontFamily: 'Gastromond',
    paddingTop: '3rem',
    // paddingBottom: '4rem'
  },
  logoSubtext: {
    // flexShrink: 0,
    flexGrow: 1,
    fontFamily: 'Proxima',
    fontStyle: 'italic',
    alignSelf: 'center',
    paddingBottom: '1rem'
  },
  navbar: {
    backgroundColor: '#ddd'
  },
  navMenu: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-evenly',
    alignItems: 'center'
  },
  navItem: {
    flex: '1 1 auto'
  },
  articleCardGrid: {
    marginBottom: '2rem',
    textAlign: 'center',
    justifyContent: 'center'
  },
  articleCardRoot: {
    maxWidth: 345,
    height: '100%',
    minHeight: '100%',
    maxHeight: '100%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'stretch'
  },
  articleMedia: {
    height: 140
  },
  articleCard: {
    justifySelf: 'flex-start',
    height: 210,
    alignItems: 'stretch'
  },
  articleCardHeader: {
    fontWeight: 'bold',
    textTransform: 'uppercase',
    fontStyle: 'small-caps',
    fontFamily: 'sans-serif',
    color: '#000',
    textAlign: 'left',
    justify: 'left',
    fontSize: '0.6em',
    '& span': {
      color: '#000',
      fontWeight: 'bold',
      fontSize: '0.8rem'
    }
  },
  articleTitle: {
    fontStyle: 'italic',
    fontFamily: 'serif',
    color: '#000',
    textDecoration: 'none'
  },
  articleByline: {
    fontFamily: 'serif',
    fontSize: '1rem',
    color: 'lightgray',
    justify: 'right',
    textAlign: 'left',
    flexShrink: 0
  },
  articleAbstract: {
    textAlign: 'justify',
    flex: '1 0 auto',
    alignItems: 'stretch'
  },
  articleContent: {
    flex: '1 0 auto',
    alignItems: 'stretch'
  },
  articleCardContent: {
    flex: '1 1 auto',
    alignItems: 'stretch'
  },
  articlePlaceholderText: {
    fontStyle: 'italic',
    fontFamily: 'serif',
    textAlign: 'center',
    padding: '2rem',
    margin: 'auto',
    top: '50%',
    backgroundColor: '#efefef',
    height: '100%'
  },
  articleActions: {
    bottom: 0,
    flexShrink: 0,
    '& button': {
      marginTop: 0,
      marginBottom: 0
    }
  },
  errorSnackbar: {
    backgroundColor: red[600]
  }
})
