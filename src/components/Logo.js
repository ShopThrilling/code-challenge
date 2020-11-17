import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
// import { ThemeOptions } from '@material-ui/core/styles/'
import React from 'react'

const Logo = () => {
  return (
    <Grid container spacing={0}>
      <Grid item xs={12}>
        <Paper>
          <Typography variant='h1' component='h1'>
            Thrilling Articles
          </Typography>
        </Paper>
      </Grid>
    </Grid>
  )
}

export default Logo
