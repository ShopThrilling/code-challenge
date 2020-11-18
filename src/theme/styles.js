// import red from '@material-ui/core/colors/red'

export const sideMenuWidth = 320

export const styles = (theme) => ({
  root: {
    margin: 0,
    padding: 0,
    display: 'flex',
    fontFamily: 'Inconsolata, Helvetica'
  },
  navbar: {
    backgroundColor: '#ddd'
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
    // margin: 'auto 0',
    // textAlign: 'center',
    height: 210,
    alignItems: 'stretch'
    // transform: translateX(0, 50%),
  },
  articleCardHeader: {
    fontWeight: 'bold',
    textTransform: 'uppercase',
    fontStyle: 'small-caps',
    fontFamily: 'sans-serif',
    color: '#000',
    textAlign: 'left',
    justify: 'left',
    // fontFamily: 'small-caps',
    fontSize: '0.6em',
    '& span': {
      color: '#000',
      fontWeight: 'bold',
      fontSize: '0.8rem'
    }
  },
  articleTitle: {
    fontStyle: 'italic',
    fontFamily: 'serif'
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
    textAlign: 'justify'
  },
  articleContent: {
    flex: '1 0 auto',
    alignItems: 'stretch'
  },
  articleCardContent: {
    flexGrow: 1,
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
      marginBottom: 0,
    }
  }
})
