import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import React from 'react'
import { styles } from '../theme/styles'
import makeStyles from '@material-ui/core/styles/makeStyles'

const Logo = () => {
  const classes = makeStyles(styles)()
  return (
    <Grid container spacing={0}>
      <Grid item xs={12}>
        <Paper className={classes.logoContainer}>
          <Typography variant='h1' component='h1' className={classes.logoText}>
            Thrilling Articles
          </Typography>
          <Typography variant='h5' component='p' className={classes.logoSubtext}>
            You'll never guess what happened.
          </Typography>
        </Paper>
      </Grid>
    </Grid>
  )
}

export default Logo
